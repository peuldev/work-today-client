import React from "react";
import useAllUser from "../../../Hooks/useAllUser";
import Swal from "sweetalert2";

const EmployeeList = () => {
  const [allemployees, setRegisterUser] = useAllUser();
  const employees = allemployees.filter(
    (item) => item.designation === "employee"
  );
  const handleVerified = (id) => {
    fetch(`http://localhost:5000/user/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "confirm" }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Employees Verified Successfully",
            text: "You won't be able to revert this!",
            icon: "success",
            showCancelButton: false,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Ok",
          });
          const remaining = employees.filter((item) => item._id !== id);
          const update = employees.find((item) => item._id === id);
          update.status = "confirm";
          const newRegister = [update, ...remaining];
          setRegisterUser(newRegister);
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
                    {employee.status === "confirm" ? (
                      <span>✅</span>
                    ) : (
                      <button
                        className="uppercase"
                        onClick={() => handleVerified(employee._id)}
                      >
                        ❌
                      </button>
                    )}
                  </td>
                  <td>Ac {employee.account}</td>
                  <td>$ {employee.salary}</td>
                  <td className="hover:text-red cursor-pointer">
                    View Details
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
