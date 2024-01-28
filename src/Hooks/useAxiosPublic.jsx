import axios from "axios";

export const axiosPublic = axios.create({
  baseURL: "https://worktoday.vercel.app",
});
const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
