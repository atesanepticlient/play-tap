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

    const cardContainer = await db.cardContainer.findUnique({
      where: { userId: user.id },
      include: { cards: true },
    });

    if (!cardContainer)
      return { error: "Please create a new Card with Payeer name" };
    console.log("card container founded");
    const existingCardWithNumber = await db.card.findFirst({
      where: { walletNumber },
    });

    if (existingCardWithNumber)
      return { error: "Card is avialiable! Try with another Number" };
    console.log("existing card container founded");
    const isPasswordMatch = await bcrypt.compare(
      password,
      cardContainer.password
    );

    if (!isPasswordMatch) return { error: "Invalid Password" };

    const limit = cardContainer.cards.length;
    if (limit > 4) {
      return { error: "Card limit reached " };
    }

    const cardNumber = await cardNumberGenerate();

    const card: any = await db.card.create({
      data: {
        walletNumber,
        paymentWalletid: paymentWalletId,
        cardNumber,
        container: {
          connect: {
            id: cardContainer.id,
          },
        },
      },
      include: {
        container: true,
      },
    });
    console.log("card created");
    const paymentWallet = await db.paymentWallet.findUnique({
      where: { id: card.paymentWalletid },
    });
    console.log("paymentWallet founded");
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

    const container = await db.cardContainer.findFirst({
      where: { userId: user.id },
    });

    if (container)
      return { error: "Please Make new card on Existing Container" };

    const existingCardWithNumber = await db.card.findFirst({
      where: { walletNumber },
    });

    if (existingCardWithNumber)
      return { error: "Card is avialiable! Try with another Number" };

    const hasdPassword = await bcrypt.hash(password, 20);
    const cardNumber = await cardNumberGenerate();
    const cardContainer = await db.cardContainer.create({
      data: {
        ownerName,
        password: hasdPassword,
        cards: {
          create: [
            {
              cardNumber,
              walletNumber,
              paymentWalletid: paymentWalletId,
            },
          ],
        },
        user: {
          connect: {
            id: user.id,
          },
        },
      },
    });

    const card: any = await db.card.findFirst({
      where: { containerId: cardContainer.id, walletNumber },
      include: { container: true },
    });

    const paymentWallet = await db.paymentWallet.findUnique({
      where: { id: card.paymentWalletid },
    });
    card.paymentWallet = paymentWallet;
    return { success: true, card };
  } catch (error) {
    console.log("careate new card error ", error);
    return { error: INTERNAL_SERVER_ERROR };
  }
};
