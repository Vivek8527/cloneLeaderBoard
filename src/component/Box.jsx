import { CustomProgressBar } from "./CustomProgressBar";

export const Box = ({ title, icon, numbers, color }) => {
  return (
    <div
      className="box"
      style={{
        border: `1px solid ${color}`,
        boxShadow: `1px 1px 5px ${color}`,
      }}
    >
      <p className="box_title">{title}</p>
      <div className="box_numbers">
        <span style={{ fontSize: "1.8rem" }}>{icon}</span>
        <p>{numbers}</p>
      </div>
      <div className="box_progressbar">
        <p style={{ fontSize: "12px" }}>50%</p>
        <CustomProgressBar color={color} value={50} max={100} />
      </div>
    </div>
  );
};
