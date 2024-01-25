import React from "react";
import useAllUser from "../../../Hooks/useAllUser";
import { RiDeleteBinLine } from "react-icons/ri";

const AllEmployeeList = () => {
  const [registerUsers] = useAllUser();
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
                  <RiDeleteBinLine className="text-3xl text-white rounded bg-red p-1 hover:bg-grey cursor-pointer" />
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
