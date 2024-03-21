import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bathroom Renovation",
  description: "Renovate your bathroom with our help",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
