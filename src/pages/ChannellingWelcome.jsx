import { Row, Col, Form, Card, Tabs, Tab } from "react-bootstrap";
import AddLocation from "../components/AddLocation";
import Background from "../components/Background";

const AddWorking = () => {
  return (
    <div>
      <Background title={"Welcome to Channel Management"} button={"Home"}>
        <Row>
          <Col>
            <Row
              style={{
                margin: 3,
                textAlign: "center",
                fontWeight: "bold",
                fontSize: "2rem",
              }}
            >
              Doctor
            </Row>
            <Row
              style={{
                margin: 3,
                paddingTop:"0.9rem",
                textAlign: "center",
                fontWeight: "bold",
                fontSize: "2rem",
              }}
            >
              Specialization
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
            <Card style={{ width: "6rem", height: "6rem" }}>
              <Card.Body></Card.Body>
            </Card>
            Add Channel
          </Col>
          <Col
            style={{
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
              paddingTop: "1.2rem",
            }}
          >
            <Card style={{ width: "6rem", height: "6rem" }}>
              <Card.Body></Card.Body>
            </Card>
            Manage Channel
          </Col>
        </Row>
        <Row>
          <Tabs
            defaultActiveKey="location"
            id="uncontrolled-tab-example"
            className="mb-3"
          >
            <Tab eventKey="location" title="Add Location">
              <AddLocation/>
            </Tab>
            <Tab eventKey="nat" title="Not Available Time">
              dsfg
            </Tab>
            <Tab eventKey="Concecutive" title="Concecutive" >
              dfgv
            </Tab>
            <Tab eventKey="Overlapping" title="Overlapping" >
              dfgv
            </Tab>
          </Tabs>
        </Row>
      </Background>
    </div>
  );
};

export default AddWorking;
