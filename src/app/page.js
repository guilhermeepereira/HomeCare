import Image from "next/image";
import HomeCareIcon from "public/assets/logo2.png";
import Nav from "./components/Nav/nav";

export default function Home() {
  return (
    <>
      <header className="grid h-20 w-screen justify-items-center px-48 fixed">
        <Nav />
      </header>
      <main></main>
    </>
  );
}
