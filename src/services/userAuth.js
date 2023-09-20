// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const userAuthApi = createApi({
  reducerPath: "userAuthApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://reqres.in/api/" }),
  endpoints: (builder) => ({
    getAllUser: builder.mutation({
      query: (token) => ({
        url: "/unknown",
        method: "GET",
        headers: {
          Authorization: `Bearer ${token ? token : sessionStorage.token}`,
          "Content-type": "application/json",
        },
      }),
    }),
    invalidatesTags: ["Get"],
    getUser: builder.mutation({
      query: (payload) => ({
        url: "/login",
        method: "POST",
        body: payload,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }),
      invalidatesTags: ["Post"],
    }),
  }),
});

export const { useGetUserMutation, useGetAllUserMutation } = userAuthApi;
