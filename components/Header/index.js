import Link from 'next/link';
import Image from 'next/image';
import { BsSearch } from 'react-icons/bs';
import { BiShare } from 'react-icons/bi';
import { useEffect } from 'react';
import Head from 'next/head';

export function Header() {
  let shareNavigator = () => {
    console.log('Não está disponivel');
  };
  useEffect(() => {
    const adsbygoogle = window.adsbygoogle || [];
    if (window.navigator.share) {
      shareNavigator = () => {
        window.navigator
          .share({
            title: 'Dados pra vocé',
            text: 'Procurando algum dado ?',
            url: 'link',
          })
          .then(() => console.log('Successful share'))
          .catch((error) => console.error('Error sharing', error));
      };
    }
    adsbygoogle.push({
      google_ad_client: 'ca-pub-7540935582112706',
      enable_page_level_ads: true,
    });
  }, []);

  return (
    <header className="border-bottom shadow fixed-top bg-white">
      <Head>
        <script
          data-ad-client="ca-pub-7540935582112706"
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
        />
      </Head>
      <nav className="navbar container navbar-expand-sm navbar-light">
        <div className="container-fluid align-items-center">
          <Link className="navbar-brand" href="/">
            <Image
              loading="lazy"
              type="image/ico"
              src="/favicon.ico"
              alt="link dadospravc"
              width="32px"
              height="32px"
            />
          </Link>
          <Link href="/search">
            <div>
              <span className="mx-2">Procurar </span>
              <BsSearch color="#1A2E46" />
            </div>
          </Link>
          <button type="button" className="btn" onClick={shareNavigator}>
            <BiShare />
          </button>
        </div>
      </nav>
    </header>
  );
}
