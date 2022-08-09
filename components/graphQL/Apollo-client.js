import { ApolloClient, InMemoryCache } from "@apollo/client"

const client = new ApolloClient({
    uri: "https://localhost:7260/graphql",
    cache: new InMemoryCache(),
})

export default client
