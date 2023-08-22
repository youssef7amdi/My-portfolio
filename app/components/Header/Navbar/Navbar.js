import Image from "next/image";
import Link from "next/link";
import { images } from "@/app/constants";
import MobileNavbar from "./MobileNavbar";

const Navbar = () => {
  return (
    <nav className="w-full flex justify-between items-center px-8 py-4 bg-white/25 backdrop-blur-sm border-[1px] border-white/[0.18] fixed z-50">
      <div className="flex justify-start items-center ">
        <Image
          src={images.youssef}
          alt="Logo"
          priority
          quality={100}
          className="w-[140px] h-[40px] 3xl:w-[180px] 3xl:h-[40px]"
        />
      </div>
      <ul className="hidden Lmd:flex flex-1 justify-center items-center ">
        {["home", "about", "work", "skills", "contact"].map((item) => (
          <li
            key={`link-${item}`}
            className="flex justify-center items-center p-text flex-col cursor-pointer mx-4 group"
          >
            <div className="w-[5px] h-[5px] rounded-full bg-transparent mb-[5px] group-hover:bg-secondary" />
            <Link
              href={`#${item}`}
              className="text-gray flex-col uppercase font-[500] transition-all duration-300 ease-in-out hover:text-secondary "
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>
      <MobileNavbar />
    </nav>
  );
};

export default Navbar;
