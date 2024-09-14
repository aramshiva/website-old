import type { Metadata } from "next";
import "./globals.css";
import Spotify from "@/app/components/spotify";

export const metadata: Metadata = {
  title: "Aram Shiva",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Spotify />
      </body>
    </html>
  );
}