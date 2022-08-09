import { useApolloClient } from "@apollo/client"
import { Slide, toast } from "react-toastify"
import { Messages } from "../../constants/Messages"
import { RiErrorWarningFill, RiCheckDoubleFill } from "react-icons/ri"
import { FaHourglass } from "react-icons/fa"

const toastOptions = {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    transition: Slide,
}

export function GraphQlService(operation) {
    const client = useApolloClient()
    const serviceCall = client.query({
        query: operation,
    })

    return toast.promise(serviceCall, {
        pending: {
            render() {
                return (
                    <div className="flex items-center text-content align-middle">
                        <span className="">{Messages.loading}</span>
                    </div>
                )
            },
            icon: <FaHourglass />,
            theme: toastOptions.theme,
            transition: toastOptions.transition,
        },
        success: {
            render({ data }) {
                return (
                    <div className="flex items-center text-content align-middle">
                        <span className="">{Messages.success}</span>
                    </div>
                )
            },
            icon: <RiCheckDoubleFill className=" h-5 w-5" />,
            theme: toastOptions.theme,
            transition: toastOptions.transition,
        },
        error: {
            render({ data }) {
                return (
                    <div className="flex items-center text-content align-middle">
                        <span className="">{Messages.error}</span>
                    </div>
                )
            },
            icon: <RiErrorWarningFill className=" h-5 w-5" />,
            theme: toastOptions.theme,
            transition: toastOptions.transition,
        },
    })
}
