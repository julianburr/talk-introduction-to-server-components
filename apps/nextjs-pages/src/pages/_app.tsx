import "@/styles/global.css";

import { Poppins, Bungee } from "next/font/google";

import type { AppProps } from "next/app";

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

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Component
      {...pageProps}
      className={`${poppins.variable} ${bungee.variable} font-default`}
    />
  );
}
