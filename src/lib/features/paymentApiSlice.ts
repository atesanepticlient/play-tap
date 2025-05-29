import { Prisma } from "@prisma/client";
import { apiSlice } from "./apiSlice";

const paymentApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    fetchWallets: builder.query<
      { paymentWallets: Prisma.PaymentWalletGetPayload<object>[] },
      { access?: string }
    >({
      query: ({ access }) => ({
        url: `api/payment-wallets?access=${access ? access : ""}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useFetchWalletsQuery } = paymentApiSlice;
