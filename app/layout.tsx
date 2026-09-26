import type { Metadata } from "next";
import "./globals.css";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Teen Patti Master - Official APK Download & Card Games Hub",
  description: "Download verified card games, explore 3 Patti rules, sequence rankings, and expert cash strategies.",
  icons: {
    icon: "/icon.webp",
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
        <main className="flex-grow">
          {children}
        </main>
        {/* Aa Footer badha j pages, blogs ane games ma automatically dekhase */}
        <Footer />
      </body>
    </html>
  );
}