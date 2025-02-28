import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import "./globals.css";

import Navbar from "@/components/navbar/navbar";
import { AxiosProvider } from "@/contexts/axios-context";
import { CartProvider } from "@/contexts/CartContext";
import { ThemeProvider } from "@/contexts/theme-context";
import ThemeRegistry from "@/lib/theme/ThemeRegistry";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Hestia",
  description:
    "Hestia – Elevate Your Space with Luxurious Scents -> Discover hand-poured, artisan-crafted candles designed to bring warmth, tranquility, and elegance to your home. Made with premium ingredients for a clean, long-lasting burn.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const messages = await getMessages();

  return (
    <html lang="en">
      <body className={roboto.variable}>
        <AxiosProvider>
          <NextIntlClientProvider messages={messages}>
            <AppRouterCacheProvider
              options={{ enableCssLayer: true }}
              // to make styles override default mui styles "making its priority  less"
            >
              <ThemeRegistry options={{ key: "mui" }}>
                <ThemeProvider>
                  <CartProvider>
                    <Navbar />
                    {children}
                  </CartProvider>
                </ThemeProvider>
              </ThemeRegistry>
            </AppRouterCacheProvider>
          </NextIntlClientProvider>
        </AxiosProvider>
      </body>
    </html>
  );
}
