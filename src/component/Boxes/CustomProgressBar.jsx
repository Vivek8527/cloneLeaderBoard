// eslint-disable-next-line react/prop-types
export const CustomProgressBar = ({ color, value, max }) => {
  const progressStyle = {
    width: `${(value / max) * 100}%`,
    backgroundColor: color,
  };

  return (
    <div className="custom-progress-bar">
      <div className="progress-bar" style={progressStyle}></div>
    </div>
  );
};
