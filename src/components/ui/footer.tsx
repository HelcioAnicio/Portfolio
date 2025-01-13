import Link from 'next/link';
import {
  FaWhatsapp,
  FaLinkedinIn,
  FaInstagram,
  FaGithub,
  FaDiscord,
} from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer>
      <ul className='flex gap-2 flex-wrap items-center justify-center mb-5 h-44'>
        <Link href={''}>
          <li className='flex flex-col items-center p-2 hover:text-primary-foreground transition-all group'>
            <FaWhatsapp
              size={20}
              className='group-hover:size-6'
            />
            <p>WhatsApp</p>
          </li>
        </Link>
        <Link href={''}>
          <li className='flex flex-col items-center p-2 hover:text-primary-foreground transition-all group'>
            <FaLinkedinIn
              size={20}
              className='group-hover:size-6'
            />
            <p>Linkedin</p>
          </li>
        </Link>
        <Link href={''}>
          <li className='flex flex-col items-center p-2 hover:text-primary-foreground transition-all group'>
            <FaInstagram
              size={20}
              className='group-hover:size-6'
            />
            <p>Instagram</p>
          </li>
        </Link>
        <Link href={''}>
          <li className='flex flex-col items-center p-2 hover:text-primary-foreground transition-all group'>
            <FaGithub
              size={20}
              className='group-hover:size-6'
            />
            <p>GitHub</p>
          </li>
        </Link>
        <Link href={''}>
          <li className='flex flex-col items-center p-2 hover:text-primary-foreground transition-all group'>
            <FaDiscord
              size={20}
              className='group-hover:size-6'
            />
            <p>Discord</p>
          </li>
        </Link>
      </ul>
      <iframe
        className='rounded-sm '
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3750.7413563315536!2d-44.133514625560586!3d-19.935301238472128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa6c02d8927fb59%3A0x331d8c23eba89998!2sAv.%20Cristina%2C%20190%20-%20Parque%20das%20Ac%C3%A1cias%2C%20Betim%20-%20MG%2C%2032675-755!5e0!3m2!1spt-BR!2sbr!4v1736796359804!5m2!1spt-BR!2sbr'
        width='200'
        height='160'
        style={{ border: 0 }}
        allowFullScreen
        loading='lazy'
        referrerPolicy='no-referrer-when-downgrade'></iframe>
    </footer>
  );
};
