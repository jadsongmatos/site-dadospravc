import { FaGithub } from 'react-icons/fa';

export function Footer() {
  return (
    <footer className="container">
      <section className="col-6">
        <span>Participe ;) </span>
        <a href="https://github.com/slender1808/site-dadospravc">
          <FaGithub color="#1A2E46" />
        </a>
      </section>
    </footer>
  );
}
