"use client"
import React from 'react';
import style from "@/styles/download.module.css"
import Link from 'next/link';
import { motion } from 'framer-motion';

const Download = () => {

  return (
    <motion.div
    initial={{opacity:0 ,y: 30}}
    whileInView={{opacity: 1, y:0}}
    className={style.downloadContainer}>
        <h1>Try it yourself!</h1>
        <Link href="https://github.com/BarajasY/shutit/releases/tag/v.0.1.0" target='_blank'>Download</Link>
        <span>*Redirects only</span>
    </motion.div>
  )
}

export default Download
