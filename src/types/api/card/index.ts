import { Prisma } from "@prisma/client";

export interface CreateCardInput {
  walletNumber: string;
  password: string;
  paymentWalletId: string;
}

export interface CreateNewCardInput {
  walletNumber: string;
  password: string;
  ownerName: string;
  paymentWalletId: string;
}

export type ExtendedCard = Prisma.CardGetPayload<{
  include: { user: true };
}> & {
  paymentWallet: Prisma.PaymentWalletGetPayload<object>;
};

export interface CardContainerWithCards {
  cards: Prisma.CardGetPayload<{ include: { user: true } }>;
}

export type CardOutput = Omit<CardContainerWithCards, "cards"> & {
  cards: ExtendedCard[];
};

export interface CreateCardOutput {
  message: string;
  card: ExtendedCard;
}
