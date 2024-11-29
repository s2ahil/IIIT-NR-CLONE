import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "I Love IIIT NR - Experience the Best of IIIT Naya Raipur",
  description: "Discover why everyone says 'I Love IIIT NR'! Explore the dynamic academics, research opportunities, and vibrant campus life of IIIT Naya Raipur.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
     <GoogleAnalytics />
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
