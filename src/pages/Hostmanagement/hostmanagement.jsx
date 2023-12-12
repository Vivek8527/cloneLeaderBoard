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
    // Status: "Single",
  },
];
// console.log(fakeDataArray);
const Hostmanagement = () => {
  return (
    <TableContainer title={"Host Management"}>
      <table className="host_table">
        <thead>
          <th className="table_body">S.NO.</th>
          <th className="table_body">Host ID</th>
          <th className="table_body">Name</th>
          <th className="table_body">Email Id</th>
          <th className="table_body">Phone Number</th>
          <th className="table_body">Accepted At</th>
          <th className="table_body">Charge min</th>
          <th className="table_body">Sticker Coins</th>
          <th className="table_body">Video Coins</th>
          <th className="table_body">Gifts Coin</th>
          <th className="table_body">Call Coins</th>
          <th className="table_body">Total Earning</th>
          <th className="table_body">Leader</th>
          {/* <th className="table_body">Image/Video</th> */}
          {/* <th className="table_body">Action</th> */}
        </thead>

        <tbody>
          {fakeDataArray.map((rowData, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{rowData.hostId}</td>
              <td>{rowData.name}</td>
              <td>{rowData.gender}</td>
              <td>{rowData.dob}</td>
              <td>{rowData.email}</td>
              <td>{rowData.city}</td>
              <td>{rowData.Phonenumber}</td>
              <td>{rowData.CreatedAt}</td>
              <td>{rowData.AdharNumber}</td>
              <td>{rowData.StickerCoin}</td>
              <td>{rowData.VideoCoin}</td>
              <td>{rowData.TotalCoin}</td>
              <td>{rowData.Status}</td>
              {/* <td>{rowData.image/video}</td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </TableContainer>
  );
};
export default Hostmanagement;
