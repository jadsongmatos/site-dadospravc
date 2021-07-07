const axios = require('axios');

const requestUrl = `${global.SERVER_URL}/api/cnpj/v1`;

describe('api/cnpj/v1 (E2E)', () => {
  test('Procurando um por CNPJ válido existente: RENTAL TEXT INDUSTRIA', async () => {
    const response = await axios.get(`${requestUrl}/RENTAL TEXT INDUSTRIA`);
    const { data, status } = response;

    expect(status).toEqual(200);
    expect(data[24963174000118]).toEqual('RENTAL TEXT INDUSTRIA');
  });

  test('Procurando um CNPJ válido inexistente: buceta', async () => {
    try {
      await axios.get(`${requestUrl}/buceta`);
    } catch (error) {
      const { response } = error;
      const { data, status } = response;

      expect(status).toEqual(404);
      expect(data).toEqual({
        message: 'to perdido',
        name: 'NotFoundError',
        type: 'not_found',
      });
    }
  });

  test('Buscar um CNPJ inválido: test( ', async () => {
    try {
      await axios.get(`${requestUrl}/test(`);
    } catch (error) {
      const { response } = error;
      const { data, status } = response;

      expect(status).toEqual(400);
      expect(data).toEqual({
        name: 'BadRequestError',
        type: 'bad_request',
        errors: {
          errno: 1,
          code: 'SQLITE_ERROR',
        },
      });
    }
  });
});
