import {
  TAddPrimaryCategoryPayload,
  TCategory,
  TCategoryQuery,
  TServerResponse,
} from '@/app/_utils/types';
import { baseApi } from './base.api';
import { makeSearchQuery } from '@/app/_utils/helpers';

const CATEGORY = 'category';
const CATEGORIES = 'categories';

const categoryApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // get categories
    getCategories: builder.query<TServerResponse<TCategory[]>, TCategoryQuery>({
      query: (args) => ({
        url: `/${CATEGORIES}/admin${makeSearchQuery(args)}`,
      }),
    }),
    // add primary category
    addPrimaryCategory: builder.mutation<
      TServerResponse<any>,
      TAddPrimaryCategoryPayload
    >({
      query: (payload) => ({
        url: `/${CATEGORY}/primary`,
        method: 'POST',
        body: payload,
      }),
      invalidatesTags: ['categories'],
    }),
  }),
});

export const { useGetCategoriesQuery, useAddPrimaryCategoryMutation } =
  categoryApi;
