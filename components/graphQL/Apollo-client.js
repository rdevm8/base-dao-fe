import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client"
import { setContext } from "@apollo/client/link/context"

const httpLink = createHttpLink({
    uri: "https://localhost:7260/graphql",
})

const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists

    const token = localStorage.getItem("token")

    // return the headers to the context so httpLink can read them

    return {
        headers: {
            ...headers,

            authorization: token
                ? `Bearer ${token}`
                : "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJST0xFLVNZU1RFTSIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL25hbWUiOiJTWVNURU0iLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjB4OGMyNjhmMzJEN0YxMjlhYzBEOUZCMUU1QjQ5MGQ5MDgxMGRGYTQ0NiIsImV4cCI6MTY2MDY2NTY5NCwiaXNzIjoibG9jYWxob3N0OjcyNjAiLCJhdWQiOiJBUEkifQ.QutOyXukpLl3AmjSMYmpHNtiqTkcnIPi72uqdol9IGY",
        },
    }
})

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
})

export default client
