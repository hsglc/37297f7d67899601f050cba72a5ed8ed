import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { SportProgram } from "@/types/index";

export const sportProgramApi = createApi({
  reducerPath: "sportProgramApi",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_URL }),

  endpoints: (builder) => ({
    getSportProgramById: builder.query<SportProgram, number>({
      query: (id) => `SportProgram/${id}`,
    }),
  }),
});

export const { useGetSportProgramByIdQuery } = sportProgramApi;
