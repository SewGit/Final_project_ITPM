import { Row, Col, Form, Card } from "react-bootstrap";

const AddLocation = ({}) => {
  return (
    <div>
      <Row className="bg-light text-dark" style={{ height: "20rem" }}>
        <Col>
          <Row
            style={{
              margin: 3,
              textAlign: "center",
              fontWeight: "bold",
              fontSize: "2rem",
            }}
          >
            Day
          </Row>
          <Row
            style={{
              margin: 3,
              paddingTop: "0.9rem",
              textAlign: "center",
              fontWeight: "bold",
              fontSize: "2rem",
            }}
          >
            Time
          </Row>
          <Row
            style={{
              margin: 3,
              paddingTop: "3rem",
              textAlign: "center",
              fontWeight: "bold",
              fontSize: "2rem",
            }}
          >
            Location
          </Row>
        </Col>
        <Col>
          <Row style={{ padding: "0.5rem", paddingTop: "1rem" }}>
            <Form.Select aria-label="Default select example">
              <option>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </Row>
          <Row
            style={{
              paddingTop: "1rem",
              paddingLeft: "0.5rem",
              paddingRight: "0.5rem",
            }}
          >
            <Form>
              
                <div key={"time1"} className="mb-3">
                  <Form.Check
                    type={"radio"}
                    id={"radio"}
                    label={"8.00 am - 12.00 pm"}
                  />
                </div>

                <div key={"time2"} className="mb-3">
                  <Form.Check
                    type={"radio"}
                    id={"radio"}
                    label={"8.00 am - 12.00 pm"}
                  />
                </div>
              
            </Form>
          </Row>
          <Row
            style={{
              paddingTop: "1rem",
              paddingLeft: "0.5rem",
              paddingRight: "0.5rem",
            }}
          >
            <Form.Select aria-label="Default select example">
              <option>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </Row>
        </Col>

        <Col
          style={{
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
            paddingTop: "1.2rem",
          }}
        >
          <Row>
            <button className="btn btn-success ">Save</button>
            <button className="btn btn-danger mt-3">View</button>
          </Row>
        </Col>
        <Col
          className="bg-dark m-2"
          style={{
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
            paddingTop: "1.2rem",
          }}
        ></Col>
      </Row>
    </div>
  );
};

export default AddLocation;
