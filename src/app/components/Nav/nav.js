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
            <a href="#inicio">Início</a>
          </li>
          <li>
            <a href="#" className="flex items-center">
              Entrar
              <BiSubdirectoryRight className="text-2xl" />
            </a>
          </li>
          <li>
            <a href="#sobre">Sobre</a>
          </li>
          <li>
            <a href="#funciona">Como funciona</a>
          </li>
          <li>
            <a href="#ajuda">Ajuda</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
