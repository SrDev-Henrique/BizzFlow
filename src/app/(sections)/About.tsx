"use client";

import Image from "next/image";
import Link from "next/link";
import { useInView, motion, cubicBezier } from "framer-motion";
import { useRef } from "react";

const fadeInVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: cubicBezier(0.215, 0.61, 0.355, 1),
    },
  },
};

function ImageContainer({ image, alt }: { image: string; alt: string }) {
  const imageRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(imageRef, { once: true, amount: 0.5 });
  return (
    <motion.div
      ref={imageRef}
      variants={fadeInVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="relative aspect-[1/1.2] w-[60%] max-w-[250px] overflow-hidden rounded-xl lg:min-w-[400px] xl:min-w-[500px]"
    >
      <Image
        src={image}
        alt={alt}
        width={2000}
        height={2000}
        className="h-full w-full object-cover object-center"
      />
    </motion.div>
  );
}

export default function About() {
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(aboutRef, { once: true, amount: 0.5 });
  return (
    <section
      id="Nós"
      className="mt-[96px] h-full w-full overflow-x-hidden md:mt-[128px] lg:mt-[160px]"
    >
      <div className="container mx-auto flex h-full w-[98%] justify-center px-2">
        <div className="flex h-full w-full flex-col items-center justify-between gap-[48px] lg:min-w-screen lg:flex-row lg:justify-center lg:gap-[72px] lg:px-2 xl:gap-[128px]">
          <ImageContainer
            image="/images/general/about-1.webp"
            alt="colaboradores apertando mão"
          />
          <motion.div
            ref={aboutRef}
            variants={fadeInVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="flex h-fit w-[80%] max-w-[500px] flex-col items-center justify-between gap-[16px] text-center lg:min-w-[400px]"
          >
            <h2 className="font-primary text-black-blue mb-[8px] max-w-[450px] text-3xl font-medium lg:text-4xl">
              Empoderando equipes{" "}
              <span className="inline-block scale-150 font-light">+</span>{" "}
              simplificando a gestão de pessoas
            </h2>
            <p className="font-secondary text-grey text-base font-medium sm:text-lg">
              A BizzFlow é a plataforma completa de RH para pequenas e médias
              empresas — com controle de ponto, folha, recrutamento e benefícios
              integrados, tudo em tempo real e sem complicações.
            </p>
            <p className="font-secondary text-grey text-base font-medium sm:text-lg">
              Com nossa solução, qualquer negócio pode focar no que realmente
              importa: cuidar do seu time.
            </p>
            <button
              type="button"
              className="bg-yellow flex h-10 w-fit cursor-pointer items-center justify-center rounded-full px-4 text-nowrap transition-all duration-300 hover:brightness-105"
            >
              <Link href="/">
                <p className="text- text-xs font-bold text-black uppercase sm:text-sm md:text-base">
                  Comece grátis
                </p>
              </Link>
            </button>
          </motion.div>
          <ImageContainer
            image="/images/general/about-2.webp"
            alt="colaboradora olhando para uma pasta de documentos"
          />
        </div>
      </div>
    </section>
  );
}
