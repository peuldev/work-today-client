import React, { useEffect, useState } from "react";

const useAllUser = () => {
  const [registerUser, setRegisterUser] = useState([]);
  useEffect(() => {
    fetch("https://worktoday.vercel.app/user")
      .then((res) => res.json())
      .then((data) => {
        setRegisterUser(data);
      });
  }, []);
  return [registerUser, setRegisterUser];
};

export default useAllUser;
