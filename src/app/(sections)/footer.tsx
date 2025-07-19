import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="from-yellow-transparent mt-[96px] h-fit w-full overflow-hidden bg-gradient-to-t to-transparent px-[2%] py-6 md:mt-[128px] lg:mt-[160px]">
      <div className="relative container mx-auto flex min-h-[200px] flex-col items-center justify-center gap-[32px] lg:flex-row lg:justify-between">
        <div className="h-[100px] w-[200px] lg:absolute lg:top-[50%] lg:left-[50%] lg:translate-x-[-50%] lg:translate-y-[-50%]">
          <Link href="/">
            <Image
              src="/images/logos/LOGO-BLACK-TRANSPARENT.svg"
              alt="BizzFlow"
              width={250}
              height={250}
              className="h-full w-full object-cover object-center"
            />
          </Link>
        </div>
        <Link href="https://github.com/SrDev-Henrique" target="_blank">
          <p className="font-secondary text-grey gap-1 text-xs font-bold lg:flex lg:text-nowrap">
            Desenvolvido por{" "}
            <span className="text-black-blue hover:underline">
              Henrique Albuquerque
            </span>
          </p>
        </Link>
        <p className="font-secondary text-grey text-xs font-bold lg:text-nowrap">
          © {new Date().getFullYear()} BizzFlow. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
