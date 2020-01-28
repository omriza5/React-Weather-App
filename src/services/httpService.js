import axios from "axios";
import { toast } from "react-toastify";
axios.interceptors.response.use(null, error => {
  toast(
    "We Have Exceeded The LIMIT of 50 Calls To The Server For Today, Try Again Tomorrow..."
  );
});

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete
};
