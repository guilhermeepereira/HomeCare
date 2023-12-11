"use client";

import { BiSubdirectoryRight } from "react-icons/bi";
import Image from "next/image";
import HomeCareIcon from "public/assets/logo2.png";

const Nav = () => {
  return (
    <nav
      className="flex place-content-between h-20 w-full items-center"
      id="header-content"
    >
      <a href="#">
        <Image className="w-32 ml-2" src={HomeCareIcon} />
      </a>
      <div className="p-8" id="header-list">
        <ul className="px-7 flex gap-12">
          <li>
            <a
              href="#home"
              className="flex items-center hover:text-[#feb949] duration-300"
              id="link-menu"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#enter"
              className="flex items-center hover:text-[#feb949] duration-300"
            >
              Entrar
              <BiSubdirectoryRight className="text-xl" />
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-[#feb949] duration-300">
              Sobre
            </a>
          </li>
          <li>
            <a href="#how-work" className="hover:text-[#feb949] duration-300">
              Como funciona
            </a>
          </li>
          <li>
            <a href="#faq" className="hover:text-[#feb949] duration-300">
              Ajuda
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
