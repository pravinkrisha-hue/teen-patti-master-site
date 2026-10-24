import type { Metadata } from "next";
import "./globals.css";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.techtonis.com"),
  title: "Teen Patti Master APK Download 2026: ₹51 Bonus & Guide",
  description:
    "Teen Patti Master APK download for Android: latest version, ₹51 sign-up bonus, rules, hand rankings, UPI withdrawal steps and safe-play tips. 18+ only.",
  alternates: {
    canonical: "/",
    languages: { "en-IN": "/", "hi-IN": "/hi", "x-default": "/" },
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Teen Patti Master Hub",
    locale: "en_IN",
    title: "Teen Patti Master APK Download 2026: ₹51 Bonus & Guide",
    description:
      "Teen Patti Master APK download for Android: latest version, ₹51 sign-up bonus, rules, hand rankings, UPI withdrawal steps and safe-play tips. 18+ only.",
    images: ["/teen-patti-master.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Teen Patti Master APK Download 2026: ₹51 Bonus & Guide",
    description:
      "Teen Patti Master APK download for Android: latest version, ₹51 sign-up bonus, rules, hand rankings, UPI withdrawal steps and safe-play tips. 18+ only.",
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