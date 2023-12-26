/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import baseUrl from "../baseUrl";
import axios from "axios";
import userStore from "../store/userstore";

const userHook = () => {
  const setUser = userStore((state) => state.setUser);
  const user = userStore((state) => state.user);

  const fetchUser = () => {
    axios.get(baseUrl + "leader/showProfileLeader").then((res) => {
      console.log(res.data.result);
      setUser(res.data.result);
    });
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return { user };
};

export default userHook;
