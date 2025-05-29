import { INTERNAL_SERVER_ERROR } from "@/error";
import { db } from "@/lib/db";
import { NextRequest } from "next/server";

export const GET = async (req: NextRequest) => {
  try {
    const access = new URL(req.url).searchParams.get("access") || "";

    const paymentWallets = await db.paymentWallet.findMany({ where: {} });

    let allowedPaymentWallets;
    if (access == "deposit") {
      allowedPaymentWallets = paymentWallets.filter(async (wallet) => {
        const depositWallets = await db.depositWallet.findMany({
          where: { paymentWalletId: wallet.id },
        });

        if (depositWallets && depositWallets.length > 0) return true;
        return false;
      });
    } else {
      allowedPaymentWallets = paymentWallets.filter((wallet) => {
        const walletName = wallet.walletName.toLowerCase();
        return walletName == "bkash" || walletName == "nagad";
      });
    }

    return Response.json(
      { paymentWallets: allowedPaymentWallets },
      { status: 200 }
    );
  } catch {
    return Response.json({ error: INTERNAL_SERVER_ERROR }, { status: 500 });
  }
};
