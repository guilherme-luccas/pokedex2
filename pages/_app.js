import "../styles/globals.css";
import { ApolloProvider } from "@apollo/client";
import client from "../apollo-client";
import { CheckBoxProvider } from "../src/CheckboxContext";

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <CheckBoxProvider>
        <Component {...pageProps} />
      </CheckBoxProvider>
    </ApolloProvider>
  );
}

export default MyApp;
