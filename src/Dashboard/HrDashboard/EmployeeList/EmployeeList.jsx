import React from "react";
import useAllUser from "../../../Hooks/useAllUser";

const EmployeeList = () => {
  const [allemployees] = useAllUser();
  const employees = allemployees.filter(
    (item) => item.designation === "employee"
  );
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
                  <td>Yes</td>
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
