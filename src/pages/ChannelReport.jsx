import Background from "../components/Background";

const ChannelReport = () => {
  return (
    <div>
      <Background title={"Channel Report Details"}>
        <div
          style={{
            marginTop: "0.5rem",
            display: "flex",
            alignItems: "center",
          }}
        >
          <div style={{ width: "50%", display: "flex", alignItems: "center" }}>
            <label style={{ marginRight: "2rem" }} htmlFor="">
              Channel ID
            </label>
            <input type="text" placeholder="" style={{ maxWidth: "2rem " }} />
          </div>
          <div
            style={{
              width: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            <button
              className="btn"
              style={{
                borderRadius: 0,
                backgroundColor: "#D4BF0A",
                width: "10rem",
              }}
            >
              Genarate Report
            </button>
          </div>
        </div>

        <div
          style={{
            marginTop: "0.5rem",
          }}
        >
          <div style={{ overflowX: "scroll", maxHeight: "35rem" }}>
            <table>
              <tr>
                <th>Staff ID</th>
                <th>Name</th>
                <th>Specialization</th>
                <th>Salary</th>
                <th>Salary</th>
                <th>Salary</th>
                <th>Salary</th>
                <th>Salary</th>
                <th>Salary</th>
              </tr>
              {[
                1, 2, 3, 4, 5, 6, 7, 8, 9, 7, 8, 9, 4, 5, 6, 1, 2, 3, 10, 5, 4,
                8, 7, 8,
              ].map((e) => (
                <tr>
                  <td>001</td>
                  <td>test Name</td>
                  <td>test</td>
                  <td>test</td>
                  <td>test</td>
                  <td>test</td>
                  <td>test</td>
                  <td>test</td>
                  <td>test</td>
                </tr>
              ))}
            </table>
          </div>
        </div>
      </Background>
    </div>
  );
};

export default ChannelReport;
