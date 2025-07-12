"use client";

import { customers } from "@/data/ui";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { GiConfirmed } from "react-icons/gi";
import classNames from "classnames";

export default function Hero() {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "start center"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    setSubmitStatus("idle");

    if (!serviceId || !templateId || !publicKey) {
      console.error("Variáveis de ambiente do EmailJS estão ausentes.");
      setSubmitStatus("error");
      setIsSubmitting(false);
      return;
    }

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          to_email: email,
          message:
            "Olá. Vi que você está testando o meu site fictício da BizzFlow. Fico feliz que tenha se interessado. Caso queira um site parecido mande uma mensagem para este email ou para o meu telefone pessoal: (19) 994012785.",
        },
        publicKey
      );
      setSubmitStatus("success");
      setEmail("");
    } catch (error) {
      console.error("Error sending email:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen text-black bg-gradient-to-bl from-blue-transparent to-white relative">
      <div
        className={classNames(
          "fixed right-[5%] top-[15%] flex items-center gap-1 opacity-0 bg-cian px-2 py-2 rounded-2xl text-base pointer-events-none z-[100] transition-opacity duration-500 ease-in-out",
          submitStatus === "success" && "opacity-100 animate-fadeOut"
        )}
      >
        <GiConfirmed className="text-green-light" />
        <p className="font-secondary text-white font-bold text-sm">
          Agendamento solicitado com sucesso
        </p>
      </div>
      <div className="mx-auto px-2.5 h-full container">
        <div className="w-full h-full flex flex-col items-center justify-center gap-[32px] pt-46">
          <div className="flex items-center gap-3 bg-white-transparent rounded-full p-2">
            <div className="flex items-center gap-2">
              {customers.map((customer) => (
                <div
                  key={customer.alt}
                  className="w-6 h-6 sm:w-9 sm:h-9 rounded-full bg-white overflow-hidden border-l-2 border-white [&:not(:first-child)]:ml-[-15px]"
                >
                  <Image
                    src={customer.image}
                    alt={customer.alt}
                    width={100}
                    height={100}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              ))}
            </div>
            <p className="text-xs sm:text-base md:text-xl text-black font-secondary">
              +1.000 clientes ativos
            </p>
          </div>
          <div className="flex flex-col gap-[16px] text-center items-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium max-w-5xl">
              Recursos Humanos na palma da sua mão.
            </h1>
            <p className="text-sm sm:text-base md:text-xl max-w-sm sm:max-w-md md:max-w-2xl font-secondary">
              Com a BizzFlow, você gerencia ponto, folha de pagamento e
              recrutamento num só painel — fácil de usar, totalmente integrado e
              pensado para colocar seu time no centro do negócio.
            </p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col items-center justify-center w-full gap-2">
              <div className="flex items-center gap-1 w-fit h-12 border-2 border-grey bg-white rounded-full">
                <div className="w-full h-full text-center">
                  <input
                    className="w-full h-full pl-2 outline-0"
                    type="email"
                    placeholder="Digite seu email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-fit h-full bg-cian rounded-full flex items-center justify-center text-nowrap px-4 cursor-pointer"
                  disabled={isSubmitting}
                >
                  <p className="text-white text-xs text- sm:text-sm md:text-base uppercase font-bold">
                    {isSubmitting ? "Enviando..." : "Agendar uma demo"}
                  </p>
                </button>
              </div>
            </div>
          </form>
          <motion.div
            ref={targetRef}
            style={{ scale }}
            className="w-[100%] h-auto aspect-[16/10] mt-10"
          >
            <Image
              src="/images/dashboards/upscaled/hero.webp"
              alt="Hero Image"
              width={1504}
              height={1128}
              className="w-full h-full object-contain object-center rounded-xl"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
