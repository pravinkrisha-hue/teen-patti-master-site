import type { Metadata } from "next";
import "./globals.css";
import Footer from "./components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.techtonis.com"),
  title: "Teen Patti Master - Official APK Download & Card Games Hub",
  description:
    "Download verified card games, explore 3 Patti rules, sequence rankings, and expert cash strategies.",
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png", sizes: "96x96" },
      { url: "/icon.png", type: "image/png", sizes: "192x192" },
    ],
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
        {/* Aa Footer badha j pages, blogs ane games ma automatically dekhase */}
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  );
}