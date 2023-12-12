import TableContainer from "../../component/Tablecontainer/TableContainer";

const fakeDataArray = [
  {
    id: 1,
    hostId: "123",
    name: "Vivek-singh",
    mobilenumber: "Male",
    EmailId: "03-05-1998",
    Charge: 20 / "min",
    Videocall: 30,
    Stickers: "Meerut",
    audioCall: 0,
    Gifts: 20,
    TotalEarning: 0,
    StickerCoin: 50,
    VideoCoin: 70,
    TotalCoin: 120,
    Status: "Single",
  },
];
// console.log(fakeDataArray);
const HostEarning = () => {
  return (
    <TableContainer title={"Host Earning"}>
      <table className="host_table">
        <thead>
          <th className="table_body">S.NO.</th>
          <th className="table_body">Host ID</th>
          <th className="table_body">Name</th>
          <th className="table_body">Mobile Number</th>
          <th className="table_body">Email Id</th>
          <th className="table_body">Charge/min</th>
          <th className="table_body">Video Call</th>
          <th className="table_body">Stickers</th>
          <th className="table_body">Audio Call</th>
          <th className="table_body">Gifts</th>
          <th className="table_body">Total Earning</th>
          {/* <th className="table_body">Image/Video</th> */}
          {/* <th className="table_body">Action</th> */}
        </thead>

        <tbody>
          {fakeDataArray.map((rowData, index) => (
            <tr key={index}>
              <td className="host__table__data">{index + 1}</td>
              <td className="host__table__data">{rowData.hostId}</td>
              <td className="host__table__data">{rowData.name}</td>
              <td className="host__table__data">{rowData.mobilenumber}</td>
              <td className="host__table__data">{rowData.EmailId}</td>
              <td className="host__table__data">{rowData.Charge}</td>
              <td className="host__table__data">{rowData.Videocall}</td>
              <td className="host__table__data">{rowData.Stickers}</td>
              <td className="host__table__data">{rowData.audioCall}</td>
              <td className="host__table__data">{rowData.Gifts}</td>
              <td className="host__table__data">{rowData.TotalEarning}</td>
              {/* <td>{rowData.image/video}</td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </TableContainer>
  );
};
export default HostEarning;
