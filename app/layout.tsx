import type { Metadata } from "next";
import "./globals.css";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.techtonis.com"),
  title: "Teen Patti Master - Official APK Download & Card Games Hub",
  description:
    "Download verified card games, explore 3 Patti rules, sequence rankings, and expert cash strategies.",
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-white min-h-screen flex flex-col justify-between antialiased">
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}