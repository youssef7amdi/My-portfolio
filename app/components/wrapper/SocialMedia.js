import { BsTwitter, BsInstagram } from "react-icons/bs";
import { SiUpwork } from "react-icons/si";
import { FaFacebookF, FaWhatsapp, FaGithub } from "react-icons/fa";
import Link from "next/link";

const SocialMedia = () => {
  return (
    <div className="social">
      <div>
        <Link href="https://www.instagram.com/youssef7amdi/" target="_blank" rel="noreferrer">
          <BsInstagram />
        </Link>
      </div>
      <div>
        <Link href="https://www.upwork.com/freelancers/~018b05d5bda4c35ef7" target="_blank" rel="noreferrer">
          <SiUpwork />
        </Link>
      </div>
      <div>
        <Link href="https://web.facebook.com/youssef.hamdi.9212" target="_blank" rel="noreferrer">
          <FaFacebookF />
        </Link>
      </div>
      <div>
        <Link href="https://wa.me/1111630525" target="_blank" rel="noreferrer">
          <FaWhatsapp />
        </Link>
      </div>
      <div>
        <Link href="https://github.com/youssef7amdi" target="_blank" rel="noreferrer">
          <FaGithub />
        </Link>
      </div>
    </div>
  );
};

export default SocialMedia;
