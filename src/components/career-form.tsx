"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "./ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";

const createRoomSchema = z.object({
  name: z.string().min(3, { message: "Mínimo de 3 caracteres" }),
  lastName: z.string().min(3, { message: "Mínimo de 3 caracteres" }),
  email: z.string().email({ message: "Email inválido" }),
  role: z.string().min(1, { message: "Selecione uma opção" }),
  description: z.string().optional(),
});

type CreateRoomFormData = z.infer<typeof createRoomSchema>;

export function CareerForm() {
  const form = useForm<CreateRoomFormData>({
    resolver: zodResolver(createRoomSchema),
    defaultValues: {
      name: "",
      lastName: "",
      email: "",
      description: "",
      role: "",
    },
  });

  function handleSubmitForm(data: CreateRoomFormData) {
    console.log(data);
    form.reset();
  }

  return (
    <div className="mx-auto w-[96%] max-w-[500px]">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmitForm)}
          className="flex flex-col gap-4"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormControl className="h-[50px] w-full bg-white-dark">
                    <Input {...field} placeholder="Digite seu nome" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormControl className="h-[50px] w-full bg-white-dark">
                    <Input {...field} placeholder="Digite seu sobrenome" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormControl className="h-[50px] w-full bg-white-dark">
                    <Input {...field} placeholder="Digite o email" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          <FormField
            control={form.control}
            name="role"
            render={({ field }) => (
              <FormItem>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger className="w-full bg-white-dark">
                      <SelectValue placeholder="Eu sou um..." />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="developer">Desenvolvedor</SelectItem>
                    <SelectItem value="designer">Designer</SelectItem>
                    <SelectItem value="other">Outro</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormControl className="h-[100px] w-full bg-white-dark">
                    <Textarea {...field} placeholder="Digite uma mensagem" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          <Button
            type="submit"
            className="h-[50px] w-full cursor-pointer uppercase"
          >
            Enviar
          </Button>
        </form>
      </Form>
    </div>
  );
}
