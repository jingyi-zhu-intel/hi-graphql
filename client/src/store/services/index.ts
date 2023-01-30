// Need to use the React-specific entry point to import createApi
import { createApi } from '@reduxjs/toolkit/query/react';
import { graphqlRequestBaseQuery } from '@rtk-query/graphql-request-base-query';
import { gql } from "@apollo/client";

export interface Application {
    id: string;
    name: string;
    version: string;
    description: string;
}

const GET_APPLICATIONS = gql`
  query GetApplications {
    applications {
      id
      name
      version
      description
    }
  }
`;

// Define a service using a base URL and expected endpoints
export const api = createApi({
  baseQuery: graphqlRequestBaseQuery({
    url: 'http://localhost:4000',
  }),
  endpoints: (builder) => ({
    getApplications: builder.query<Application[], null>({
      query: () => ({
        document: GET_APPLICATIONS
      }),
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetApplicationsQuery } = api