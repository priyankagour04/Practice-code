import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = 'https://jsonplaceholder.typicode.com/';

export const usersApi = createApi({
    reducerPath: 'usersApi',
    baseQuery: fetchBaseQuery({ baseUrl:BASE_URL }),
    endpoints: (builder) => ({
      getUsers: builder.query({
        query: () => 'users',
      }),
    }),
  });

  export const { useGetUsersQuery } = usersApi;