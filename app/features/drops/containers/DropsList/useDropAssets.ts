import gql from 'graphql-tag';

import { useGQLQuery } from '@services/api/graphql';

/**
 * Key to track drop assets cached in react query
 */
const DROP_ASSETS_QUERY_KEY = 'drop-assets';

/**
 * -----------------------------------------------------------------------------
 * A Query to fetch the first 200 list of assets.
 * TODO: Replace 200 with a dynamic `pageSize` when pagination is added.
 */
export const FETCH_DROP_ASSETS = gql`
  # query FetchAllAssets($pageSize: Int!) {
  # assets(pagination: { first: $pageSize }) {
  query FetchAllAssets {
    assets(pagination: { first: 200 }) {
      edges {
        node {
          id
          isDemo
          label
          model
          make
          status
          price
        }
      }
      pageInfo {
        startCursor
        endCursor
        hasNextPage
        hasNextPage
      }
    }
  }
`;

/**
 * -----------------------------------------------------------------------------
 * React Query hook that fetches a list of `Drop` assets and caches them.
 *
 * TODO:
 * - Add type definitions here `useGQLQuery`
 * - Persist the results and use them as initial data when offline support is added.
 */
const useDropAssets = () => {
  //
  const { data, loading, error, ...rest } = useGQLQuery({
    queryKey: [DROP_ASSETS_QUERY_KEY],
    // queryConfig: {},
    requestQuery: FETCH_DROP_ASSETS,
    // requestVariables,
  });

  console.log({ '🌼 useDropAssets': '-----', data, loading, error, rest });

  return { data, loading, error, ...rest };
};

export default useDropAssets;
