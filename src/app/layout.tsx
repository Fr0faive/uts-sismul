"use client";

import "./globals.css";
import { Provider } from "react-redux";
import store from "@/redux/store";
import Navbar from "@/components/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <Provider store={store}>{children}</Provider>
      </body>
    </html>
  );
}
