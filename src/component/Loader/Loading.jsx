import "./loading.css";
import { BiLoaderCircle } from "react-icons/bi";

const Loading = () => {
  return (
    <div className="loader_container">
      <p className="loader__"><BiLoaderCircle /></p>
    </div>
  );
};

export default Loading;
