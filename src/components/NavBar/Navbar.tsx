"use client";
import Link from "next/link";
import React, { useState } from "react";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import Links from "./Links";
import Hamburger from "hamburger-react";
import Image from "next/image";
import ThemeSwitch from "../ThemeSwitch";
import MaxWidthWrapper from "../MaxWidthWrapper";
import { cn } from "@/lib/utils";
import Logo from "./icons/Logo";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="fixed left-0 top-0 z-50 w-full border-none dark:border-b py-0 border-white/5 bg-white/80 shadow shadow-gray-300/20 backdrop-blur-md transition dark:bg-dark/80 dark:shadow-xl dark:shadow-black/20 print:hidden">
      <MaxWidthWrapper className="py-2">
        <header className="flex justify-between items-center">
          <Link href="/" onClick={() => setOpen(false)}>
            <Logo />
          </Link>
          <nav>
            <Links className="hidden md:flex" />
          </nav>
          {/* <div className="flex items-center gap-3">
          </div> */}
          <div className="flex items-center gap-2">
            <Link
              className="hidden md:block"
              href="https://github.com/yassinehaimouch/blog-portfolio"
              target="_blank"
            >
              <GitHubLogoIcon height={18} width={18} />
            </Link>
            <ThemeSwitch />
            {/* This is for Mobile Navbar */}
            <div className="block md:hidden">
              <Hamburger toggled={isOpen} toggle={setOpen} />
            </div>
          </div>
          {/* This is for Mobile Navbar */}
          <div
            className={cn(
              "md:hidden px-8 fixed w-full top-[64px] right-0 border-b border-white/5 bg-white/80 shadow shadow-gray-300/20 backdrop-blur-xl transition dark:bg-dark/80 dark:shadow-xl dark:shadow-black/20 print:hidden py-4",
              isOpen ? "block" : "hidden"
            )}
          >
            <Links closeMenu={() => setOpen(false)} />
          </div>
        </header>
      </MaxWidthWrapper>
    </div>
  );
};

export default Navbar;
