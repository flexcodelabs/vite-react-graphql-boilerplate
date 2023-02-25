import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider as Provider,
  split,
  HttpLink,
} from "@apollo/client";
import { WebSocketLink } from "@apollo/client/link/ws";
import { setContext } from "@apollo/client/link/context";
import { getMainDefinition } from "@apollo/client/utilities";

let httpLink = new HttpLink({
  uri: `${import.meta.env.VITE_API_URL}/graphql`,
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: localStorage.getItem("token")
        ? `Bearer ` + localStorage.getItem("token")
        : "",
    },
  };
});

let updatedlink = authLink.concat(httpLink);

const wsLink = new WebSocketLink({
  uri: `${import.meta.env.VITE_WSS_API_URL}/graphql`,
  options: {
    reconnect: true,
    timeout: 20000,
    lazy: true,
    connectionParams: {
      Authorization: localStorage.getItem("token")
        ? `Bearer ` + localStorage.getItem("token")
        : "",
      authorization: localStorage.getItem("token")
        ? `Bearer ` + localStorage.getItem("token")
        : "",
    },
  },
});

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  wsLink,
  updatedlink
);
const client = new ApolloClient({
  link: splitLink,
  ssrMode: true,
  cache: new InMemoryCache(),
  connectToDevTools: false,
});

const ApolloProvider = (props: any) => {
  return <Provider client={client} {...props} />;
};

export default ApolloProvider;
