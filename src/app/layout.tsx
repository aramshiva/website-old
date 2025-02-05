import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/nav";
import { SessionProvider } from "next-auth/react";
import { Music } from "@/components/music";
import * as motion from "motion/react-client"

export const metadata: Metadata = {
  title: "Aram",
  description: "Student Developer based in Seattle, WA",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="en" className="dark">
        <body
          className="
          antialiased bg-neutral-800 dark:bg-white p-20 
          w-screen prose text-white dark:text-black 
          prose-p:text-white dark:prose-p:text-black 
          prose-blockquote prose-a:text-sm prose-a:no-underline
          prose-a:text-[#e6e9ff] dark:prose-a:text-[#1f2422]
           "
        >
            <SessionProvider>
              {" "}
              <motion.div
          initial={{ filter: "blur(5px)" }}
          animate={{ filter: "blur(0px)" }}
          transition={{ duration: 0.35 }}
              >
          <Nav />
          {children}
              </motion.div>
            </SessionProvider>
            <Music />
        </body>
      </html>
    </>
  );
}
