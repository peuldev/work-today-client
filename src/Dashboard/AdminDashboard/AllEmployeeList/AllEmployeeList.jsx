import React from "react";
import useAllUser from "../../../Hooks/useAllUser";
import { RiDeleteBinLine } from "react-icons/ri";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const AllEmployeeList = () => {
  const [registerUsers, setRegisterUser] = useAllUser();
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
          console.log(res);
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

  const handleFire = (id) => {
    fetch(`http://localhost:5000/user/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "confirm" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Fired Successfully",
            text: "You won't be able to revert this!",
            icon: "success",
            showCancelButton: false,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Ok",
          });
          const remaining = registerUsers.filter((item) => item._id !== id);
          const update = registerUsers.find((item) => item._id === id);
          update.status = "confirm";
          const newRegister = [update, ...remaining];
          setRegisterUser(newRegister);
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
              <th>HR</th>
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
                <td>Make HR</td>
                <td>
                  {user.status === "confirm" ? (
                    <span>fired</span>
                  ) : (
                    <button
                      className="uppercase"
                      onClick={() => handleFire(user._id)}
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
