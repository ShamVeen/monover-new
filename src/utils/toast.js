import { toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

const showToast = (type, message) => {
    const config = {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    }

    if (type === "error") {
        toast.error(message, config)
    } else {
        toast.success(message, config)
    }
    return toast
}

export default showToast