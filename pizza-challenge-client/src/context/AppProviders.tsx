import { PropsWithChildren } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { AuthProvider } from "./authContext";

const queryClient = new QueryClient();

interface AppProvidersProps {}
function AppProviders(props: PropsWithChildren<AppProvidersProps>) {
  const { children } = props;
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>{children}</AuthProvider>
    </QueryClientProvider>
  );
}

export { AppProviders };
