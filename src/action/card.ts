/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { findCurrentUser } from "@/data/user";
import { INTERNAL_SERVER_ERROR } from "@/error";
import { db } from "@/lib/db";
import { cardNumberGenerate } from "@/lib/helpers";
import bcrypt from "bcryptjs";

export const createCard = async (data: any) => {
  try {
    const user = await findCurrentUser();
    if (!user) return { error: "Refresh the page" };

    const { walletNumber, paymentWalletId, password } = data;

    if (!walletNumber || !paymentWalletId || !password)
      return { error: "Invalid Input" };

    const hasCards = await db.card.findMany({ where: { userId: user.id } });

    if (hasCards.length == 0) {
      return { error: "Please make a card owner first" };
    }
    const existingCardWithNumber = await db.card.findFirst({
      where: { walletNumber },
    });

    if (existingCardWithNumber)
      return { error: "Card is avialiable! Try with another Number" };

    const userCardInfo = await db.user.findUnique({
      where: { id: user!.id },
      select: { cardOwnerName: true, cardPassword: true },
    });

    if (!userCardInfo) return { error: "User Not found" };

    const isPasswordMatch = await bcrypt.compare(
      password,
      userCardInfo.cardPassword!
    );

    if (!isPasswordMatch) return { error: "Invalid Password" };

    const limit = hasCards.length;
    if (limit > 4) {
      return { error: "Card limit reached " };
    }

    const cardNumber = await cardNumberGenerate();

    const card: any = await db.card.create({
      data: {
        walletNumber,
        paymentWalletid: paymentWalletId,
        cardNumber,
        user: {
          connect: {
            id: user.id,
          },
        },
      },
    });
    const paymentWallet = await db.paymentWallet.findUnique({
      where: { id: card.paymentWalletid },
    });
    card.paymentWallet = paymentWallet;

    return { success: true, card: card };
  } catch (error) {
    console.log("CREATE CARD ERROR ", error);
    return { error: INTERNAL_SERVER_ERROR };
  }
};

export const createNewCard = async (data: any) => {
  try {
    const user = await findCurrentUser();
    if (!user) return { error: "Refresh the page" };

    const { paymentWalletId, password, walletNumber, ownerName } = data;

    if (!paymentWalletId || !password || !walletNumber || !ownerName)
      return { error: "Invalid Input" };

    const hasCards = await db.card.findMany({ where: { userId: user.id } });

    if (hasCards.length > 0) {
      return { error: "You have already a card holder" };
    }

    const existingCardWithNumber = await db.card.findFirst({
      where: { walletNumber },
    });

    if (existingCardWithNumber)
      return { error: "Card is avialiable! Try with another Number" };

    const hasdPassword = await bcrypt.hash(password, 20);
    const cardNumber = await cardNumberGenerate();

    const [card] = await db.$transaction([
      db.card.create({
        data: {
          cardNumber,
          paymentWalletid: paymentWalletId,
          walletNumber,
          user: {
            connect: {
              id: user.id,
            },
          },
        },
      }),
      db.user.update({
        where: { id: user!.id },
        data: { cardOwnerName: ownerName, cardPassword: hasdPassword },
      }),
    ]);
    console.log("After tr");
    return { success: true, card };
  } catch (error) {
    console.log("careate new card error ", error);
    return { error: INTERNAL_SERVER_ERROR };
  }
};
