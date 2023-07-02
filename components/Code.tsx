"use client"
import React from "react";
import style from "@/styles/code.module.css";
import Image from "next/image";
import tsmain from "@/public/tsmain.webp";
import rsmain from "@/public/rustmain.webp";
import { motion } from "framer-motion";

const Code = () => {
  return (
    <div className={style.codeContainer}>
      <motion.div
      initial={{opacity: 0, y: 30}}
      whileInView={{opacity: 1, y:0}}>
        <h1>Code</h1>
        <p>
          Combining <span>Typescript</span> and <span>JSX</span> to design the
          frontend and <span>Rust</span> to handle the shutdown functions.
        </p>
      </motion.div>
      <motion.div
      initial={{opacity: 0, y: 30}}
      whileInView={{opacity: 1, y:0}}
      className={style.codeImages}>
        <section>
          <p>TypeScript (bits)</p>
          <Image src={tsmain} alt="TypeScript code" id={style.tsimage} />
        </section>
        <section>
          <p>Rust (bits)</p>
          <Image src={rsmain} alt="Rust code" id={style.rsimage} />
        </section>
      </motion.div>
    </div>
  );
};

export default Code;
