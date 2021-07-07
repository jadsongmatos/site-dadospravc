import Head from 'next/head';
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
            <h1 className="display-5 fw-bold">Procurando dados pra vocé</h1>
            <div className="col-lg-6 mx-auto">
              <p id="experiencia" className="lead mb-4">
                Nosso objetivo ajudar vocé a encontra oque procura
              </p>
            </div>
          </section>
          <section className="px-4 py-5 my-5 text-center shadow rounded-3">
            <h2>Motivo</h2>
            <p>Criar uma forma simples eficiente de busca</p>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
