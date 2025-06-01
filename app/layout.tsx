import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Unruggable | Secure Solana Wallet",
  description: "Experience an opinionated user-focused Solana wallet, combining security with simplicity to make you Unruggable. Open source and 2x Solana Hackathon honourable mention.",
  keywords: ["Solana", "Wallet", "Crypto", "Blockchain", "Security", "Open Source"],
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
