import "@/styles/globals.css";
import { ApolloProvider } from "@apollo/client";
import client from "@/graphql/apolloClient";
import ErrorBoundary from '@/components/ErrorBoundary';
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <ErrorBoundary>
        <Component {...pageProps} />
      </ErrorBoundary>
    </ApolloProvider>
  );
}

export default MyApp;