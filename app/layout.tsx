import type { Metadata } from "next";
import "./globals.css";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.techtonis.com"),
  title: "Teen Patti Master 2026: APK Safety, Rules & Legal Guide",
  description:
    "Independent Teen Patti Master guide: is the APK safe, how to play, hand rankings, bonus terms, and what India's 2025 online gaming law means. 18+.",
  alternates: {
    canonical: "/",
    languages: { "en-IN": "/", "hi-IN": "/hi", "x-default": "/" },
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Teen Patti Master APK",
    locale: "en_IN",
    title: "Teen Patti Master 2026: APK Safety, Rules & Legal Guide",
    description:
      "Independent Teen Patti Master guide: is the APK safe, how to play, hand rankings, bonus terms, and what India's 2025 online gaming law means. 18+.",
    images: ["/teen-patti-master.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Teen Patti Master 2026: APK Safety, Rules & Legal Guide",
    description:
      "Independent Teen Patti Master guide: is the APK safe, how to play, hand rankings, bonus terms, and what India's 2025 online gaming law means. 18+.",
    images: ["/teen-patti-master.webp"],
  },
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
    <html lang="en-IN">
      <body className="bg-slate-950 text-white min-h-screen flex flex-col justify-between antialiased">
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}