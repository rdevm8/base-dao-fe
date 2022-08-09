import { toast, Slide } from "react-toastify"

const notifArgs = {
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

export const NotifSuccess = (msg) => {
    return () => toast.success(msg, notifArgs)
}

export const NotifError = (msg) => {
    toast.error(msg, notifArgs)
}

export const NotifLoading = (msg) => {
    // notifArgs.hideProgressBar = true
    // notifArgs.closeOnClick = false
    // notifArgs.draggable = false
    // notifArgs.autoClose = false
    // toast.warning(msg, notifArgs)
    toast.loading("Please wait...")
}
