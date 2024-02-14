import React, { useEffect, useState } from "react";

const EmployeeProgress = () => {
  const [employeeProgress, setEmployeeProgress] = useState([]);
  useEffect(() => {
    fetch("https://work-today-server.vercel.app/work-sheet")
      .then((res) => res.json())
      .then((data) => setEmployeeProgress(data));
  }, []);
  return (
    <div>
      <h1 className="text-4xl font-semibold font-Jost py-5 text-center">
        Employee Progress Work Seet
      </h1>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead className="bg-red text-white">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Hours</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {employeeProgress.map((employeeProgres, index) => (
              <tr key={employeeProgres._id}>
                <th>{index + 1}</th>
                <td>{employeeProgres.name}</td>
                <td>{employeeProgres.email}</td>
                <td>{employeeProgres.hours} h</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployeeProgress;
