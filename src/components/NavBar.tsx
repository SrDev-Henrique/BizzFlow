import Image from "next/image";
import Link from "next/link";
import { navItems } from "@/data/ui";

export default function NavBar() {
  return (
    <div className="w-full h-14 fixed top-2 left-0 z-50">
      <nav className="container mx-auto px-2 h-full md:px-4 bg-white rounded-full shadow-xs">
        <div className="w-full h-full flex items-center justify-between">
          <div className="h-14 w-28 md:w-40">
            <Image
              src="/images/logos/LOGO-BLACK-TRANSPARENT.svg"
              alt="BizzFlow"
              width={100}
              height={100}
              className="w-full h-full object-cover object-left scale-[150%]"
            />
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden items-center gap-2 font-semibold md:flex">
              {navItems.map((item) => (
                <Link href={`#${item}`} key={item}>
                  <p className="text-black nav-hover-btn">{item}</p>
                </Link>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <div className="flex items-center justify-center font-bold uppercase text-xs rounded-full px-4.5 h-10 bg-cian text-white transition-all duration-300 hover:brightness-95 cursor-pointer">
                <Link href="/cadastro">
                  <p>Comece grátis</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
