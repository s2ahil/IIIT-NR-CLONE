import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = { 
  title: "IIIT NAYA RAIPUR CLONE WEBSITE",
  description: "clone Website for college students of iiitnr ()  ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
