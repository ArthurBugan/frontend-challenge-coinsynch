import "./globals.css";

import ClientOnly from "@components/ClientOnly";
import ModalProvider from "@provider/ModalProvider";

export const metadata = {
  title: "Welcome to CoinSynch!",
  description: "The best place to trade crypto.",
};

import { Roboto } from "next/font/google";

const roboto = Roboto({
  variable: "--roboto-font",
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
});

export default function RootLayout({ children }: { children: JSX.Element }) {
  return (
    <html lang="en">
      <body className={roboto.variable}>
        <ClientOnly>
          <ModalProvider />
        </ClientOnly>

        <main>{children}</main>
      </body>
    </html>
  );
}
