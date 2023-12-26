/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { FaArrowLeft } from "react-icons/fa";
import { useEffect, useState } from "react";
import baseUrl from "../../baseUrl";
import TableContainer from "../../component/Tablecontainer/TableContainer";
import axios from "../../config/axios";
import Loading from "../../component/Loader/loading";
import Pagination from "../Pagination/pagination";
import { GrCursor } from "react-icons/gr";

const Acceptedhost = () => {
  const [getacceptedhost, setgetAcceptedhost] = useState([]);
  const [isloading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const [totalCount, setTotalCount] = useState(1);
  // const [currentPage, setCurrentPage] = useState("");
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchacceptedhost();
  }, [page, perPage]);

  const fetchacceptedhost = () => {
    axios
      .post(baseUrl + "leader/getLeaderHostlistAccepted", {
        page,
        perPage,
      })

      .then((res) => {
        setgetAcceptedhost(res.data.result);
        setTotalCount(res?.data?.totalCount);
        setTotalPages(res?.data?.totalPages);
        console.log(res);
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <>
      <TableContainer title={"Host Accepted"}>
        <table className="host_table">
          <thead>
            <th>S.NO.</th>
            <th>Host ID</th>
            <th>Name</th>
            <th>Created At</th>
            <th>Date Of Birth</th>
            <th>Profession</th>
            <th>Sticker Coin</th>
            <th>Video Coin</th>
            <th>Gift coin</th>
            <th>Audio Call Coin</th>
            <th>Premium Post Coins</th>
            <th>Total Earning</th>
          </thead>

          <tbody>
            {getacceptedhost && getacceptedhost?.length > 0 ? (
              getacceptedhost?.map((rowData, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td title={rowData._id}>
                    {rowData._id.substring(0, 7) + "..."}
                  </td>
                  <td>{rowData.name}</td>
                  <td>{rowData.createdAt.substring(0, 10)}</td>
                  <td>{rowData.dateOfBirth}</td>
                  <td>{rowData.proffession}</td>
                  <td>{rowData.stickerCoins}</td>
                  <td>{rowData.videoUserCoins}</td>
                  <td>{rowData.giftCoins}</td>
                  <td>{rowData.audioCoins}</td>
                  <td>{rowData.hostPostCoins}</td>
                  <td>{rowData.host_balance}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="12"> NO DATA FOUND</td>
              </tr>
            )}
          </tbody>
        </table>

        <Pagination
          page={page}
          setPage={setPage}
          perPage={perPage}
          setPerPage={setPerPage}
          totalCount={totalCount}
          totalPages={totalPages}
          options={[5, 10, 15, 20]}
        />
        {isloading && <Loading />}
      </TableContainer>
    </>
  );
};
export default Acceptedhost;
