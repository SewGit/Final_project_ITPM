import Background from "../components/Background";

const AddLocationDetails = () => {
  return (
    <div>
      <Background title={"Add Location Details"}>
        <form action="" style={{ paddingTop: "2rem" }}>
          
          <div
            style={{
              marginTop: "0.5rem",
              display: "flex",
              alignItems: "center",
            }}
          >
            <div style={{ width: "15%" }}>
              <label htmlFor="">Room No</label>
            </div>
            <div>
              <input type="text" placeholder="Room No" />
            </div>
          </div>

          <div style={{ display: "flex" }}>
            <div style={{ width: "15%" }}>
              <label htmlFor="">Room Type</label>
            </div>
            <div>
              <span style={{ paddingRight: "10rem" }}>
                <input type={"radio"}  name={"type"}/>
                <span style={{ paddingLeft: "0.5rem" }}>Room</span>
              </span>
              <span>
                <input type={"radio"}  name={"type"}/>
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
              <label htmlFor="">Capacity</label>
            </div>

            <input type="number" placeholder="" />
          </div>
        </form>

        <div
          style={{
            marginTop: "0.5rem",

            position: "fixed",
            top: "30%",
            right: "5%",
          }}
        ></div>

        <div
          style={{
            marginTop: "0.5rem",
            display: "flex",
            alignItems: "center",
          }}
        >
          <div style={{ width: "15%" }}>
            <label htmlFor=""></label>
          </div>

          <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div style={{ overflowX: "scroll", maxHeight: "13rem" }}>
            <table>
              <tr>
                <th>Staff ID</th>
                <th>Name</th>
                <th>Specialization</th>
                <th>Salary</th>
              </tr>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 7, 8, 9, 4, 5, 6, 1, 2, 3].map(
                (e) => (
                  <tr>
                    <td>001</td>
                    <td>test Name</td>
                    <td>test</td>
                    <td>test</td>
                  </tr>
                )
              )}
            </table>
          </div>
        </div>
        </div>

       

        <div style={{ position: "fixed", bottom: "5%" }}>
          <button className="btn">Go Back</button>
        </div>

        <div style={{ position: "fixed", bottom: "5%", right: "5%" }}>
          <button className="btn">Update</button>
          <button className="btn">Delete</button>
          <button className="btn">Generate Report</button>
        </div>
      </Background>
    </div>
  );
};

export default AddLocationDetails;
