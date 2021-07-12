import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import Head from 'next/head';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

export default function Search() {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState({});
  const [resutl, setResult] = useState();
  const [loading, setLoad] = useState(false);
  const [database] = useState([
    {
      name: 'CNPJ',
      url: 'cnpj/v1',
      inputSearch: 'Procurar CNPJ pelo razão social',
      comments: `Quando uma palavra contém o asterisco (*), ela corresponderá a
      qualquer empresa que comece com a essa palavra. Quando não
      quiser não procurar por uma palavra pode usar (NOT) antes.
      Quando tiver na duvida entre duas palavras pode usar (OR) antes.
      Para ver outros atalhos acesse documentação fts5 do sqlite.`,
    },
  ]);
  const cancelTokenSource = axios.CancelToken.source();

  const onSubmit = (e) => {
    setLoad(true);
    console.log(e);
    console.log(data);
    setResult([]);

    axios
      .get(`/api/${data.url}/${e.search}`, {
        cancelToken: cancelTokenSource.token,
      })
      .then((response) => {
        if (response.data) {
          setResult(response.data);
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoad(false);
      });
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
              O que exatamente vocé procura ?
            </h1>

            <form
              className="col-lg-6 mx-auto mt-5"
              onSubmit={handleSubmit(onSubmit)}
            >
              <label
                htmlFor="databases"
                className="form-control form-label border-0"
              >
                Escolha a baixo um conjuto de dados
                <input
                  className="form-control mt-3"
                  list="databases"
                  placeholder="Escolha um conjunto de dados"
                  onChange={(e) => {
                    database.forEach((db) => {
                      if (db.name === e.target.value) {
                        setData({ ...data, ...db });
                      }
                    });
                  }}
                />
              </label>
              <datalist id="databases">
                {database.map((e) => {
                  return (
                    <option key={e.name} value={e.name}>
                      {e.name}
                    </option>
                  );
                })}
              </datalist>
              {data.name ? (
                <>
                  <label
                    htmlFor="inputSearch"
                    className="form-control form-label border-0 mt-4"
                  >
                    {data.inputSearch}
                    <input
                      type="text"
                      id="inputSearch"
                      className="form-control mt-3"
                      aria-describedby="comments"
                      {...register('search')}
                    />
                  </label>
                  <p id="comments" className="form-text mt-3">
                    {data.comments}
                  </p>
                  <div className="d-grid gap-2 col-6 mx-auto mt-5">
                    {loading ? (
                      <>
                        <h3>Carregando...</h3>
                        <button
                          type="button"
                          onClick={cancelTokenSource.cancel()}
                          className="btn btn-primary"
                        >
                          Cancelar
                        </button>
                      </>
                    ) : (
                      <button type="submit" className="btn btn-primary">
                        Pesquisar
                      </button>
                    )}
                  </div>
                  {resutl ? (
                    <div className="mt-5">
                      <h2>Resultados</h2>
                      <ol className="list-group list-group-flush text-start list-group-numbered">
                        {resutl.map((e, i) => {
                          if (i < 18) {
                            return (
                              <li className="list-group-item">
                                <div className="ms-2 me-auto">
                                  <p>{`CNPJ: ${e[0]}`}</p>
                                  {`Razão social: ${e[1]}`}
                                </div>
                              </li>
                            );
                          }
                          return null;
                        })}
                      </ol>
                    </div>
                  ) : null}
                </>
              ) : null}
            </form>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
