import axios from "axios";
import { toast } from "react-hot-toast";
import config from "@/config";

// use this to interact with our own API (/app/api folder) from the front-end side
// See https://shipfa.st/docs/tutorials/api-call
const apiClient = axios.create({
    baseURL: "/api",
});

apiClient.interceptors.response.use(
    function(response) {
        return response.data;
    },
    function(error) {
        let message = "";

        if (error.response?.status === 401) {
            // User not auth, ask to re login
            toast.error("Please login");

            // Sends the user to the login page after 3 seconds (to prevent overwriting the toast)
            setTimeout(() => {
                window.location.href = config.auth.loginUrl;
            }, 3000);

            return Promise.reject(error);
        } else if (error.response?.status === 403) {
            // User not authorized, must subscribe/purchase/pick a plan
            message = "Pick a plan to use this feature";
        } else {
            message =
                error?.response?.data?.error || error.message || error.toString();
        }

        error.message =
            typeof message === "string" ? message : JSON.stringify(message);

        console.error(error.message);

        // Automatically display errors to the user
        if (error.message) {
            toast.error(error.message);
        } else {
            toast.error("Something went wrong...");
        }
        return Promise.reject(error);
    }
);

export default apiClient;
