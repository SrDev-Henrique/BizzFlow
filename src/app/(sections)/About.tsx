import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <div className="bg-white-dark mt-[96px] h-full w-full overflow-x-hidden md:mt-[128px] lg:mt-[160px]">
      <div className="container mx-auto flex h-full w-[98%] justify-center px-2">
        <div className="flex h-full w-full flex-col items-center justify-between gap-[48px] lg:min-w-screen lg:flex-row lg:justify-center lg:gap-[72px] lg:px-2 xl:gap-[128px]">
          <div className="aspect-[1/1.2] w-[60%] max-w-[250px] overflow-hidden rounded-xl lg:min-w-[400px] xl:min-w-[500px]">
            <Image
              src="/images/general/about-1.webp"
              alt="colaboradores apertando mão"
              width={2000}
              height={2000}
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="flex h-fit w-[80%] max-w-[500px] flex-col items-center justify-between gap-[16px] text-center lg:min-w-[400px]">
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
              className="bg-cian flex h-10 w-fit cursor-pointer items-center justify-center rounded-full px-4 text-nowrap transition-all duration-300 hover:brightness-105"
            >
              <Link href="/">
                <p className="text- text-xs font-bold text-white uppercase sm:text-sm md:text-base">
                  Comece grátis
                </p>
              </Link>
            </button>
          </div>
          <div className="aspect-[1/1.2] w-[60%] max-w-[250px] overflow-hidden rounded-xl lg:min-w-[400px] xl:min-w-[500px]">
            <Image
              src="/images/general/about-2.webp"
              alt="colaboradores apertando mão"
              width={2000}
              height={2000}
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
