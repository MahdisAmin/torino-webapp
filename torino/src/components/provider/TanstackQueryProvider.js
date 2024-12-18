"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// eslint-disable-next-line
function TanstackQueryProvider({ children }) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: 0,
        refetchOnWindowFocus:false,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}

export default TanstackQueryProvider;
