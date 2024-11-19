import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "IIIT NAYA RAIPUR CLONE WEBSITE",
  description: "clone Website for college students of iiitnr ()  ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <Navbar />
        </header>
        <div className="max-w-[1550px] mx-auto px-2 md:px-4 pt-[70px] md:pt-16 ">
          {children}
        </div>
        <footer></footer>
      </body>
    </html>
  );
}
