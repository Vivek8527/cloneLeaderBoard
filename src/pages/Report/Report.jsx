/* eslint-disable no-unused-vars */
import TableContainer from "../../component/Tablecontainer/TableContainer";
import axios from "../../config/axios";
import { useEffect, useState } from "react";
import { PiMagnifyingGlassThin } from "react-icons/pi";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { MenuItem, Select } from "@mui/material";
import "./Report.css";
import baseUrl from "../../baseUrl";
import Loading from "../../component/Loader/loading";
import Pagination from "../Pagination/pagination";

const Report = () => {
  const [getreport, setgetReport] = useState([]);
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  const [isloading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [perpage, setPerPage] = useState(10);
  const [totalcount, setTotalCount] = useState(1);
  const [totalpages, setTotalPages] = useState(1);
  const [selected, setSelected] = useState(null);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const selectionChangeHandler = (event) => {
    const selectedValue = event.target.value;
    setSelected(selectedValue);

    switch (selectedValue) {
      case 1:
        axios
          .post(baseUrl + "leader/currentWeekHost", {})
          .then((res) => {
            console.log(res);
            setgetReport(res?.data?.result);
          })
          .catch((err) => {
            console.log(err);
            setError(true);
          })
          .finally(() => {
            setIsLoading(false);
          });
        break;

      case 2:
        axios
          .post(baseUrl + "leader/lastWeekHost", {})
          .then((res) => {
            console.log(res);
            setgetReport(res?.data?.result);
          })
          .catch((err) => {
            console.log(err);
            setError(true);
          })
          .finally(() => {
            setIsLoading(false);
          });
        break;

      case 3:
        break;

      default:
        break;
    }
  };

  const fetchCustomDateRangeReport = () => {
    axios
      .post(baseUrl + "leader/custumDateHost", {
        startDate: startDate,
        endDate: endDate,
      })
      .then((res) => {
        console.log(res);
        setgetReport(res?.data?.result);
      })
      .catch((err) => {
        console.log(err);
        setError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchReport();
  }, []);

  const fetchReport = () => {
    axios
      .post(baseUrl + "", {})
      .then((res) => {
        console.log(res);
        setgetReport(res?.data?.result);
      })
      .catch((err) => {
        console.log(err);
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

      <TableContainer title={"Report"}>
        <div className="Report_dropdown">
          <Select
            value={selected ? selected : 0}
            onChange={selectionChangeHandler}
            className="Reoprt_dropdown_select"
          >
            <MenuItem value={0}>Choose Option</MenuItem>
            <MenuItem value={1}>Current Week</MenuItem>
            <MenuItem value={2}>Last Week</MenuItem>
            <MenuItem value={3}>Customize</MenuItem>
          </Select>
        </div>

        {selected === 3 && (
          <div className="calendar-container">
            <div className="date-picker-container">
              <label>Start Date:</label>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                selectsStart
                startDate={startDate}
                endDate={endDate}
                dateFormat="yyyy-MM-dd"
                className="date-picker"
              />
            </div>
            <div className="date-picker-container">
              <label>End Date:</label>
              <DatePicker
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                selectsEnd
                startDate={startDate}
                endDate={endDate}
                minDate={startDate}
                dateFormat={"yyy-MM-dd"}
                className="date_picker"
              />
            </div>
            <button onClick={fetchCustomDateRangeReport}>Submit</button>
          </div>
        )}

        <table className="host_table">
          <thead>
            <th>S.No</th>
            <th>Host ID</th>
            <th>Name</th>
            <th>Created At</th>
            <th>Sticker Coin</th>
            <th>Video Coin</th>
            <th>Gift Coin</th>
            <th>Audio Call Coins</th>
            <th>Premium Post</th>
            <th>Total Coins</th>
          </thead>

          <tbody>
            {getreport && getreport?.length > 0 ? (
              getreport?.map((rowData, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{rowData?.Name}</td>
                  <td>{rowData?.CreatedAt}</td>
                  <td>{rowData?.StickeraCoin}</td>
                  <td>{rowData?.VideoCoin}</td>
                  <td>{rowData?.GiftCoin}</td>
                  <td>{rowData?.AudioCallCoin}</td>
                  <td>{rowData?.PremiumPost}</td>
                  <td>{rowData?.TotalCoin}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="9">NO DATA FOUND</td>
              </tr>
            )}
          </tbody>
        </table>
        <Pagination
          page={page}
          setPage={setPage}
          perPage={perpage}
          setPerPage={setPerPage}
          totalCount={totalcount}
          totalPages={totalpages}
          options={[1, 2, 5, 10]}
        />
        {isloading && <Loading />}
      </TableContainer>
    </>
  );
};

export default Report;
