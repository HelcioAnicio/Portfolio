import Link from "next/link";
import {
  FaWhatsapp,
  FaLinkedinIn,
  FaInstagram,
  FaGithub,
  FaRegWindowRestore,
  // FaDiscord,
} from "react-icons/fa";
import { Button } from "./button";

export const Footer = () => {
  return (
    <footer className="m-auto w-full max-w-5xl py-20" id="footer">
      <div>
        <div className="flex w-full items-center gap-1 py-5 pl-10 text-2xl text-primary-foreground sm:py-10">
          <FaRegWindowRestore className="text-foreground" />
          <h2 className="min-w-max text-foreground"> Fale comigo</h2>
        </div>

        <ul className="mb-5 flex h-44 flex-wrap items-center justify-center gap-2">
          <Link target="_blank" href={"https://wa.me/message/B6KSMFVGOIKTI1"}>
            <li>
              <Button className="hover:bg-popover">
                <p>WhatsApp</p>
                <FaWhatsapp size={20} className="group-hover:size-6" />
              </Button>
            </li>
          </Link>
          <Link
            target="_blank"
            href={"https://www.linkedin.com/in/helcio-anicio/"}
          >
            <li>
              <Button className="hover:bg-popover">
                <p>Linkedin</p>
                <FaLinkedinIn size={20} className="group-hover:size-6" />
              </Button>
            </li>
          </Link>
          <Link
            target="_blank"
            href={"https://www.instagram.com/dev.helcioanicio/"}
          >
            <li>
              <Button className="hover:bg-popover">
                <p>Instagram</p>
                <FaInstagram size={20} className="group-hover:size-6" />
              </Button>
            </li>
          </Link>
          <Link target="_blank" href={"https://github.com/HelcioAnicio"}>
            <li>
              <Button className="hover:bg-popover">
                <p>GitHub</p>
                <FaGithub size={20} className="group-hover:size-6" />
              </Button>
            </li>
          </Link>
          {/* <Link target='_blank' href={''}>
            <li>
              <Button className='hover:bg-popover'>
                <p>Discord</p>
                <FaDiscord
                  size={20}
                  className='group-hover:size-6'
                />
              </Button>
            </li>
          </Link> */}
        </ul>
      </div>
    </footer>
  );
};
