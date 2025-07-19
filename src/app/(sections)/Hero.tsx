"use client";

import { customers } from "@/data/ui";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useState } from "react";
import { CalendarCheck } from "lucide-react";
import emailjs from "@emailjs/browser";
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
        publicKey,
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
    <div className="from-yellow-transparent relative min-h-screen bg-gradient-to-b to-transparent text-black">
      <div
        className={classNames(
          "bg-cian pointer-events-none fixed top-[15%] right-[5%] z-[100] flex items-center gap-1 rounded-2xl px-2 py-2 text-base opacity-0 transition-opacity duration-500 ease-in-out",
          submitStatus === "success" && "animate-fadeOut opacity-100",
        )}
      >
        <CalendarCheck className="text-green-light" />
        <p className="font-secondary text-sm font-bold text-white">
          Agendamento solicitado com sucesso
        </p>
      </div>
      <div className="mx-auto h-full w-[94%] max-w-[1400px]">
        <div className="flex h-full w-full flex-col items-center justify-center gap-[32px] pt-46">
          <div className="flex items-center gap-3 rounded-full bg-white p-2 shadow-xs">
            <div className="flex items-center gap-2">
              {customers.map((customer) => (
                <div
                  key={customer.alt}
                  className="h-6 w-6 overflow-hidden rounded-full border-l-2 border-white bg-white sm:h-9 sm:w-9 [&:not(:first-child)]:ml-[-15px]"
                >
                  <Image
                    src={customer.image}
                    alt={customer.alt}
                    width={100}
                    height={100}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              ))}
            </div>
            <p className="font-secondary text-xs text-black sm:text-base md:text-xl">
              +1.000 clientes ativos
            </p>
          </div>
          <div className="flex flex-col items-center gap-[16px] text-center">
            <h1 className="max-w-5xl text-4xl font-medium sm:text-5xl md:text-6xl">
              Recursos Humanos na palma da sua mão.
            </h1>
            <p className="font-secondary max-w-sm text-sm sm:max-w-md sm:text-base md:max-w-2xl md:text-xl">
              Com a BizzFlow, você gerencia ponto, folha de pagamento e
              recrutamento num só painel — fácil de usar, totalmente integrado e
              pensado para colocar seu time no centro do negócio.
            </p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="flex w-full flex-col items-center justify-center gap-2">
              <div className="border-grey flex h-14 w-fit items-center gap-1 rounded-full border-2 bg-white p-1">
                <div className="h-full w-full text-center">
                  <input
                    className="h-full w-full pl-2 outline-0"
                    type="email"
                    placeholder="Digite seu email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="bg-yellow flex h-full w-fit cursor-pointer items-center justify-center rounded-full px-4 text-nowrap"
                  disabled={isSubmitting}
                >
                  <p className="text- text-xs font-bold text-black uppercase sm:text-sm md:text-base">
                    {isSubmitting ? "Enviando..." : "Agendar uma demo"}
                  </p>
                </button>
              </div>
            </div>
          </form>
          <motion.div
            ref={targetRef}
            style={{ scale }}
            className="mt-10 aspect-[16/10] h-auto w-[100%]"
          >
            <Image
              src="/images/dashboards/hero.webp"
              alt="Hero Image"
              width={1504}
              height={1128}
              className="h-full w-full rounded-xl object-contain object-center"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
