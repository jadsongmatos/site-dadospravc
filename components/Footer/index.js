import { FaGithub } from 'react-icons/fa';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="container">
      <section className="col-6 mx-auto text-center">
        <Link href="https://github.com/slender1808/site-dadospravc">
          <p className="fs-5">
            Participe
            <FaGithub color="#1A2E46" />
          </p>
        </Link>
      </section>
    </footer>
  );
}
