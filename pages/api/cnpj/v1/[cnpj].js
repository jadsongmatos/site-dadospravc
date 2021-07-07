import app from '@/app';
import BadRequestError from '@/errors/BadRequestError';
import NotFoundError from '@/errors/NotFoundError';
import { searchCNPJ } from '@/services/cnpj';

async function cnpjData(request, response) {
  try {
    const result = await searchCNPJ(request.query.cnpj);
    return response.status(result.status).json(result.data);
  } catch (error) {
    if (error.response.status === 400) {
      throw new BadRequestError({
        errors: error.response.data,
      });
    }
    if (error.response.status === 404) {
      throw new NotFoundError({
        message: 'to perdido',
      });
    }
    throw error;
  }
}

export default app().get(cnpjData);
