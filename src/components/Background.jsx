import { useNavigate } from "react-router-dom";

const Background = ({ children, title, button = "Home" }) => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        backgroundColor: "#09013D",
        width: "100%",
        height: "100vh",
        padding: "2rem",
        boxSizing: "border-box",
        color: "white",
      }}
    >
      <div
        style={{
          color: "white",
          fontSize: "1.5rem",
          borderBottom: "2px solid white",
          paddingBottom: "0.8rem",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div> {title}</div>

        <div>
          <button
            onClick={() => {
              navigate("/");
            }}
            className="btn fw-bold "
            style={{ backgroundColor: "#817A7A" }}
          >
            {button}
          </button>
          <button
            onClick={() => {
              navigate("/channel/add");
            }}
            className="btn fw-bold "
            style={{ backgroundColor: "#817A7A" }}
          >
            Add Channel
          </button>
          <button
            onClick={() => {
              navigate("/Channel/report");
            }}
            className="btn fw-bold "
            style={{ backgroundColor: "#817A7A" }}
          >
            Channel Report
          </button>
          <button
            onClick={() => {
              navigate("/salary/manage");
            }}
            className="btn fw-bold "
            style={{ backgroundColor: "#817A7A" }}
          >
            Manage Salary
          </button>
          <button
            onClick={() => {
              navigate("/salary/counting");
            }}
            className="btn fw-bold"
            style={{ backgroundColor: "#817A7A" }}
          >
            Salary Counting
          </button>
          <button
            onClick={() => {
              navigate("/salary/report");
            }}
            className="btn fw-bold "
            style={{ backgroundColor: "#817A7A" }}
          >
            Salary Report
          </button>
        </div>
      </div>
      {children}
    </div>
  );
};

export default Background;
