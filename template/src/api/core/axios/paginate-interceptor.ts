import { AxiosResponse } from 'axios';
import { Paginate } from '../model';

export default function paginateResponseInterceptor(res: AxiosResponse): AxiosResponse {
  const body = res.data;
  if (body.data && body.first_page_url) {
    res.data = {
      data: body.data,
      paginate: {
        from: body.from,
        to: body.to,
        size: body.per_page,
        total: body.total,
        currentPage: Math.round(body.from / body.per_page),
        lastPage: body.last_page,
      } as Paginate,
    };
  }
  return res;
}
