import { RiDeleteBinLine } from "react-icons/ri";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { FaUser } from "react-icons/fa";

const AllEmployeeList = () => {
  const axiosSecure = useAxiosSecure();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const res = await axiosSecure.get("/user");
      return res.data;
    },
  });
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/user/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  const handleFire = (user) => {
    axiosSecure.patch(`/user/${user._id}`).then((res) => {
      if (res.data.modifiedCount > 0) {
        refetch();
        Swal.fire({
          position: "center",
          icon: "success",
          title: `${user.name} is new admin add`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  const handleMakeAdmin = (user) => {
    axiosSecure.patch(`/user/admin/${user._id}`).then((res) => {
      if (res.data.modifiedCount > 0) {
        refetch();
        Swal.fire({
          position: "center",
          icon: "success",
          title: `${user.name} is new admin add`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };
  const handleMakeHr = (user) => {
    axiosSecure.patch(`/user/hr/${user._id}`).then((res) => {
      if (res.data.modifiedCount > 0) {
        refetch();
        Swal.fire({
          position: "center",
          icon: "success",
          title: `${user.name} is new hr add`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };
  return (
    <div>
      <h1 className="text-4xl font-semibold font-Jost py-5 text-center">
        All Employee List {users.length}
      </h1>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead className="bg-red text-white">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Designation</th>
              <th>Admin Role</th>
              <th>Hr Role</th>
              <th>Fire</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {users.map((user, index) => (
              <tr key={user._id} className="uppercase">
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.designation}</td>
                <td>
                  {user.role === "admin" ? (
                    "Admin"
                  ) : (
                    <FaUser
                      onClick={() => handleMakeAdmin(user)}
                      className="text-red text-2xl hover:text-grey cursor-pointer"
                    ></FaUser>
                  )}
                </td>
                <td>
                  {user.role === "hr" ? (
                    "Hr"
                  ) : (
                    <FaUser
                      onClick={() => handleMakeHr(user)}
                      className="text-red text-2xl hover:text-grey cursor-pointer"
                    ></FaUser>
                  )}
                </td>
                <td>
                  {user.status === "fired" ? (
                    "Fired"
                  ) : (
                    <button
                      className="uppercase"
                      onClick={() => handleFire(user)}
                    >
                      fire
                    </button>
                  )}
                </td>
                <td>
                  <RiDeleteBinLine
                    onClick={() => handleDelete(user._id)}
                    className="text-3xl text-white rounded bg-red p-1 hover:bg-grey cursor-pointer"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllEmployeeList;
