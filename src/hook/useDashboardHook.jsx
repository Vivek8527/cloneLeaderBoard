import baseUrl from "../baseUrl";
import { useEffect, useState } from "react";
import axios from "../config/axios";

const useDashboardHook = () => {
  const [getactivehost, setgetActivehost] = useState(0);
  const [getInactivehost, setgetInActivehost] = useState(0);
  const [getnewrequest, setgetNewrequest] = useState(0);
  const [gettotalcoin, setgetTotalcoin] = useState(0);

  const fetchtotalcoin = async () => {
    const res = await axios.get(baseUrl + "leader/getLeaderHostEarnings");
    setgetTotalcoin(res.data.result);
  };
  const fetchnewrequest = async () => {
    const res = await axios.get(baseUrl + "leader/getLeaderCountRequest");
    setgetNewrequest(res.data.result);
  };

  const fetchactivehost = async () => {
    const res = await axios.get(baseUrl + "leader/getLeaderOnlineCount");
    setgetActivehost(res.data.result);
  };

  const fetchInactivehost = async () => {
    const res = await axios.get(baseUrl + "leader/getLeaderOfflineCount");
    setgetInActivehost(res.data.result);
  };

  useEffect(() => {
    fetchactivehost();
    fetchInactivehost();
    fetchnewrequest();
    fetchtotalcoin();
  }, []);

  return {
    getactivehost,
    getInactivehost,
    getnewrequest,
    gettotalcoin,
  };
};

export default useDashboardHook;
