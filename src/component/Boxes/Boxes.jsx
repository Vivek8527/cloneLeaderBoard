import { FaUserSecret, FaCoins, FaUsers } from "react-icons/fa";
import useDashboardHook from "../../hook/useDashboardHook";
import { Box } from "../Boxes/Box";

export const Boxes = () => {
  const { getactivehost, getInactivehost, getnewrequest, gettotalcoin } =
    useDashboardHook();
  

  return (
    <div className="color_1">
      <div className="four_boxes">
        <Box
          title="Active Host"
          icon={<FaUserSecret />}
          numbers={getactivehost}
          color="#DCC655"
        />
        <Box
          title="Inactive Host"
          icon={<FaUserSecret />}
          numbers={getInactivehost}
          color=" #F452FF"
        />
        <Box
          title="New Request Of Host"
          icon={<FaUsers />}
          numbers={getnewrequest}
          color="#F9BB6A"
        />
        <Box
          title="Total Coins"
          icon={<FaCoins />}
          numbers={gettotalcoin}
          color="#5466E9"
        />
      </div>
    </div>
  );
};
