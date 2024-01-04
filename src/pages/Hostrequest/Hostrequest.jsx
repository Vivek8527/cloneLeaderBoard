/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { useEffect, useState } from "react";
import TableContainer from "../../component/Tablecontainer/TableContainer";
import axios from "../../config/axios";
import baseUrl from "../../baseUrl";
import Loading from "../../component/Loader/loading";
import { PiAlignBottom, PiMagnifyingGlassThin } from "react-icons/pi";
import Pagination from "../Pagination/pagination";
import { FaEye } from "react-icons/fa";
import ImagePopUpModal from "../../component/ImagePopupModal";

const Hostrequest = () => {
  const [getHostRequest, setgetHostRequest] = useState(null);
  const [isloading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const [totalcount, setTotalCount] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [value, setValue] = useState("");
  const [showImage , setShowImage] = useState(false);
  const [ images ,SetImages] = useState (false);

  useEffect(() => {
    fetchHostRequest();
  }, [page, perPage, value]);

  const fetchHostRequest = () => {
    axios
      .post(baseUrl + "leader/getLeaderHostPending", {
        key: value,
        page,
        perPage,
      })

      .then((res) => {
        setgetHostRequest(res.data.result);
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

  const handleImage = () => {
    setShowImage(true);
    console.log(images)
    SetImages(images);
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
      <TableContainer title={"Host Request"}>
        <table className="host_table">
          <thead>
            <th>S.NO</th>
            <th>Host ID</th>
            <th>Name</th>
            <th>Gender</th>
            <th>Date of birth</th>
            <th>Profession</th>
            <th>Bio</th>
            <th>Image/Video</th>
          </thead>

          <tbody>
            {getHostRequest && getHostRequest?.length > 0 ? (
              getHostRequest?.map((rowData, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td title={rowData._id}>
                  {rowData._id.substring(0, 7) + "..."}
                  </td>
                  <td>{rowData?.name}</td>
                  <td>{rowData?.gender}</td>
                  <td>{rowData?.dateOfBirth}</td>
                  <td>{rowData?.proffession}</td>
                  <td>{rowData?.addBio}</td>
                  <td
                    style={{
                      textAlign: "-webkit-center",
                    }}
                  >
                    <FaEye
                    style={{cursor:"pointer",fontSize:"16px"}}
                      onClick={() => handleImage(rowData?.presentationPic)}
                    />
                    
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
          perPage={perPage}
          setPerPage={setPerPage}
          totalCount={totalcount}
          totalPages={totalPages}
          options={[1, 2, 5, 10]}
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
export default Hostrequest;
