"use client";

import { useEffect, useId, useRef, useState } from "react";
import { HouseIcon, InboxIcon, SearchIcon, FileText } from "lucide-react";
import { useWindowScroll } from "react-use";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

import { navVariants } from "./anime";

const navigationLinks = [
  { href: "/blog", label: "Blog", icon: HouseIcon, active: true, id: "1" },
  { href: "/blog/arquivos", label: "Arquivos", icon: InboxIcon, id: "2" },
  { href: "/blog/sobre", label: "Sobre", icon: FileText, id: "3" },
];

export default function NavBar() {
  const id = useId();
  const pathname = usePathname();

  const [isNavVisible, setIsNavVisible] = useState(true);

  const navContainerRef = useRef<HTMLDivElement>(null);

  const lastScrollYRef = useRef(0);

  const { y: currentScrollY } = useWindowScroll();

  useEffect(() => {
    if (currentScrollY === 0) {
      setIsNavVisible(true);
    } else if (currentScrollY > lastScrollYRef.current) {
      setIsNavVisible(false);
    } else if (currentScrollY < lastScrollYRef.current) {
      setIsNavVisible(true);
    }
    lastScrollYRef.current = currentScrollY;
  }, [currentScrollY]);

  return (
    <motion.header
      variants={navVariants}
      initial="visible"
      animate={isNavVisible ? "visible" : "hidden"}
      ref={navContainerRef}
      className="bg-primary-foreground fixed top-0 right-0 left-0 z-50 mx-auto mt-2 w-[96%] max-w-7xl rounded-xl border-b px-4 md:px-6"
    >
      <div className="flex h-16 items-center justify-between gap-4">
        <div className="flex flex-1 items-center gap-2">
          <Popover>
            <PopoverTrigger asChild>
              <Button
                className="group size-8 md:hidden"
                variant="ghost"
                size="icon"
              >
                <svg
                  aria-label="Menu"
                  className="pointer-events-none"
                  width={16}
                  height={16}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title id="menuIconTitle">Menu icon</title>
                  <path
                    d="M4 12L20 12"
                    className="origin-center -translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-x-0 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[315deg]"
                  />
                  <path
                    d="M4 12H20"
                    className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] group-aria-expanded:rotate-45"
                  />
                  <path
                    d="M4 12H20"
                    className="origin-center translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[135deg]"
                  />
                </svg>
              </Button>
            </PopoverTrigger>
            <PopoverContent align="start" className="w-36 p-1 md:hidden">
              <NavigationMenu className="max-w-none *:w-full">
                <NavigationMenuList className="flex-col items-start gap-0 md:gap-2">
                  {navigationLinks.map((link) => {
                    const Icon = link.icon;
                    return (
                      <NavigationMenuItem key={link.id} className="w-full">
                        <NavigationMenuLink
                          href={link.href}
                          className="flex-row items-center gap-2 py-1.5"
                          active={pathname === link.href}
                        >
                          <Icon
                            size={16}
                            className="text-muted-foreground/80"
                            aria-hidden="true"
                          />
                          <span>{link.label}</span>
                        </NavigationMenuLink>
                      </NavigationMenuItem>
                    );
                  })}
                </NavigationMenuList>
              </NavigationMenu>
            </PopoverContent>
          </Popover>
          <div className="bg-primary flex items-center justify-start rounded-full p-1">
            <Link href="/">
              <Image
                src="/images/logos/LOGO-ICON.svg"
                alt="BizzFlow"
                width={40}
                height={40}
              />
            </Link>
          </div>
        </div>
        <NavigationMenu className="max-md:hidden">
          <NavigationMenuList className="gap-2">
            {navigationLinks.map((link) => {
              const Icon = link.icon;
              return (
                <NavigationMenuItem key={link.id}>
                  <NavigationMenuLink
                    active={pathname === link.href}
                    href={link.href}
                    className="text-foreground hover:text-primary flex-row items-center gap-2 py-1.5 font-medium"
                  >
                    <Icon
                      size={16}
                      className="text-secondary-foreground/80"
                      aria-hidden="true"
                    />
                    <span>{link.label}</span>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              );
            })}
          </NavigationMenuList>
        </NavigationMenu>
        <div className="flex flex-1 items-center justify-end gap-2">
          <div className="relative">
            <Input
              id={id}
              className="peer h-8 ps-8 pe-2"
              placeholder="Buscar..."
              type="search"
            />
            <div className="text-muted-foreground/80 pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-2 peer-disabled:opacity-50">
              <SearchIcon size={16} />
            </div>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
