import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://origins-financial.vercel.app/"),
  title: "Origins Financial - Financial advisory services",
  description:
    "Your trusted partner in navigating the complex world of insurance and financial planning.",
  icons: {
    icon: ["/blacklogo.png"],
    apple: ["/favicon_io/apple-touch-icon.png"],
    shortcut: ["/blacklogo.png"],
  },
  openGraph: {
    title: "Origins Financial - Financial advisory services",
    description:
      "Your trusted partner in navigating the complex world of insurance and financial planning.",
  },
  keywords: ["money", "savings", "Insurance"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth scroll-pt-24">
      <body className={`bg-dove relative`}>{children}</body>
    </html>
  );
}
