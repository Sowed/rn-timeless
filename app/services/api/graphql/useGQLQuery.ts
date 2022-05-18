import Config from 'react-native-config';
import { useQuery } from 'react-query';
import { GraphQLClient, request } from 'graphql-request';
import { DocumentNode } from 'graphql';


const GRAPHQL_ENDPOINT = Config.API_BASE_URL;

interface IUseGQLQueryOptions {
  queryKey: string[];
  queryConfig?: Record<string, string>
  requestQuery: DocumentNode;
  requestVariables?: Record<string, string | number>,
}

/**
 * -----------------------------------------------------------------------------
 * Hook, to fetch data from a GRAPHQL endpoint. This will be used as a building
 * block around other `react-query` custom hooks.
 * 
 * - TODO: Add exhaustive type definitions to this hook.
 */
export const useGQLQuery = ({
  queryKey,
  queryConfig = {},
  requestQuery,
  requestVariables,
}: IUseGQLQueryOptions) => {
  const fetchData = async () => {
    // TODO: Add exception and error handling to this request
    const response = await request(GRAPHQL_ENDPOINT, requestQuery, requestVariables);

    console.log({
      '🦋 useGQLQuery:: fetchData': '---------', response
    });

    return response;
  };

  // TODO: Setup sensible default overrides to this query.
  const queryResponse = useQuery(queryKey, fetchData, queryConfig);

  console.log({
    '🟢 🟢 useGQLQuery:: fetchData': '---------', queryResponse
  });

  return queryResponse;
};
