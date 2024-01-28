import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useHr = () => {
  const { user, loding } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: isHr, isPending: isHrLoding } = useQuery({
    queryKey: [user?.email, "is hr"],
    enabled: !loding,
    queryFn: async () => {
      const res = await axiosSecure.get(`/user/hr/${user.email}`);

      return res.data?.hr;
    },
  });
  return [isHr, isHrLoding];
};

export default useHr;
