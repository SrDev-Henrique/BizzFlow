import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <div className="w-full h-full bg-white-dark mt-[96px] md:mt-[128px] lg:mt-[160px] overflow-x-hidden">
      <div className="container mx-auto px-2 w-[98%] h-full flex justify-center">
        <div className="w-full h-full flex flex-col gap-[48px] items-center justify-between lg:flex-row lg:min-w-screen lg:px-2 lg:justify-center lg:gap-[72px] xl:gap-[128px]">
          <div className="w-[60%] max-w-[250px] aspect-[1/1.2] rounded-xl overflow-hidden lg:min-w-[400px] xl:min-w-[500px]">
            <Image
              src="/images/general/about-1.webp"
              alt="colaboradores apertando mão"
              width={2000}
              height={2000}
              className="w-full h-full object-cover object-center"
            />
          </div>
          <div className="w-[80%] max-w-[500px] h-fit flex flex-col gap-[16px] items-center justify-between text-center lg:min-w-[400px]">
            <h2 className="text-3xl lg:text-4xl font-medium font-primary text-black-blue mb-[8px] max-w-[360px]">
              Empoderando equipes{" "}
              <span className="inline-block scale-150 font-light">+</span>{" "}
              simplificando a gestão de pessoas
            </h2>
            <p className="text-base sm:text-lg font-secondary font-medium text-grey">
              A BizzFlow é a plataforma completa de RH para pequenas e médias
              empresas — com controle de ponto, folha, recrutamento e benefícios
              integrados, tudo em tempo real e sem complicações.
            </p>
            <p className="text-base sm:text-lg font-secondary font-medium text-grey">
              Com nossa solução, qualquer negócio pode focar no que realmente
              importa: cuidar do seu time.
            </p>
            <button
              type="button"
              className="w-fit h-10 bg-cian rounded-full flex items-center justify-center text-nowrap px-4 cursor-pointer transition-all duration-300 hover:brightness-105"
            >
              <Link href="/">
                <p className="text-white text-xs text- sm:text-sm md:text-base uppercase font-bold">
                  Comece grátis
                </p>
              </Link>
            </button>
          </div>
          <div className="w-[60%] max-w-[250px] aspect-[1/1.2] rounded-xl overflow-hidden lg:min-w-[400px] xl:min-w-[500px]">
            <Image
              src="/images/general/about-2.webp"
              alt="colaboradores apertando mão"
              width={2000}
              height={2000}
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
