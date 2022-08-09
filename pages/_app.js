import "../styles/globals.css"
import { MoralisProvider } from "react-moralis"
import { NotificationProvider } from "web3uikit"
import Layout from "../components/Layout"
import "react-toastify/dist/ReactToastify.css"
import { ToastContainer } from "react-toastify"
import { ApolloProvider } from "@apollo/client"
import client from "../components/graphQL/Apollo-client"

function MyApp({ Component, pageProps }) {
    return (
        <MoralisProvider initializeOnMount={false}>
            <NotificationProvider>
                <ApolloProvider client={client}>
                    <Layout>
                        <Component {...pageProps} />
                        <ToastContainer />
                    </Layout>
                </ApolloProvider>
            </NotificationProvider>
        </MoralisProvider>
    )
}
export default MyApp
