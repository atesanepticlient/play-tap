import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";
import StoreProvider from "./StoreProvider";
import { Suspense } from "react";
import ShadcnToastProvider from "./shadcn-toast-provider";
import GamesLoader from "./GamesLoader";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "xplaytap",
  description: "Bangladeshi number one site",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();

  return (
    <html lang="en">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
        integrity="sha512-..."
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased app `}
      >
        <div className="max-w-[600px] mx-auto">
          <Suspense>
            <SessionProvider session={session}>
              <Toaster />
              <ShadcnToastProvider />
              <StoreProvider>
                <GamesLoader />
                {children}
              </StoreProvider>
            </SessionProvider>
          </Suspense>
        </div>
      </body>
    </html>
  );
}
