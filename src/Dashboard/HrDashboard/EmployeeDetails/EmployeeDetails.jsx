import React from "react";
import { useLoaderData } from "react-router-dom";

const EmployeeDetails = () => {
  const detailsEmployee = useLoaderData();
  console.log(detailsEmployee);
  const { image, name, designation, salary, account } = detailsEmployee;
  return (
    <div>
      <h1 className="text-4xl font-semibold font-Jost py-5 text-center">
        Employee Details
      </h1>
      <div className="py-20">
        <div className="flex">
          <div className="w-1/5">
            <img className="rounded-lg" src={image} alt="" />
          </div>
          <div className="ms-12 w-1/2 space-y-2">
            <h1 className="text-black  text-2xl font-medium">
              Employee Activities
            </h1>
            <h1>Name: {name}</h1>
            <h1>Designation: {designation}</h1>
            <h1>Salary: {salary}</h1>
            <h1>Account: {account}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDetails;
