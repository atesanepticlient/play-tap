import { findCurrentUser } from "@/data/user";
import { INTERNAL_SERVER_ERROR } from "@/error";
import { db } from "@/lib/db";

export const GET = async () => {
  try {
    const user = await findCurrentUser();
    if (!user)
      return Response.json({ error: "Authtication Failed" }, { status: 401 });

    const deposits = await db.deposit.findMany({
      where: { userId: user.id },
      orderBy: { createdAt: "asc" },
    });

    return Response.json(
      { deposits: deposits, success: true },
      { status: 200 }
    );
  } catch {
    return Response.json({ error: INTERNAL_SERVER_ERROR }, { status: 500 });
  }
};
