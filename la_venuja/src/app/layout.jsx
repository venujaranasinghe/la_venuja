import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import RootLayout from "@/components/RootLayout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Venuja Ranasinghe"
};

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <RootLayout>{children}</RootLayout>
      </body>
    </html>
  );
}
