import Background from "../components/Background";

const AddChanneling = () => {
  return (
    <div>
      <div>
        <Background title={"Add Channeling Details"}>
          <form action="" style={{ paddingTop: "2rem" }}>
            <div style={{ display: "flex" }}>
              <div style={{ width: "15%" }}>
                <label htmlFor="">Room Type</label>
              </div>
              <div>
                <span style={{ paddingRight: "10rem" }}>
                  <input type={"radio"} name="roomtype"/>
                  <span style={{ paddingLeft: "0.5rem" }}>Room</span>
                </span>
                <span>
                  <input type={"radio"} name="roomtype"/>
                  <span style={{ paddingLeft: "0.5rem" }}>Laboratory</span>
                </span>
              </div>
            </div>
            <div
              style={{
                marginTop: "0.5rem",
                display: "flex",
                alignItems: "center",
              }}
            >
              <div style={{ width: "15%" }}>
                <label htmlFor="">Appoinment No:</label>
              </div>
              <div>
                <input type="text" placeholder="Appoinment No:" />
              </div>
            </div>

            <div
              style={{
                marginTop: "0.5rem",
                display: "flex",
                alignItems: "center",
              }}
            >
              <div style={{ width: "15%" }}>
                <label htmlFor="">Doctor ID</label>
              </div>

              <div>
                <input type="text" placeholder="Doctor ID" />
              </div>
            </div>

            <div
              style={{
                marginTop: "0.5rem",
                display: "flex",
                alignItems: "center",
              }}
            >
              <div style={{ width: "15%" }}>
                <label htmlFor="">Specialization</label>
              </div>

              <input type="text" placeholder="Specialization" />
            </div>

            <div
              style={{
                marginTop: "0.5rem",
                display: "flex",
                alignItems: "center",
              }}
            >
              <div style={{ width: "15%" }}>
                <label htmlFor="">Medical Section</label>
              </div>

              <input type="text" placeholder="Medical Section" />
            </div>

            <div
              style={{
                marginTop: "0.5rem",
                display: "flex",
                alignItems: "center",
              }}
            >
              <div style={{ width: "15%" }}>
                <label htmlFor="">Time</label>
              </div>

              <div>
                <input type="time" placeholder="00:00" />
                <label style={{ marginLeft: "5rem" }} htmlFor="">
                  To
                </label>
                <input
                  style={{ marginLeft: "1rem" }}
                  type="time"
                  placeholder="00:00"
                />
              </div>
            </div>

            <div
              style={{
                marginTop: "0.5rem",
                display: "flex",
                alignItems: "center",
              }}
            >
              <div style={{ width: "15%" }}>
                <label htmlFor="">Date</label>
              </div>

              <input type="date" placeholder="Rs." style={{ width: "6rem" }} />
            </div>
          </form>

          <div style={{ position: "fixed", bottom: "5%" }}>
            <button
              className="btn fw-bold"
              style={{ backgroundColor: "#7D8C85", width: "6rem" }}
            >
              Go Back
            </button>
          </div>

          <div style={{ position: "fixed", bottom: "5%", right: "5%" }}>
            <button
              className="btn fw-bold"
              style={{ backgroundColor: "#7D8C85", width: "6rem" }}
            >
              Save
            </button>
            <button
              className="btn fw-bold"
              style={{ backgroundColor: "#7D8C85", width: "6rem" }}
            >
              Clear
            </button>
          </div>
        </Background>
      </div>
    </div>
  );
};

export default AddChanneling;
