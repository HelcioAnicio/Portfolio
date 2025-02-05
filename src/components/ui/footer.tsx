import Link from 'next/link';
import {
  FaWhatsapp,
  FaLinkedinIn,
  FaInstagram,
  FaGithub,
  // FaDiscord,
} from 'react-icons/fa';
import { Button } from './button';

export const Footer = () => {
  return (
    <footer
      className='py-20'
      id='footer'>
      <div>
        <h3 className='text-2xl text-primary-foreground text-center py-5'>
          Fale comigo
        </h3>
        <ul className='flex gap-2 flex-wrap items-center justify-center mb-5 h-44'>
          <Link
            target='_blank'
            href={'https://wa.me/message/B6KSMFVGOIKTI1'}>
            <li>
              <Button className='hover:bg-popover'>
                <p>WhatsApp</p>
                <FaWhatsapp
                  size={20}
                  className='group-hover:size-6'
                />
              </Button>
            </li>
          </Link>
          <Link
            target='_blank'
            href={'https://www.linkedin.com/in/helcio-anicio/'}>
            <li>
              <Button className='hover:bg-popover'>
                <p>Linkedin</p>
                <FaLinkedinIn
                  size={20}
                  className='group-hover:size-6'
                />
              </Button>
            </li>
          </Link>
          <Link
            target='_blank'
            href={'https://www.instagram.com/dev.helcioanicio/'}>
            <li>
              <Button className='hover:bg-popover'>
                <p>Instagram</p>
                <FaInstagram
                  size={20}
                  className='group-hover:size-6'
                />
              </Button>
            </li>
          </Link>
          <Link
            target='_blank'
            href={'https://github.com/HelcioAnicio'}>
            <li>
              <Button className='hover:bg-popover'>
                <p>GitHub</p>
                <FaGithub
                  size={20}
                  className='group-hover:size-6'
                />
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
      <iframe
        className='rounded-sm m-auto  w-52 h-40 md:w-96 md:h-80'
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3750.7413563315536!2d-44.133514625560586!3d-19.935301238472128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa6c02d8927fb59%3A0x331d8c23eba89998!2sAv.%20Cristina%2C%20190%20-%20Parque%20das%20Ac%C3%A1cias%2C%20Betim%20-%20MG%2C%2032675-755!5e0!3m2!1spt-BR!2sbr!4v1736796359804!5m2!1spt-BR!2sbr'
        style={{ border: 0 }}
        allowFullScreen
        loading='lazy'
        referrerPolicy='no-referrer-when-downgrade'></iframe>
      {/* <p >Desenvolvido por Helcio Anicio</p> */}
    </footer>
  );
};
