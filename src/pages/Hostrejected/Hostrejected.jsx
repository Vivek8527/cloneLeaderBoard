/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import axios from "../../config/axios";
import { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import baseUrl from "../../baseUrl";
import TableContainer from "../../component/Tablecontainer/TableContainer";
import Loading from "../../component/Loader/loading";
import Pagination from "../Pagination/pagination";
// import { Pagination } from "@mui/material";

const Hostrejected = () => {
  const [gethostrejected, setgetHostrejected] = useState([]);
  const [isloading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [page ,setPage] = useState(1);
  const [perpage ,setPerPage] = useState(10);
  const [totalCount ,setTotalCount] = useState(1);
  const [totalpages ,setTotalPages] = useState(1);


 
  useEffect(() => {
    fetchHostrejected();
  }, [page ,perpage]);

  const fetchHostrejected = () => {
 
   
    axios
      .post(baseUrl + "leader/getLeaderHostRejected", {
        page,
        perpage,
      })
      .then((res) => {
        setgetHostrejected(res?.data?.result);
        setTotalCount(res?.data?.totalCount);
        setTotalPages(res?.data?.totalPages)
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
    <TableContainer title={"Host Rejected"}>
      <table className="host_table">
        <thead>
          <th>S.No.</th>
          <th>Host ID</th>
          <th>Name</th>
          <th>Date of Birth</th>
          <th>Profession</th>
          <th>Bio</th>
          <th>Rejected At</th>
          <th>Image/Video</th>
        </thead>

        <tbody>
          {gethostrejected && gethostrejected?.length > 0 ? (
            gethostrejected?.map((rowData, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{rowData?.hostId}</td>
                <td>{rowData?.name}</td>
                <td>{rowData?.dateofbirth}</td>
                <td>{rowData?.profession}</td>
                <td>{rowData?.Bio}</td>
                <td>{rowData?.rejectedat}</td>
                <td>{rowData?.imagevideo}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="8">NO DATA FOUND</td>
            </tr>
          )}
        </tbody>
      </table>
      <Pagination
          page={page}
          setPage={setPage}
          perPage={perpage}
          setPerPage={setPerPage}
          totalCount={totalCount}
          totalPages={totalpages}
          options={[1, 2, 3, 10]}
        />
      
      {isloading && <Loading />}
    </TableContainer>
  );
};
export default Hostrejected;
