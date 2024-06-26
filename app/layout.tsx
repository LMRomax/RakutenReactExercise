import Image from "next/image";
import type { ReactNode } from "react";
import { inter } from "./ui/fonts";

import "./styles/globals.css";
import "./styles/layout.module.css";
import SideNav from "./ui/sidenav";
import TopNav from "./ui/topnav";
import { Metadata } from "next";

interface Props {
  readonly children: ReactNode;
}

export const metadata: Metadata = {
  title: {
    template: '%s | Test Rakuten',
    default: 'Test Rakuten'
  },
  description: 'Test front-end NextJs Rakuten'
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <div className="flex h-screen flex-col md:flex-row">
          <div className="w-full flex-none md:w-72">
            <SideNav />
          </div>
          <div className="fixed flex-grow">
            <TopNav />
          </div>

          <div className="flex-grow p-6 md:overflow-y-auto md:p-12 md:mt-8">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
