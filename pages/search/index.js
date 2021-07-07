import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import Head from 'next/head';
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';

export default function Search() {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState({});

  const onSubmit = async () => {
    console.log(data);
  };
  return (
    <>
      <Head>
        <title>Dados pra VC</title>
      </Head>
      <Header />
      <main className="mt-5 pt-5 container">
        <div className="row mb-5">
          <section className="px-4 py-5 my-5 text-center shadow rounded-3">
            <h1 className="display-5 fw-bold">
              O que extamento vocé procura ?
            </h1>

            <form
              className="col-lg-6 mx-auto mt-5"
              onSubmit={handleSubmit(onSubmit)}
            >
              <label className="form-label">Procura</label>
              <input
                className="form-control"
                list="databases"
                placeholder="Escolha um conjunto de dados"
                onChange={(e) => {
                  setData({ ...data, ...{ db: e.target.value } });
                  console.log(e.target.value);
                }}
              />
              <datalist id="databases">
                <option value="cnpj">CNPJ</option>
              </datalist>
              <div className="d-grid gap-2 col-6 mx-auto mt-5">
                <button type="submit" className="btn btn-primary">
                  Salvar
                </button>
              </div>
            </form>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
