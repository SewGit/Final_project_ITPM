import Background from "../components/Background";
import { useFormik } from "formik";
import * as Yup from "yup";

const ManageSalary = () => {
  const formik = useFormik({
    initialValues: {
      staff_id: "",
      name: "",
      specialization: "",
      medical_section: "",
      working_hours: "",
      working_days: "",
      salary: "",
      ot_hours: "",
      staff: "",
    },
    validationSchema: Yup.object({
      staff: Yup.string().required("*required"),
      staff_id: Yup.string().required("*required"),
      name: Yup.string("").required("*required"),
      specialization: Yup.string().required("*required"),
      medical_section: Yup.string().required("*required"),
      working_hours: Yup.string().required("*required"),
      working_days: Yup.number("").required("*required"),
      salary: Yup.number("").required("*required"),
      ot_hours: Yup.number("").required("*required"),
    }),

    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div>
      <Background title={"Manage Salary"}>
        <form
          action=""
          onSubmit={formik.handleSubmit}
          onBlur={formik.handleBlur}
          style={{ paddingTop: "2rem" }}
        >
          <div style={{ display: "flex" }}>
            <div style={{ width: "15%" }}>
              <label htmlFor="">
                Staff{" "}
                {formik.touched.staff && formik.errors.staff ? (
                  <span className="text-danger">{formik.errors.staff}</span>
                ) : null}
              </label>
            </div>
            <div>
              <span style={{ paddingRight: "10rem" }}>
                <input
                  type={"radio"}
                  name="staff"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={"doctor"}
                />
                <span style={{ paddingLeft: "0.5rem" }}>Doctor</span>
              </span>
              <span>
                <input
                  type={"radio"}
                  name="staff"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={"nurse"}
                />
                <span style={{ paddingLeft: "0.5rem" }}>Nurse</span>
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
              <label htmlFor="">
                Staff ID
                {formik.touched.staff_id && formik.errors.staff_id ? (
                  <span className="text-danger">{formik.errors.staff_id}</span>
                ) : null}
              </label>
            </div>
            <div>
              <input
                type="text"
                name="staff_id"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.staff_id}
                placeholder="Staff ID"
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
              <label htmlFor="">
                Name
                {formik.touched.name && formik.errors.name ? (
                  <span className="text-danger">{formik.errors.name}</span>
                ) : null}
              </label>
            </div>

            <div>
              <input
                type="text"
                name="name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
                placeholder="Name"
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
              <label htmlFor="">
                Specialization
                {formik.touched.specialization &&
                formik.errors.specialization ? (
                  <span className="text-danger">
                    {formik.errors.specialization}
                  </span>
                ) : null}
              </label>
            </div>

            <input
              type="text"
              name="specialization"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.specialization}
              placeholder="Specialization"
            />
          </div>

          <div
            style={{
              marginTop: "0.5rem",
              display: "flex",
              alignItems: "center",
            }}
          >
            <div style={{ width: "15%" }}>
              <label htmlFor="">
                Medical Section
                {formik.touched.medical_section &&
                formik.errors.medical_section ? (
                  <span className="text-danger">
                    {formik.errors.medical_section}
                  </span>
                ) : null}
              </label>
            </div>

            <input
              type="text"
              name="medical_section"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.medical_section}
              placeholder="Medical Section"
            />
          </div>

          <div
            style={{
              marginTop: "0.5rem",
              display: "flex",
              alignItems: "center",
            }}
          >
            <div style={{ width: "15%" }}>
              <label htmlFor="">
                Working Hours
                {formik.touched.working_hours && formik.errors.working_hours ? (
                  <span className="text-danger">
                    {formik.errors.working_hours}
                  </span>
                ) : null}
              </label>
            </div>

            <div>
              <input
                type="number"
                name="working_hours"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.working_hours}
                placeholder="00:00"
              />
              <label style={{ marginLeft: "5rem" }} htmlFor="">
                OT Hours{" "}
                {formik.touched.ot_hours && formik.errors.ot_hours ? (
                  <span className="text-danger">{formik.errors.ot_hours}</span>
                ) : null}
              </label>
              <input
                style={{ marginLeft: "1rem" }}
                type="number"
                name="ot_hours"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.ot_hours}
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
              <label htmlFor="">
                Working Days{" "}
                {formik.touched.working_days && formik.errors.working_days ? (
                  <span className="text-danger">
                    {formik.errors.working_days}
                  </span>
                ) : null}
              </label>
            </div>

            <input
              type="number"
              name="working_days"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.working_days}
              placeholder=""
            />
          </div>

          <div
            style={{
              marginTop: "0.5rem",
              display: "flex",
              alignItems: "center",
            }}
          >
            <div style={{ width: "15%" }}>
              <label htmlFor="">
                Salary{" "}
                {formik.touched.salary && formik.errors.salary ? (
                  <span className="text-danger">{formik.errors.salary}</span>
                ) : null}
              </label>
            </div>

            <input
              type="number"
              name="salary"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.salary}
              placeholder="Rs."
              style={{ width: "8rem" }}
            />
          </div>

          <div
            style={{
              marginTop: "0.5rem",

              position: "fixed",
              top: "30%",
              right: "5%",
            }}
          >
            <div style={{ padding: "1rem", marginLeft: "12rem" }}>
              <input
                type="text"
                placeholder="Search Staff ID"
                style={{ width: "6rem" }}
              />
            </div>

            <div style={{ overflowX: "scroll", maxHeight: "15rem" }}>
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

          <div style={{ position: "fixed", bottom: "5%" }}>
            <button type="button" className="btn btn-secondary">Go Back</button>
          </div>

          <div style={{ position: "fixed", bottom: "5%", right: "5%" }}>
            <button type="submit" className="btn btn-secondary">
              Update
            </button>
            <button type="button" className="btn btn-secondary">
              Delete
            </button>
            <button type="button" className="btn btn-secondary">
              Generate Report
            </button>
          </div>
        </form>
      </Background>
    </div>
  );
};

export default ManageSalary;
