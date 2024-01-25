import React from "react";
import useAllUser from "../../../Hooks/useAllUser";
import { RiDeleteBinLine } from "react-icons/ri";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const AllEmployeeList = () => {
  const [registerUsers, setRegisterUser] = useAllUser();
  const axiosSecure = useAxiosSecure();
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
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
        axiosSecure.delete(`/user/${id}`).then((res) => {
          console.log(res);
          if (res.data.deletedCount) {
            const remaining = registerUsers.filter((item) => item._id !== id);
            setRegisterUser(remaining);
          }
        });
      }
    });
  };
  return (
    <div>
      <h1 className="text-4xl font-semibold font-Jost py-5 text-center">
        All Employee List {registerUsers.length}
      </h1>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead className="bg-red text-white">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Designation</th>
              <th>HR</th>
              <th>Fire</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {registerUsers.map((registerUser, index) => (
              <tr key={registerUser._id} className="uppercase">
                <th>{index + 1}</th>
                <td>{registerUser.name}</td>
                <td>{registerUser.designation}</td>
                <td>Make HR</td>
                <td>Fire</td>
                <td>
                  <RiDeleteBinLine
                    onClick={() => handleDelete(registerUser._id)}
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