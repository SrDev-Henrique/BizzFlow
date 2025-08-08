import { AnimatedText } from "@/components/animated-text";
import { CareerForm } from "@/components/career-form";

export default function Career() {
  return (
    <section
      id="Contato"
      className="mt-[96px] h-full w-full overflow-x-hidden md:mt-[128px] lg:mt-[160px]"
    >
      <div className="container mx-auto flex flex-col items-center justify-center gap-[32px]">
        <div className="flex flex-col items-center justify-center gap-[16px] text-center">
          <AnimatedText
            text="Junte-se ao time"
            el="p"
            className="font-secondary bg-orange-transparent w-fit rounded-full px-2 py-1 text-xs font-medium text-black uppercase"
          />
          <AnimatedText
            text="Décadas de experiência criando plataformas"
            el="h2"
            className="font-primary text-black-blue max-w-lg text-3xl font-medium lg:text-4xl"
          />
          <AnimatedText
            text="Junte-se a nossa equipe e ajude a transformar a gestão de pessoas em uma experiência simples e eficiente."
            el="p"
            className="font-secondary text-grey max-w-[500px] text-base font-medium sm:text-lg"
          />
        </div>
        <CareerForm />
      </div>
    </section>
  );
}
