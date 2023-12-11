import "./table.css";
import { FaArrowLeft } from "react-icons/fa";
const fakeDataArray = [
  {
    id: 1,
    hostId: "123",
    name: "Vivek-singh",
    gender: "Male",
    dob: "03-05-1998",
    email: "Vivek.singh@.com",
    pinCode: 250004,
    country: "India",
    state: "Uttar pradesh",
    city: "Meerut",
    mobilenumber: 7252070137,
    profession: "IT",
    Bio: "Single",
  },
];
// console.log(fakeDataArray);
const Table = () => {
  return (
    <div className="container_body">
      <div className="host__icon">
        <div className="icon_arrow">
          <FaArrowLeft />
        </div>
        <h1 style={{ fontSize: "1.5rem", paddingLeft: "1rem" }}>
          Host Request
        </h1>
      </div>
      <table className="host_table">
        <thead>
          <th className="table_body">S.No.</th>
          <th className="table_body">Host ID</th>
          <th className="table_body">Name</th>
          <th className="table_body">Gender</th>
          <th className="table_body">Date Of Birth</th>
          <th className="table_body">Email Id</th>
          <th className="table_body">Pincode</th>
          <th className="table_body">Country</th>
          <th className="table_body">State</th>
          <th className="table_body">City</th>
          <th className="table_body">Mobile number</th>
          <th className="table_body">Profession</th>
          <th className="table_body">Bio</th>
          {/* <th className="table_body">Image/Video</th> */}
          {/* <th className="table_body">Action</th> */}
        </thead>

        <tbody>
          {fakeDataArray.map((rowData, index) => (
            <tr key={index}>
              <td className="host__table__data">{index + 1}</td>
              <td className="host__table__data">{rowData.hostId}</td>
              <td className="host__table__data">{rowData.name}</td>
              <td className="host__table__data">{rowData.gender}</td>
              <td className="host__table__data">{rowData.dob}</td>
              <td className="host__table__data">{rowData.email}</td>
              <td className="host__table__data">{rowData.pinCode}</td>
              <td className="host__table__data">{rowData.country}</td>
              <td className="host__table__data">{rowData.state}</td>
              <td className="host__table__data">{rowData.city}</td>
              <td className="host__table__data">{rowData.mobilenumber}</td>
              <td className="host__table__data">{rowData.profession}</td>
              <td className="host__table__data">{rowData.Bio}</td>
              {/* <td>{rowData.image/video}</td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
