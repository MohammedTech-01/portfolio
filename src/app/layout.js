// @refresh reset

import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/navbar";
import { motion, AnimatePresence } from "framer-motion";
import TransitionProvider from "../components/transitionProvider";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio App",
  description:
    "The best animated portfolio app made with Next.js and Framer Motion!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TransitionProvider>{children} </TransitionProvider>
      </body>
    </html>
  );
}
