"use client";

import { useState } from "react";
import Link from "next/link";
import { MenuBar } from "./icons/icons";
import Navbar from "./Navbar";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { motion } from "framer-motion";
import { Logo } from "./icons/Logo";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <div className="myContainer 2xl:pt-12 lg:pt-8 pt-2 flex lg:flex-col flex-row justify-between">
      <Link href="/" className="lg:self-center 2xl:mb-8 lg:mb-6">
        <Logo />
      </Link>
      <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden">
        <MenuBar />
      </button>

      <div
        className={`hidden lg:flex lg:flex-row flex-col justify-between 2xl:gap-14 lg:gap-10 gap-4`}
      >
        <Navbar onLinkClick={closeMenu} />
        <LanguageSwitcher />
      </div>

      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: isOpen ? 0 : "-100%" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed top-0 left-0 w-3/5 sm:w-1/3 h-full bg-white shadow-lg z-50 flex flex-col gap-4 px-4 pt-10"
      >
        <Link href="/" className="mb-2" onClick={closeMenu}>
          <Logo />
        </Link>
        <Navbar onLinkClick={closeMenu} />
        <LanguageSwitcher />
      </motion.div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 lg:bg-transparent bg-[#00000099] z-40"
          onClick={closeMenu}
        />
      )}
    </div>
  );
};

export default Header;
