import "./globals.scss";
import Header from "../app/components/Header/Header";
import Sidebar from "../app/components/Sidebar/Sidebar";
import Footer from "../app/components/Footer/Footer";
import type { ReactNode } from "react";
import { Suspense } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <div className="page_container">
          <Sidebar />
          <Suspense>
            <main>{children}</main>
          </Suspense>
        </div>
        <Footer />
      </body>
    </html>
  );
}
