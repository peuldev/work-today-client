import React from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const EmployeeList = () => {
  const axiosPublic = useAxiosPublic();
  const { data: employees = [], refetch } = useQuery({
    queryKey: ["employee"],
    queryFn: async () => {
      const res = await axiosPublic.get("/employee");
      return res.data;
    },
  });
  const handleVerified = (user) => {
    axiosPublic.patch(`/employee/${user._id}`).then((res) => {
      if (res.data.modifiedCount > 0) {
        refetch();
        Swal.fire({
          position: "center",
          icon: "success",
          title: `${user.name} new employee verified`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };
  return (
    <div>
      <h1 className="text-4xl font-semibold font-Jost py-5 text-center">
        Employee List {employees.length}
      </h1>
      <div>
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            {/* head */}
            <thead className="bg-red text-white">
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Verified</th>
                <th>Bank Account</th>
                <th>Salary</th>
                <th>Details</th>
                <th>Payment</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {employees.map((employee, index) => (
                <tr key={employee._id}>
                  <th>{index + 1}</th>
                  <td>{employee.name}</td>
                  <td>{employee.email}</td>
                  <td>
                    {employee.verified === "yes" ? (
                      <span>✅</span>
                    ) : (
                      <button
                        className="uppercase"
                        onClick={() => handleVerified(employee)}
                      >
                        ❌
                      </button>
                    )}
                  </td>
                  <td>Ac {employee.account}</td>
                  <td>$ {employee.salary}</td>
                  <td className="hover:text-red cursor-pointer">
                    <Link to={`details/${employee._id}`}>View Details</Link>
                  </td>
                  <td className="hover:text-red cursor-pointer">Pay</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default EmployeeList;
