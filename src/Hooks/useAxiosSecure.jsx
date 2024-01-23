import axios from "axios";

export const axiosSecure = axios.create({
  baseURL: "https://worktoday.vercel.app",
});
const useAxiosSecure = () => {
  return axiosSecure;
};

export default useAxiosSecure;
