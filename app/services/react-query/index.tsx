import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

/**
 * Setup the app React Query Client
 */
export const queryClient = new QueryClient();

interface QueryProviderProps {
  children: React.ReactElement;
}

/**
 * Wrapper around the app to provide global access to the react query client.
 */
export function AppQueryProvider({ children }: QueryProviderProps) {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}
