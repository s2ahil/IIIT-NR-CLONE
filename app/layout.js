import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "I Love IIIT NR - Experience the Best of IIIT Naya Raipur",
  description:
    "Discover why everyone says 'I Love IIIT NR'! Explore the dynamic academics, research opportunities, and vibrant campus life of IIIT Naya Raipur.",
  other: {
    "google-site-verification": "AWQselovnO5BcnGHaWrIXh9j6qesnZQBW5PfjawUg74",
  },
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
        <footer className=" fixed  bg-slate-300 min-w-full left-1/2 lg:py-4 py-1   -translate-x-1/2 top-[100%] -translate-y-full  text-center">
          <p className="px-2 text-xs font-semibold text-gray-600 lg:text-lg">
            Disclaimer: This is a Personal Digital Marketing Project for SEO. I
            Love💗 IIIT Naya Raipur (CG) Copyright Reserved © 2024.
          </p>
        </footer>
      </body>
    </html>
  );
}
