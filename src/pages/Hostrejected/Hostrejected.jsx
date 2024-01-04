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
// import { Navbar } from "../../component/Navbar/Navbar";
import { PiMagnifyingGlassThin } from "react-icons/pi";
import { FaEye } from "react-icons/fa";
import ImagePopUpModal from "../../component/ImagePopupModal";
import { useNavigate } from "react-router-dom";

const Hostrejected = () => {

  const [gethostrejected, setgetHostrejected] = useState([]);
  const [isloading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [perpage, setPerPage] = useState(10);
  const [totalCount, setTotalCount] = useState(1);
  const [totalpages, setTotalPages] = useState(1);
  const [value, setValue] = useState("");
  const [showImage, setShowImage] = useState(false);
  const [images, setImages] = useState("");



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

  const handleImage = (images) => {
    setShowImage(true);
    console.log(images);
    setImages(images);
  };

  const handleImageClose = () => {
    setShowImage(false);
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
                  <td title={rowData._id}>
                    {rowData._id.substring(0, 7) + "..."}
                  </td>
                  <td>{rowData?.name}</td>
                  <td>{rowData?.dateOfBirth}</td>
                  <td>{rowData?.proffession}</td>
                  <td>{rowData?.addBio}</td>
                  <td>{rowData?.rejectedat}</td>
                  <td style={{ textAlign: "-webkit-center" }}>
                    {rowData?.presentationPic ? (
                      <FaEye
                        style={{ cursor: "pointer", fontSize: "16px" }}
                        onClick={() => handleImage(rowData?.presentationPic)}
                      />
                    ) : null}
                  </td>
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

        <ImagePopUpModal
          open={showImage}
          handleClose={handleImageClose}
          images={images}
        />

        {isloading && <Loading />}
      </TableContainer>
    </>
  );
};
export default Hostrejected;
