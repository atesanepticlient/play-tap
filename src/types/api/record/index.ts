import { Prisma } from "@prisma/client";

export interface DepositsRecordOutput {
  deposits: Prisma.DepositGetPayload<object>[];
}

export interface WithdrawsRecordOutput {
  withdraws: Prisma.WithdrawGetPayload<{ include: { card: true } }>[];
}
