import "../styles/globals.css"
import { MoralisProvider } from "react-moralis"
import { NotificationProvider } from "web3uikit"
import Layout from "../components/Layout"
import "react-toastify/dist/ReactToastify.css"
import { ToastContainer } from "react-toastify"

function MyApp({ Component, pageProps }) {
    return (
        <MoralisProvider initializeOnMount={false}>
            <NotificationProvider>
                <Layout>
                    <Component {...pageProps} />
                    <ToastContainer />
                </Layout>
            </NotificationProvider>
        </MoralisProvider>
    )
}
export default MyApp
