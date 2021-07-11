import Link from 'next/link';
import Image from 'next/image';
import { BsSearch } from 'react-icons/bs';
import { BiShare } from 'react-icons/bi';
import { useEffect, useState } from 'react';

export function Header() {
  const [shareNavigator, setShareNavigator] = useState(() => {
    console.log('Não está disponivel');
  });

  useEffect(() => {
    if (window.navigator.share) {
      setShareNavigator(() => {
        window.navigator
          .share({
            title: 'Dados pra vocé',
            text: 'Procurando algo ?',
            url: 'link',
          })
          .then(() => console.log('Successful share'))
          .catch((error) => console.error('Error sharing', error));
      });
    }
  }, []);

  return (
    <header className="border-bottom shadow fixed-top bg-white">
      <nav className="navbar container navbar-expand-sm navbar-light">
        <div className="container-fluid align-items-center">
          <Link className="navbar-brand" href="/">
            <Image
              loading="lazy"
              type="image/png"
              src="/dados-pra-vc.png"
              alt="link dadospravc"
              width="127px"
              height="32px"
            />
          </Link>
          <Link href="/search" style={{}} className="align-middle">
            <p>
              {'Procurar '}
              <BsSearch color="#1A2E46" />
            </p>
          </Link>
          <button
            type="button"
            className="btn"
            onClick={() => {
              shareNavigator();
            }}
          >
            <BiShare />
          </button>
        </div>
      </nav>
    </header>
  );
}
