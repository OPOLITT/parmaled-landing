"use client";

import { useState } from "react";
import { LogotypeHorizontal } from "../Logotype/LogotypeHorizontal";
import { HamburgerButton } from "./HamburgerButton/HamburgerButton";
import { MobileMenu } from "./MobileMenu/MobileMenu";
import { DesktopNavigation } from "./DesktopNavigation/DesktopNavigation";
import cls from "./Header.module.scss";
import clsx from "clsx";

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className={clsx(cls.header, {
        [cls.open]: isMenuOpen,
      })}>
        <nav className={cls.navigation}>
          <DesktopNavigation onNavClick={scrollToSection} />

          <div className={cls.mobileNav}>
            <LogotypeHorizontal
              width={206}
              height={40}
              className={cls.mobileLogotype}
            />
            <HamburgerButton isOpen={isMenuOpen} onClick={handleMenuToggle} />
          </div>
        </nav>
      </header>
      <MobileMenu
        isOpen={isMenuOpen}
        onClose={handleMenuToggle}
        onNavClick={handleNavClick}
      />
    </>
  );
};
