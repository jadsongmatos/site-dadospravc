import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import Head from 'next/head';

export default function Search() {
  return (
    <>
      <Head>
        <title>Dados pra VC</title>
      </Head>
      <Header />
      <main className="container mt-5 pt-5">
        <h2>Procurando dados pra vocé</h2>
      </main>
      <Footer />
    </>
  );
}
