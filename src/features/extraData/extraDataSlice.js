import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { GetLocalStorageData } from "../../Utils/getLocalStorageData";

export const extraDataApi = createApi({
  reducerPath: "extraDataApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BASE_URL,
    prepareHeaders: (headers) => {
      const accessToken = GetLocalStorageData("user-token");
      if (accessToken) {
        headers.set("authorization", `Bearer ${accessToken}`);
      }
      return headers;
    },
  }),
  tagTypes: [],
  endpoints: (builder) => ({
    deleteMyAccount: builder.mutation({
      query: (emailOrPhone) => ({
        url: `/extra-data/delete-my-account?emailOrPhone=${emailOrPhone}`,
        method: "POST",
        body: {},
      }),
    }),
    inviteMember: builder.mutation({
      query: (memberData) => ({
        url: `/extra-data/invite-member`,
        method: "POST",
        body: { data: memberData },
      }),
    }),
  }),
});

export const { useDeleteMyAccountMutation, useInviteMemberMutation } =
  extraDataApi;
