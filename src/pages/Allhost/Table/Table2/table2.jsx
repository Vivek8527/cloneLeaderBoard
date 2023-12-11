import "./table2.css";
import { FaArrowLeft } from "react-icons/fa";
const fakeDataArray = [
  {
    id: 1,
    hostId: "123",
    name: "Vivek-singh",
    gender: "Male",
    dob: "03-05-1998",
    email: "Vivek.singh@",
    city: "Meerut",
    Phonenumber: 7252070137,
    CreatedAt: "Uttar pradesh",
    AdharNumber: 1234567890,
    StickerCoin: 50,
    VideoCoin: 70,
    TotalCoin: 120,
    Status: "Single",
  },
];
// console.log(fakeDataArray);
const Table2 = () => {
  return (
    <div className="container_body">
      <div className="host__icon1">
        <div className="icon_arrow1">
          <FaArrowLeft />
        </div>
        <h1 style={{ fontSize: "1.5rem", paddingLeft: "1rem" }}>
          Host Management
        </h1>
      </div>
      <table className="host_table1">
        <thead>
          <th className="table_body1">S.NO.</th>
          <th className="table_body1">Host ID</th>
          <th className="table_body1">Name</th>
          <th className="table_body1">Gender</th>
          <th className="table_body1">Date Of Birth</th>
          <th className="table_body1">Email Id</th>
          <th className="table_body1">City</th>
          <th className="table_body1">Phone Number</th>
          <th className="table_body1">Created At</th>
          <th className="table_body1">Adhar Number</th>
          <th className="table_body1">Sticker Coin</th>
          <th className="table_body1">Video Coin</th>
          <th className="table_body1">Total Coin</th>
          <th className="table_body1">Status</th>
          {/* <th className="table_body">Image/Video</th> */}
          {/* <th className="table_body">Action</th> */}
        </thead>

        <tbody>
          {fakeDataArray.map((rowData, index) => (
            <tr key={index}>
              <td className="host__table__data1">{index + 1}</td>
              <td className="host__table__data1">{rowData.hostId}</td>
              <td className="host__table__data1">{rowData.name}</td>
              <td className="host__table__data1">{rowData.gender}</td>
              <td className="host__table__data1">{rowData.dob}</td>
              <td className="host__table__data1">{rowData.email}</td>
              <td className="host__table__data1">{rowData.city}</td>
              <td className="host__table__data1">{rowData.Phonenumber}</td>
              <td className="host__table__data1">{rowData.CreatedAt}</td>
              <td className="host__table__data1">{rowData.AdharNumber}</td>
              <td className="host__table__data1">{rowData.StickerCoin}</td>
              <td className="host__table__data1">{rowData.VideoCoin}</td>
              <td className="host__table__data1">{rowData.TotalCoin}</td>
              <td className="host__table__data1">{rowData.Status}</td>
              {/* <td>{rowData.image/video}</td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Table2;
