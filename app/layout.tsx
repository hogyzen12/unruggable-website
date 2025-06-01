// app/layout.tsx
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Unruggable | The First Solana Native Hardware Wallet",
  description: "Hot wallet UX. Cold wallet security. The first hardware wallet designed exclusively for Solana.",
  keywords: ["Solana", "Hardware Wallet", "Crypto", "Blockchain", "Security", "Cold Storage"],
  icons: {
    icon: "/app_icon_2.webp"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}