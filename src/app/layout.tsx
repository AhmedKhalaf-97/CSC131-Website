import type { Metadata } from "next";
import {Roboto} from "next/font/google";

// Libraries Stylesheet
import "bootstrap/dist/css/bootstrap.css";
import "../../public/css/bootstrap.min.css";
import "../../public/css/style.css";

import React from "react";

const roboto = Roboto({
  weight: ["400", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--bs-body-font-family"
});

export const metadata: Metadata = {
  title: "Financial Advising Site",
  description: "Created for CSC 131",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        {children}
      </body>
    </html>
  );
}
