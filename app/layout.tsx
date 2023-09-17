import React from "react";
import type { Metadata } from "next";

import "./global.css";

import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

import { Inter } from "next/font/google";
import Head from "next/head";
import Header from "./components/Header";
import SideBar from "./components/SideBar";

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "minidocs",
  description:
    "get started with docs for all the popular javascript libraries and frameworks",
  icons: {
    icon: ["./favicon.ico"],
    apple: ["./apple-touch-icon.png?v=4"],
    shortcut: ["./apple-touch-icon.png"],
  },
  manifest: "./site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark-theme" style={{ colorScheme: "dark" }}>
      <Head>
        <link rel="stylesheet" href="./custom.css" />
      </Head>
      <body className={inter.className}>
        <header className="border-b sticky top-0 header">
          <Header />
        </header>
        <main>
          <div className="border border-yellow-300 max-w-6xl mx-auto flex">
            <div className="sticky top-[121px] h-[calc(100vh-121px)] w-[284px] md:flex md:flex-col md:justify-between md-shrink-0">
              <div className="border border-red-500 mt-28 relative overflow-hidden">
                <SideBar />
              </div>
            </div>
            <div className="border border-green-900 w-3/4">{children}</div>
          </div>
        </main>
      </body>
    </html>
  );
}
