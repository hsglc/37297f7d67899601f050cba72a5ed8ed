import {
  BaseQueryFn,
  createApi,
} from "@reduxjs/toolkit/query/react";
import axiosInstance from "@/lib/axiosInstance";
import type { AxiosRequestConfig, AxiosError } from "axios";
import type { SportProgram } from "@/types/index";

const axiosBaseQuery =
  (
    { baseUrl }: { baseUrl: string } = { baseUrl: "" }
  ): BaseQueryFn<
    {
      url: string;
      method?: AxiosRequestConfig["method"];
      data?: AxiosRequestConfig["data"];
      params?: AxiosRequestConfig["params"];
      headers?: AxiosRequestConfig["headers"];
    },
    unknown,
    unknown
  > =>
  async ({ url, method, data, params, headers }) => {
    try {
      const result = await axiosInstance({
        url: baseUrl + url,
        method,
        data,
        params,
        headers,
      });
      return { data: result };
    } catch (axiosError) {
      const err = axiosError as AxiosError;
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };

export const sportProgramApi = createApi({
  reducerPath: "sportProgramApi",
  baseQuery: axiosBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_URL! }),

  endpoints: (builder) => ({
    getSportProgramById: builder.query<SportProgram, number>({
      query: (id) => ({ url: `/SportProgram/${id}`, method: "GET" }),
    }),
  }),
});

export const { useGetSportProgramByIdQuery } = sportProgramApi;
