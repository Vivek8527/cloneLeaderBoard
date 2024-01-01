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
import { Navbar } from "../../component/Navbar/Navbar";
import { PiMagnifyingGlassThin } from "react-icons/pi";
import { FaEye } from "react-icons/fa";

const Hostrejected = () => {
  const [gethostrejected, setgetHostrejected] = useState([]);
  const [isloading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [perpage, setPerPage] = useState(10);
  const [totalCount, setTotalCount] = useState(1);
  const [totalpages, setTotalPages] = useState(1);
  const [value, setValue] = useState("");

  useEffect(() => {
    fetchHostrejected();
  }, [page, perpage, value]);

  const fetchHostrejected = () => {
    axios
      .post(baseUrl + "leader/getLeaderHostRejected", {
        key: value,
        page,
        perpage,
      })
      .then((res) => {
        setgetHostrejected(res?.data?.result);
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
      <div className="search_icon">
        <PiMagnifyingGlassThin />
        <input
          onChange={(e) => setValue(e.target.value)}
          placeholder="Search"
        ></input>
      </div>

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
                  <td>{rowData?._id}</td>
                  <td>{rowData?.name}</td>
                  <td>{rowData?.dateOfBirth}</td>
                  <td>{rowData?.proffession}</td>
                  <td>{rowData?.addBio}</td>
                  <td>{rowData?.rejectedat}</td>
                  <td style={{alignItems:"-webkit-center",
                  }}> <FaEye /> </td>
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
    </>
  );
};
export default Hostrejected;
