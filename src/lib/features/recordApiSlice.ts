import { apiSlice } from "./apiSlice";
import {
  DepositsRecordOutput,
  WithdrawsRecordOutput,
} from "@/types/api/record";

const recordApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    fetchDepositsRecords: builder.query<DepositsRecordOutput, void>({
      query: () => ({
        url: "/api/records/deposits",
        method: "GET",
      }),
    }),

    fetchWithdrawRecords: builder.query<WithdrawsRecordOutput, void>({
      query: () => ({
        url: `/api/records/withdraws`,
        method: "GET",
      }),
    }),
  }),
});

export const { useFetchDepositsRecordsQuery, useFetchWithdrawRecordsQuery } =
  recordApiSlice;
