"use client"
import React from "react";
import style from "@/styles/Intro.module.css";
import {SiTauri, SiNextdotjs} from 'react-icons/si';
import { motion } from "framer-motion";

const Intro = () => {
  return (
    <div className={style.introContainer}>
      <div className={style.introContent}>
        <motion.section
        initial={{opacity: 0, y: -40}}
        whileInView={{opacity: 1, y:0}}
        transition={{delay: .2}}
        className={style.introWords}>
          <h1>ShutIt</h1>
          <p>Shutdow, Restart & Sleep</p>
        </motion.section>
        <motion.section
        initial={{opacity: 0, y: 40}}
        whileInView={{opacity: 1, y:0}}
        transition={{delay: .5}}
        className={style.introLogos}>
          <p>Built with</p>
          <article>
            <SiNextdotjs className={style.introLogo}/>
            <SiTauri className={style.introLogo}/>
          </article>
          <p>Nextjs + Tauri</p>
        </motion.section>
      </div>
    </div>
  );
};

export default Intro;
