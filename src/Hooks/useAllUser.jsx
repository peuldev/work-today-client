import React, { useEffect, useState } from "react";

const useAllUser = () => {
  const [registerUser, setRegisterUser] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/user")
      .then((res) => res.json())
      .then((data) => {
        setRegisterUser(data);
      });
  }, []);
  return [registerUser, setRegisterUser];
};

export default useAllUser;
