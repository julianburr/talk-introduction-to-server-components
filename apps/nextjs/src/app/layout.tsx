import type { Metadata } from "next";
import { Poppins, Bungee } from "next/font/google";

import "@workspace/shared/styles/global.css";

import { PropsWithChildren } from "react";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "700"],
  display: "swap",
});

const bungee = Bungee({
  variable: "--font-bungee",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Next App Router | Notflix",
};

function RootLayout({ children }: PropsWithChildren<Record<never, any>>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${bungee.variable}`}>
        {children}
      </body>
    </html>
  );
}

export default RootLayout;
