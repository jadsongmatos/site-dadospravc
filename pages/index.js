import Head from 'next/head';
import Link from 'next/link';
import { BsSearch } from 'react-icons/bs';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export default function Index() {
  return (
    <>
      <Head>
        <title>Dados pra VC</title>
      </Head>
      <Header />

      <main className="mt-5 pt-5 container">
        <div className="row mb-5">
          <section className="px-4 py-5 my-5 text-center shadow rounded-3">
            <h1 className="display-5 fw-bold">Procurando algo ?</h1>
            <div className="col-lg-6 mx-auto">
              <p id="experiencia" className="lead mb-4">
                Ajudamos vocé a encontra oque procura
              </p>
              <Link href="/search">
                <div className="btn btn-primary btn-lg">
                  <span className="mx-2">Procurar </span>
                  <BsSearch color="#fff" />
                </div>
              </Link>
            </div>
          </section>
          <section className="px-4 py-5 my-5 text-center shadow rounded-3">
            <h1 className="display-5 fw-bold">Vocé tem algum dado ?</h1>
            <div className="col-lg-6 mx-auto">
              <p id="experiencia" className="lead mb-4">
                Monetize agora seus dados
              </p>
              <Link href="https://api.whatsapp.com/send?phone=5551935051715&text=Ol%C3%A1%2C%20vim%20atrav%C3%A9s%20do%20site%20">
                <p className="btn btn-primary btn-lg">Entrar em contato</p>
              </Link>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
