"use client";

import { useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./navbar";
import { usePathname } from "next/navigation";
import styles from '../styles/ScrollBarStyles.module.css';


const TransitionProvider = ({ children }) => {
  const pathName = usePathname();

  useEffect(() => {
    // Apply scrollbar styles to the html element when the component mounts
    document.documentElement.classList.add(styles.scrollbar);

    // Clean up when the component unmounts
    return () => {
      document.documentElement.classList.remove(styles.scrollbar);
    };
  }, []);

  return (
    <AnimatePresence mode="wait" >
      <div
        key={pathName}
        className="w-screen h-screen bg-gradient-to-b from-earthy-light to-earthy-dark"
      >
        <motion.div
          className="h-screen w-screen fixed bg-black rounded-b-[100px] z-40"
          animate={{ height: "0vh" }}
          exit={{ height: "140vh" }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        />
        <motion.div
          className="fixed m-auto top-0 bottom-0 left-0 right-0 text-white text-8xl cursor-default z-40 w-fit h-fit"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
            {pathName.substring(1) || "Home"}
        </motion.div>
        <motion.div
          className="h-screen w-screen fixed bg-black rounded-t-[100px] bottom-0 z-30"
          initial={{ height: "140vh" }}
          animate={{ height: "0vh", transition: { delay: 0.4 } }}
        />
        <div className="h-24">
          <Navbar />
        </div>
        <div className="h-[calc(100vh-6rem)]">{children}</div>
      </div>
    </AnimatePresence>
  );
};

export default TransitionProvider;
