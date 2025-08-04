"use client";

import { Input } from "./ui/input";
import Wrapper from "./wrapper";
import {
  FormControl,
  Form,
  FormItem,
  FormMessage,
  FormLabel,
  FormField,
} from "./ui/form";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import FormButton from "./form-button";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const subscribeSchema = z.object({
  email: z.string().email({ message: "Email inválido" }),
  name: z.string().min(3, { message: "Nome deve ter pelo menos 3 caracteres" }),
});

type SubscribeFormData = z.infer<typeof subscribeSchema>;

export default function Footer() {
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const subscribeForm = useForm<SubscribeFormData>({
    resolver: zodResolver(subscribeSchema),
    defaultValues: {
      email: "",
      name: "",
    },
  });

  const handleSubscribe = async (data: SubscribeFormData) => {
    if (!data.email || !data.name) return;

    setIsSending(true);
    setError(false);

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          to_email: data.email,
          message:
            "Olá. Vi que você está testando o meu site fictício da BizzFlow. Fico feliz que tenha se interessado. Caso queira um site parecido mande uma mensagem para este email ou para o meu telefone pessoal: (19) 994012785.",
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
      );
      setIsSent(true);
      setError(false);
      setTimeout(() => {
        setIsSent(false);
      }, 1000);
      subscribeForm.reset();
    } catch (error) {
      console.error("Error sending email:", error);
      setError(true);
    } finally {
      setIsSending(false);
    }
  };
  return (
    <footer>
      <Wrapper>
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row">
          <div className="flex flex-col items-start justify-center gap-4">
            <p className="text-muted-foreground text-sm sm:text-base">
              Inscreva-se em nossa newsletter
            </p>
            <h1 className="text-3xl font-medium sm:text-4xl">
              Receba dicas de <span className="font-light">gestão</span>{" "}
              semanalmente
            </h1>
          </div>
          <div className="flex max-w-xl flex-col items-start justify-center gap-4">
            <Form {...subscribeForm}>
              <form
                onSubmit={subscribeForm.handleSubmit(handleSubscribe)}
                className="flex flex-col gap-4"
              >
                <FormField
                  control={subscribeForm.control}
                  name="name"
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <FormLabel>Nome</FormLabel>
                        <FormControl>
                          <Input {...field} placeholder="Digite seu nome" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    );
                  }}
                />
                <FormField
                  control={subscribeForm.control}
                  name="email"
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input {...field} placeholder="Digite seu email" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    );
                  }}
                />
                <div className="-mt-2 text-center sm:text-left">
                  <p className="text-foreground text-sm sm:text-base">
                    Ao clicar em &quot;inscrever-se&quot;, você concorda com
                    nossos{" "}
                    <Link
                      href="/politica-de-privacidade"
                      className="text-primary underline"
                    >
                      Termos de uso
                    </Link>{" "}
                    e{" "}
                    <Link
                      href="/politica-de-privacidade"
                      className="text-primary underline"
                    >
                      Política de privacidade
                    </Link>
                  </p>
                </div>
                <FormButton
                  isSent={isSent}
                  error={error}
                  isSending={isSending}
                />
              </form>
            </Form>
          </div>
        </div>
      </Wrapper>
    </footer>
  );
}
