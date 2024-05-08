"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import hero from "../../public/images/hero0.png";

const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/portfolio", title: "Portfolio" },
  { url: "/contact", title: "Contact" },
];

const Homepage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 2xl:text-xl">
        {/* IMAGE CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 relative">
          <picture>
            <Image src={hero} alt="" fill className="object-contain object-left" />
          </picture>
        </div>
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
          {/* TITILE */}
          <h1 className="text-4xl md:tet-6xl font-bold">Mohammed Portfolio</h1>
          {/* DESC */}
          <p className="md:text-lg">
            Software Engineer with expertise in web development, AI, and
            testing. Trained at KAUST, focused on improving software reliability
            and performance.
          </p>
          {/* BUTTONS */}
          <div className="w-full flex gap-4">
            <button className="" key={"View my works"}>
              <Link
                className="p-4 rounded-lg ring-1 ring-black bg-black text-white"
                href={"/portfolio"}
              >
                {"View my works"}
              </Link>
            </button>
            <button className="">
              <div whileHover="hover" key={"Contact me"}>
                <Link
                  className="p-4 rounded-lg ring-1 ring-black"
                  href={"/contact"}
                >
                  {"Contact me"}
                </Link>
              </div>
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
