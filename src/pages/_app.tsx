import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { AppProps } from "next/app";
import { Header } from "@/app/layout";
import { Main } from "@/app/module";
import "bootstrap/dist/css/bootstrap.css";
import "@/app/style/_fonts.css";
import "@/app/style/index.css";

// for clientside and save in cache via Apollo
// const client = new ApolloClient({
//   uri: process.env.NEXT_PUBLIC_BASE_URL,
//   cache: new InMemoryCache(),
// });

function App({ Component, pageProps }: AppProps) {
  return (
    // <ApolloProvider client={client}>
    <>
      <Header />
      <Main>
        <Component {...pageProps} />
      </Main>
    </>
    // </ApolloProvider>
  );
}

export default App;
