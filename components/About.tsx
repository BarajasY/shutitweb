"use client";
import React from "react";
import style from "@/styles/about.module.css";
import Image from "next/image";
import shutit from "@/public/shutit.webp";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className={style.aboutContainer}>
      <div className={style.aboutContent}>
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className={style.aboutWords}
        >
          <article>
            <h1>Take Control</h1>
            <p>
              ShutIt allows you to <span>shutdown</span> , <span>reboot</span>{" "}
              and <span>sleep</span> your pc whenever you want it.
            </p>
            <p>
              Using the user interface you can set the function to do after the
              <span> time</span> you specify.
            </p>
          </article>
        </motion.section>
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className={style.aboutImage}
        >
          <Image src={shutit} alt="Shutit" />
        </motion.section>
      </div>
    </div>
  );
};

export default About;
