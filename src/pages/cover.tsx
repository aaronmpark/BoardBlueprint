import { useNavigate } from "react-router-dom";

const Cover = () => {
  const navigate = useNavigate();

  return (
    <div className="cover-page">
      {/* Your cover content */}
      <button className="btn btn-primary" onClick={() => navigate("/home")}>
        Enter Site
      </button>
    </div>
  );
};

export default Cover;
