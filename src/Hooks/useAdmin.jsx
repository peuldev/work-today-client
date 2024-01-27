import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useAdmin = () => {
  const { user, loding } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: isAdmin, isPending: isAdminLoding } = useQuery({
    queryKey: [user?.email, "is admin"],
    enabled: !loding,
    queryFn: async () => {
      const res = await axiosSecure.get(`/user/admin/${user.email}`);
      // console.log(res.data);
      return res.data?.admin;
    },
  });
  return [isAdmin, isAdminLoding];
};

export default useAdmin;
