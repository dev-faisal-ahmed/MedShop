import {
  TAddPrimaryCategoryPayload,
  TServerResponse,
} from '@/app/_utils/types';
import { baseApi } from './base.api';

const CATEGORY = 'category';

const categoryApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // add primary category
    addPrimaryCategory: builder.mutation<
      TServerResponse<any>,
      TAddPrimaryCategoryPayload
    >({
      query: (payload) => ({
        url: `${CATEGORY}/primary`,
        method: 'POST',
        body: payload,
      }),
      invalidatesTags: ['categories'],
    }),
  }),
});
