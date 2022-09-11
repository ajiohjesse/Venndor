import "../styles/globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Layout from "../components/Layout";
import { Toaster } from "react-hot-toast";
import Head from "next/head";
import { AuthContextProvider } from "../context/AuthContext";

import { ApolloProvider } from "@apollo/client";
import client from "../apollo-client";

function MyApp({ Component, pageProps }) {
  return (
    <AuthContextProvider>
      <Head>
        <title>Venndor - The Online Marketplace</title>
      </Head>
      <Layout>
        <Toaster />
        <ApolloProvider client={client}>
          <Component {...pageProps} />
        </ApolloProvider>
      </Layout>
    </AuthContextProvider>
  );
}

export default MyApp;
