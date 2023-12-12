import { FaArrowLeft } from "react-icons/fa";
import TableContainer from "../../component/Tablecontainer/TableContainer";
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
const Acceptedhost = () => {
  return (
    <TableContainer title={"Accepted Host"}>
      
      <table className="host_table">
        <thead>
          <th className="table_body">S.NO.</th>
          <th className="table_body">ID</th>
          <th className="table_body">Host ID</th>
          <th className="table_body">Name</th>
          <th className="table_body">Email ID</th>
          <th className="table_body">Phone number</th>
          <th className="table_body">Accepted At</th>
          <th className="table_body">Charge min</th>
          <th className="table_body">Stickers Coin</th>
          <th className="table_body">Video Coins</th>
          <th className="table_body">Gift coins</th>
          <th className="table_body">Call Coin</th>
          <th className="table_body">Total Earning</th>
          <th className="table_body">Leader</th>
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
              <td className="host__table__data">{rowData.city}</td>
              <td className="host__table__data">{rowData.Phonenumber}</td>
              <td className="host__table__data">{rowData.CreatedAt}</td>
              <td className="host__table__data">{rowData.AdharNumber}</td>
              <td className="host__table__data">{rowData.StickerCoin}</td>
              <td className="host__table__data">{rowData.VideoCoin}</td>
              <td className="host__table__data">{rowData.TotalCoin}</td>
              <td className="host__table__data">{rowData.Status}</td>
              {/* <td>{rowData.image/video}</td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </TableContainer>
  );
};
export default Acceptedhost;
