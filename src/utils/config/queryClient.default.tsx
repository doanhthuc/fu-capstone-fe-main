import {QueryClient} from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    // ! cache time must < stale time
    queries: {
      refetchOnWindowFocus: false,
      cacheTime: 60 * 60 * 1000, // 60 minutes
      staleTime: 30 * 60 * 1000, // 30 minutes
      keepPreviousData: true,
    },
  },
});

export default queryClient;
