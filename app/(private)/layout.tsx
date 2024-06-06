import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Header from "../components/Header";
import Menu from "../components/Menu";
import styles from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Admin Platform",
  description: "Admin Platform for Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="columns">
          <div className="column is-narrow">
            <Menu />
          </div>
          <div className="column">
            <div className="container">
              <div className={styles.content}>{children}</div>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
