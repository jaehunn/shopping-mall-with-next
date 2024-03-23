import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "~/lib";
import { Header } from "~/components";

import "./reset.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shopping Mall",
  description: "...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
