"use client";
import Brain from "@/components/brain";
import { motion, useInView, useScroll } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import styles from "./HideHorizontalScrollbar.module.css"; // Make sure the path is correct

const AboutPage = () => {
  const containerRef = useRef();

  const { scrollYProgress } = useScroll({
    container: containerRef,
    offset: ["start start", "end end"],
  });

  const skillRef = useRef();
  // const isSkillRefInView = useInView(skillRef, {once:true});
  const isSkillRefInView = useInView(skillRef, { margin: "-100px" });

  const experienceRef = useRef();
  const isExperienceRefInView = useInView(experienceRef, { margin: "-100px" });

  return (
    <motion.div
      className="h-full overflow-hidden"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* CONTAINER */}
      <div
        className={`h-screen overflow-y-scroll lg:flex ${styles.container}`}
        ref={containerRef}
      >
        {/* TEXT CONTAINER */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:pr-0 xl:w-4/5">
          {/* BIOGRAPHY CONTAINER */}
          <div className="flex flex-col gap-12 justify-center">
            {/* BIOGRAPHY TITLE */}
            <h1 className="font-bold text-2xl">BIOGRAPHY</h1>
            {/* BIOGRAPHY DESC */}
            <p className="text-lg">
              I am a Software Engineer with a focus on web development, AI, and
              software testing, trained at KAUST and experienced at DunesAero.
              My expertise includes building and fine-tuning AI models, and
              enhancing web applications, driven by a passion for creating
              innovative and efficient software solutions.
            </p>
            {/* BIOGRAPHY QUOTE */}
            <span className="italic">
              Innovation and efficiency are the cornerstones of technology.
              Every line of code is a step towards transforming ideas into
              reality.
            </span>
            {/* BIOGRAPHY SIGN SVG*/}
            <div className="self-end">
              <svg
                version="1.0"
                xmlns="http://www.w3.org/2000/svg"
                width="100.000000pt"
                height="100.000000pt"
                viewBox="0 0 500.000000 500.000000"
                preserveAspectRatio="xMidYMid meet"
              >
                <g
                  transform="translate(0.000000,500.000000) scale(0.100000,-0.100000)"
                  fill="#000000"
                  stroke="none"
                >
                  <path
                    d="M366 3400 c-7 -38 -49 -78 -84 -82 l-27 -3 -3 -811 -2 -811 30 -7
c39 -7 79 -47 86 -86 l7 -30 386 2 386 3 -381 2 -382 3 -5 28 c-7 36 -53 82
-89 89 l-28 6 2 800 3 801 29 7 c38 11 74 45 81 80 l7 29 2119 0 c2084 0 2119
0 2119 -19 0 -29 47 -80 83 -89 l32 -8 3 -801 2 -800 -30 -7 c-39 -7 -79 -47
-86 -86 l-6 -30 -357 -3 -356 -2 363 -3 362 -2 0 26 c0 33 49 82 89 90 l31 7
-2 810 -3 811 -33 7 c-44 9 -70 34 -78 75 l-6 34 -2128 0 -2127 0 -7 -30z"
                  />
                  <path
                    d="M1504 2869 c-6 -8 -25 -51 -43 -96 -75 -187 -174 -303 -260 -303 -67
0 -54 73 14 86 39 7 57 24 27 24 -33 0 -82 -21 -92 -40 -25 -47 0 -90 54 -90
77 0 173 97 245 250 22 47 41 76 41 65 0 -11 -9 -76 -20 -144 -11 -68 -18
-127 -14 -130 9 -9 42 36 119 160 37 60 69 108 71 106 2 -2 -5 -39 -16 -83
-21 -83 -26 -189 -10 -214 14 -22 23 -5 10 20 -7 12 -9 39 -5 68 6 40 49 223
71 300 13 45 -13 20 -60 -60 -77 -130 -148 -239 -152 -235 -2 2 5 66 16 142
22 147 23 199 4 174z"
                  />
                  <path
                    d="M1985 2747 c-16 -25 -25 -49 -50 -139 -14 -51 -20 -60 -55 -78 -21
-11 -57 -20 -80 -20 -33 0 -40 3 -40 20 0 13 -10 24 -26 31 -34 12 -64 -12
-64 -52 0 -22 6 -30 26 -35 14 -4 30 -2 37 5 6 6 33 11 59 11 27 0 65 7 85 15
19 8 36 15 37 15 2 0 1 -13 -2 -30 -5 -36 10 -39 32 -6 24 38 52 41 87 12 37
-31 62 -32 114 -6 48 24 45 24 45 0 0 -33 28 -36 59 -6 l27 26 21 -21 c28 -28
86 -28 141 0 42 21 42 21 42 1 0 -28 11 -25 45 10 38 39 64 39 72 -1 l6 -30
33 32 34 33 28 -33 c23 -28 35 -34 70 -34 23 0 53 8 67 17 22 14 25 15 25 1 0
-23 13 -18 45 15 31 32 63 39 70 15 3 -8 7 -22 10 -30 4 -12 12 -8 35 17 l30
33 23 -27 c42 -50 97 -55 161 -13 17 11 26 13 26 6 0 -7 17 -19 37 -28 50 -20
125 -12 190 21 l51 25 6 -29 c7 -40 38 -40 75 1 l28 30 31 -30 c22 -22 40 -31
64 -31 37 0 126 38 147 63 20 25 -2 21 -45 -8 -70 -48 -150 -44 -168 7 -8 22
-3 41 27 105 48 104 54 131 31 140 -36 14 -84 -75 -84 -157 0 -40 -14 -68 -24
-51 -11 18 -45 13 -78 -11 -85 -60 -209 -85 -257 -51 l-24 16 44 16 c32 12 45
23 47 39 3 21 -6 27 -38 22 -8 -1 -36 -22 -62 -46 -80 -74 -115 -80 -165 -27
l-35 36 -30 -18 c-28 -16 -31 -16 -40 -1 -11 20 -47 21 -75 1 -20 -14 -21 -13
-16 5 7 25 -13 26 -26 1 -11 -19 -86 -61 -110 -61 -8 0 -29 17 -49 37 -34 37
-34 37 -64 20 -26 -15 -31 -15 -44 -2 -20 19 -44 19 -72 -1 -21 -14 -22 -14
-22 5 0 18 -5 17 -50 -14 -64 -43 -103 -52 -136 -30 -14 9 -29 27 -34 41 -13
33 -22 30 -45 -13 -11 -21 -24 -36 -30 -33 -23 11 6 52 61 87 16 10 16 12 3
12 -9 1 -47 -20 -83 -45 -87 -59 -121 -65 -165 -28 -33 27 -34 28 -64 11 -16
-10 -31 -16 -33 -14 -2 2 5 19 16 38 62 112 91 179 85 198 -8 28 -31 27 -50
-2z m29 -24 c-8 -33 -52 -123 -60 -123 -6 0 0 23 28 98 20 54 43 72 32 25z
m1711 5 c-4 -13 -17 -45 -30 -73 -22 -47 -23 -48 -24 -20 -1 36 33 115 49 115
7 0 9 -9 5 -22z m-399 -174 c-22 -16 -36 -18 -36 -6 0 11 43 32 50 25 3 -3 -4
-11 -14 -19z m-1609 -19 c-4 -8 -2 -17 3 -20 17 -10 11 -25 -10 -25 -14 0 -20
7 -20 23 0 25 7 37 23 37 5 0 7 -7 4 -15z m1901 7 c10 -7 8 -15 -8 -35 -36
-46 -67 -27 -40 24 11 20 27 24 48 11z"
                  />
                  <path
                    d="M1520 1745 c-19 -23 -7 -49 33 -68 41 -19 45 -28 22 -47 -12 -10 -21
-10 -41 -1 -20 9 -25 9 -22 -1 6 -18 56 -22 74 -7 25 21 13 61 -21 72 -38 13
-48 28 -29 47 11 12 18 12 34 3 10 -7 21 -9 24 -4 15 24 -54 30 -74 6z"
                  />
                  <path
                    d="M1647 1742 c-23 -26 -22 -94 1 -115 26 -23 75 -21 97 3 11 12 19 36
19 55 0 19 -8 43 -19 55 -23 25 -76 27 -98 2z m82 -5 c39 -48 10 -126 -42
-113 -38 9 -54 79 -26 112 15 18 53 18 68 1z"
                  />
                  <path
                    d="M1794 1744 c3 -9 6 -42 6 -75 0 -32 4 -59 8 -59 4 0 6 16 4 35 -4 32
-2 35 22 35 14 0 26 5 26 10 0 6 -11 10 -25 10 -20 0 -25 5 -25 25 0 23 3 24
55 24 l55 -1 0 -63 c0 -35 5 -67 10 -70 6 -4 10 20 10 64 0 68 1 71 24 71 21
0 28 -9 45 -55 12 -31 21 -63 21 -71 0 -28 24 -9 47 35 22 43 23 43 31 20 5
-13 11 -33 13 -43 7 -35 26 -28 47 16 25 53 37 108 24 108 -6 0 -13 -17 -17
-37 -8 -49 -32 -94 -38 -73 -3 8 -13 38 -23 65 l-18 50 -18 -62 c-10 -35 -22
-63 -26 -63 -4 0 -15 27 -25 60 l-17 60 -111 0 c-97 0 -110 -2 -105 -16z"
                  />
                  <path
                    d="M2253 1743 c-3 -10 -16 -44 -29 -75 -22 -56 -19 -83 4 -33 9 18 19
25 41 25 22 0 30 -5 35 -25 4 -14 11 -25 17 -25 7 0 8 7 4 18 -4 9 -16 43 -27
75 -20 58 -34 70 -45 40z m32 -50 c5 -20 3 -23 -19 -23 -24 0 -24 2 -14 31 11
32 21 29 33 -8z"
                  />
                  <path
                    d="M2344 1744 c3 -9 6 -42 6 -75 0 -32 3 -59 8 -59 4 0 5 32 4 71 -4 68
-3 71 19 67 12 -2 27 -11 33 -21 9 -15 7 -22 -13 -38 l-24 -20 20 -27 c11 -15
28 -28 37 -30 12 -3 9 4 -10 23 l-26 26 23 25 c19 20 21 27 11 49 -10 21 -18
25 -53 25 -33 0 -40 -3 -35 -16z"
                  />
                  <path
                    d="M2470 1685 l0 -75 40 0 c22 0 40 4 40 10 0 5 -13 7 -30 4 -28 -6 -30
-5 -30 24 0 22 6 32 23 37 l22 8 -21 4 c-26 5 -39 42 -18 50 8 3 23 3 34 0 11
-3 20 -1 20 4 0 5 -18 9 -40 9 l-40 0 0 -75z"
                  />
                  <path
                    d="M2634 1744 c3 -9 6 -42 6 -75 l0 -59 40 0 c22 0 40 4 40 9 0 5 -15 8
-32 7 -29 -1 -33 2 -36 27 -3 21 1 27 17 27 11 0 23 5 26 10 4 6 -5 10 -19 10
-21 0 -26 5 -26 26 0 24 3 26 35 22 19 -2 35 0 35 4 0 4 -21 8 -46 8 -38 0
-45 -3 -40 -16z"
                  />
                  <path
                    d="M2750 1683 l4 -78 6 65 5 65 32 -57 c47 -82 53 -81 51 9 l-1 78 -6
-60 -6 -60 -35 58 c-19 31 -39 57 -45 57 -6 0 -8 -28 -5 -77z"
                  />
                  <path
                    d="M2905 1740 c-25 -27 -24 -83 0 -110 14 -15 29 -20 54 -18 33 3 36 6
39 36 2 18 -1 32 -7 32 -6 0 -11 -11 -11 -25 0 -52 -63 -39 -75 15 -12 55 39
102 73 68 13 -13 27 -5 17 11 -11 19 -70 13 -90 -9z"
                  />
                  <path
                    d="M3030 1685 c0 -43 4 -75 10 -75 6 0 10 32 10 75 0 43 -4 75 -10 75
-6 0 -10 -32 -10 -75z"
                  />
                  <path
                    d="M3080 1686 c0 -89 18 -103 22 -18 l3 57 33 -57 c19 -32 38 -58 43
-58 5 0 9 34 9 75 0 43 -4 75 -10 75 -5 0 -10 -26 -10 -57 l0 -57 -32 54 c-48
79 -58 76 -58 -14z"
                  />
                  <path
                    d="M3224 1744 c3 -9 6 -42 6 -75 l0 -59 40 0 c22 0 40 4 40 9 0 5 -15 8
-32 7 -29 -1 -33 2 -36 27 -3 21 1 27 17 27 11 0 23 5 26 10 4 6 -5 10 -19 10
-21 0 -26 5 -26 26 0 24 3 26 35 22 19 -2 35 0 35 4 0 4 -21 8 -46 8 -38 0
-45 -3 -40 -16z"
                  />
                  <path
                    d="M3334 1744 c3 -9 6 -42 6 -75 l0 -59 40 0 c22 0 40 4 40 9 0 5 -15 8
-32 7 -29 -1 -33 2 -36 27 -3 21 1 27 17 27 11 0 23 5 26 10 4 6 -5 10 -19 10
-21 0 -26 5 -26 26 0 24 3 26 35 22 19 -2 35 0 35 4 0 4 -21 8 -46 8 -38 0
-45 -3 -40 -16z"
                  />
                  <path
                    d="M3450 1685 c0 -50 4 -75 11 -75 9 0 10 21 6 71 l-6 70 27 -3 c34 -4
42 -40 13 -60 -20 -14 -20 -14 -1 -46 11 -18 27 -32 35 -32 12 0 11 4 -5 20
-21 21 -27 50 -10 50 16 0 23 49 10 65 -7 8 -28 15 -46 15 l-34 0 0 -75z"
                  />
                </g>
              </svg>
            </div>
            {/* BIOGRAPHY SCROLL SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          {/* SKILLS CONTAINER */}
          <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
            {/* SKILL TITLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              SKILLS
            </motion.h1>
            {/* SKILL LIST */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              className="flex gap-4 flex-wrap"
            >
              <div className="flex gap-2 flex-wrap items-center font-semiblod text-lg">
                Data Science and AI Libraries:
                <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                  Python
                </div>
                <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                  Pandas
                </div>
                <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                  Scikit-learn
                </div>
                <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                  Pytorch
                </div>
                <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                  TensorFlow
                </div>
                <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                  spaCy
                </div>
              </div>
              <div className="flex gap-2 flex-wrap items-center font-semiblod text-lg">
                Web Development and Frameworks:
                <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                  JavaScript
                </div>
                <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                  CSS
                </div>
                <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                  Tailwind CSS
                </div>
                <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                  React
                </div>
                <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                  Next.js
                </div>
                <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                  Express
                </div>
                <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                  Node
                </div>
                <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                  Svelte
                </div>
                <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                  Flask
                </div>
              </div>
              <div className="flex gap-2 flex-wrap items-center font-semiblod text-lg">
                Programming Language:
                <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                  Java
                </div>
                <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                  JavaScript
                </div>
                <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                  Python
                </div>
              </div>
              <div className="flex gap-2 flex-wrap items-center font-semiblod text-lg">
                Database:
                <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                  SQL
                </div>
                <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                  MongoDB
                </div>
              </div>
              <div className="flex gap-2 flex-wrap items-center font-semiblod text-lg">
                Testing Software:
                <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                  Jest
                </div>
              </div>
              <div className="flex gap-2 flex-wrap items-center font-semiblod text-lg">
                Version Control
                <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                  Git
                </div>
                <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                  Github
                </div>
              </div>
            </motion.div>
            {/* SKILL SCROLL SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          {/* EXPERIENCE CONTAINER */}
          <div
            className="flex flex-col gap-12 justify-center pb-52"
            ref={experienceRef}
          >
            {/* EXPERIENCE TITLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              EXPERIENCE
            </motion.h1>
            {/* EXPERIENCE LIST */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              className=""
            >
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-[525px]">
                {/* LEFT */}
                <div className="w-1/3 "></div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Software Developer and Tester Intern
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">
                    Focused on web development, UI/UX design with Figma, Svelte,
                    and Tailwind CSS, and software testing using Jest to enhance
                    product quality.{" "}
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    09/2023 - 12/2023{" "}
                  </div>
                  {/* JOB COMPANY */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    DunesAero
                  </div>
                </div>
              </div>
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-[525px]">
                {/* LEFT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Artificial Intelligence Intern
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">
                    I specialized in Generative Models and NLP, collaboratively
                    completed the 'Qassid: Saudi Arabic Poetry Generation and
                    Eras Classification' project.{" "}
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    07/2023 - 08/2023{" "}
                  </div>
                  {/* JOB COMPANY */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    SDAIA-KAUST AI
                  </div>
                </div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 "></div>
              </div>
            </motion.div>
          </div>
        </div>
        {/* SVG CONTAINER */}
        <div className="hidden xl:block w-1/3 sticky top-0 z-30 xl:w-1/2">
          <Brain scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
