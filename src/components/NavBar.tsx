"use client";

import Image from "next/image";
import Link from "next/link";
import { navItems } from "@/data/ui";
import { motion } from "framer-motion";

import { navVariants } from "@/app/blog/components/NavBar/anime";
import { fadeInVariants } from "@/app/(sections)/anime";

export default function NavBar() {
  return (
    <motion.div
      variants={navVariants}
      initial="hidden"
      animate="visible"
      className="fixed top-2 left-0 z-50 h-14 w-full md:h-16"
    >
      <nav className="container mx-auto h-full w-[98%] rounded-full bg-white px-2 shadow-xs md:px-4">
        <div className="flex h-full w-full items-center justify-between">
          <motion.div
            variants={fadeInVariants}
            custom={0.2}
            initial="hidden"
            animate="visible"
            className="h-14 w-28 md:w-40"
          >
            <Link href="/">
              <Image
                src="/images/logos/LOGO-BLACK-TRANSPARENT.svg"
                alt="BizzFlow"
                width={100}
                height={100}
                className="h-full w-full scale-[150%] object-cover object-left"
              />
            </Link>
          </motion.div>
          <div className="flex items-center gap-4">
            <div className="hidden items-center gap-2 font-semibold md:flex">
              {navItems.map((item, index) => (
                <Link href={item === "Blog" ? "/blog" : `#${item}`} key={item}>
                  <motion.p
                    variants={fadeInVariants}
                    custom={index}
                    initial="hidden"
                    animate="visible"
                    className="nav-hover-btn text-black"
                  >{item}</motion.p>
                </Link>
              ))}
            </div>
            <div className="flex md:hidden">
              <Link href="/blog">
                <p className="nav-hover-btn text-black">Blog</p>
              </Link>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-yellow flex h-10 cursor-pointer items-center justify-center rounded-full px-4.5 text-xs font-bold text-black uppercase transition-all duration-300 hover:brightness-95">
                <Link href="/cadastro">
                  <p>Comece grátis</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </motion.div>
  );
}
