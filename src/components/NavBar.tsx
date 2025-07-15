import Image from "next/image";
import Link from "next/link";
import { navItems } from "@/data/ui";

export default function NavBar() {
  return (
    <div className="fixed top-2 left-0 z-50 h-14 w-full md:h-16">
      <nav className="container mx-auto h-full w-[98%] rounded-full bg-white px-2 shadow-xs md:px-4">
        <div className="flex h-full w-full items-center justify-between">
          <div className="h-14 w-28 md:w-40">
            <Image
              src="/images/logos/LOGO-BLACK-TRANSPARENT.svg"
              alt="BizzFlow"
              width={100}
              height={100}
              className="h-full w-full scale-[150%] object-cover object-left"
            />
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden items-center gap-2 font-semibold md:flex">
              {navItems.map((item) => (
                <Link href={`#${item}`} key={item}>
                  <p className="nav-hover-btn text-black">{item}</p>
                </Link>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-yellow flex h-10 cursor-pointer items-center justify-center rounded-full px-4.5 text-xs font-bold text-black uppercase transition-all duration-300 hover:brightness-95">
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
