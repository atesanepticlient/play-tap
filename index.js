import { db } from "./src/lib/db.js";
import bcrypt from "bcryptjs";

const seedAdmin = async () => {
  const hashPassword = await bcrypt.hash("123456", 10);
  await db.admin.create({
    data: {
      email: "epti060@gmail.com",
      name: "San Bin Hoque",
      password: hashPassword,
    },
  });

  await db.bonus.create({
    data: {
      signinBonus: 5,
      referralBonus: 5,
    },
  });
};

const seedWallet = async () => {
  await db.paymentWallet.createMany({
    data: [
      {
        walletLogo:
          "https://res.cloudinary.com/dxs9u7pqc/image/upload/v1748705852/ivocuh4zpt2ngc4o6k6r.png",
        walletName: "Nagad",
        walletType: "EWALLET",
      },
      {
        walletLogo:
          "https://res.cloudinary.com/dxs9u7pqc/image/upload/v1748705821/gn5meirmkoihqzixcaya.png",
        walletName: "Bkash",
        walletType: "EWALLET",
      },
    ],
  });
  console.log("Created");
};

seedWallet();
