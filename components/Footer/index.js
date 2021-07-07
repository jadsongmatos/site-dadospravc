import Image from 'next/image';
import { FaGithub } from 'react-icons/fa';

export function Footer() {
  return (
    <footer className="container">
      <section className="col-6">
        <a href="https://github.com/slender1808/site-dadospravc">
          <FaGithub color="#1A2E46" />
        </a>
      </section>
      <section>
        <a
          href="https://vercel.com/?utm_source=dadospravc"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/powered-by-vercel.svg"
            width="175px"
            height="50px"
            alt="Powered by Vercel"
          />
        </a>
      </section>
    </footer>
  );
}
