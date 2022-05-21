import { useFormik } from "formik";
import Background from "../components/Background";
import * as Yup from 'yup'

const AddWorking = () => {
  const formik = useFormik({
    initialValues: {
      staffID: "",
      noOfWorkingDays: 0,
      workingDays: [],
      workingTimePerDays: 0,
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values));
    },
    validationSchema:Yup.object({
      staffID: Yup.string("").required("required"),
      noOfWorkingDays: Yup.number().required("required").min(1,"Cannot be 0"),
      workingTimePerDays: Yup.number().required("required").min(1,"Cannot be 0")
    })
  });

  return (
    <div>
      <Background title={"Add Working Days And Hours"}>
        <form onSubmit={formik.handleSubmit} >
          <div className="d-flex justify-content-end align-items-center my-2 pe-5 mb-3">
            <label className="mx-1 fw-bold">Staff ID</label>

            <select className="mx-3 py-1" name="" id="staffID">
              <option value="volvo" style={{ width: "6rem" }}>
                Select ID
              </option>
            </select>

            <button className="btn" style={{ backgroundColor: "#DFE709" }}>
              Search
            </button>
            <button className="btn" style={{ backgroundColor: "#AAECC9" }}>
              View
            </button>
          </div>

          <div className="d-flex justify-content-end align-items-center my-2 ">
            <div style={{ width: "40%" }}>
              <div className="d-flex  my-4">
                <div style={{ width: "40%" }}>
                  <label className="mx-1 fw-bold">Staff ID</label>
                </div>
                <div className="special" style={{ width: "60%" }}>
                  <input
                    value={formik.values.staffID}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    type="text"
                    style={{ width: "8rem" }}
                    name="staffID"
                  />
                  {formik.touched.staffID && formik.errors.staffID ? (
                  <span className="text-danger">{formik.errors.staffID}</span>
                ) : null}
                </div>
              </div>
              <div className="d-flex  my-4">
                <div style={{ width: "40%" }}>
                  <label className="mx-1 fw-bold">No of Working Days</label>
                </div>
                <div style={{ width: "60%" }}>
                  <input
                    value={formik.values.noOfWorkingDays}
                    onChange={formik.handleChange}
                    type="number"
                    style={{ width: "8rem" }}
                    name="noOfWorkingDays"
                  />
                  {formik.touched.noOfWorkingDays && formik.errors.noOfWorkingDays ? (
                  <span className="text-danger">{formik.errors.noOfWorkingDays}</span>
                ) : null}
                </div>
              </div>
              <div className="d-flex justify-content-end align-items-center ">
                <div style={{ width: "40%" }} className="d-flex ">
                  {" "}
                  <span className="mb-5 pb-5 fw-bold"> Working Days</span>
                </div>
                <div style={{ width: "60%" }} className="d-flex flex-column">
                  <div>
                    <input
                      onChange={formik.handleChange}
                      name="workingDays"
                      type="checkbox"
                      value="sunday"
                      checked={
                        formik.values.workingDays.indexOf("sunday") !== -1
                      }
                    />
                    <label htmlFor="sunday" className="px-3">
                      Sunday
                    </label>
                  </div>
                  <div>
                    <input
                      onChange={formik.handleChange}
                      name="workingDays"
                      type="checkbox"
                      value="monday"
                      checked={
                        formik.values.workingDays.indexOf("monday") !== -1
                      }
                    />
                    <label htmlFor="monday" className="px-3">
                      monday
                    </label>
                  </div>
                  <div>
                    <input
                      onChange={formik.handleChange}
                      name="workingDays"
                      type="checkbox"
                      value="tuesday"
                      checked={
                        formik.values.workingDays.indexOf("tuesday") !== -1
                      }
                    />
                    <label htmlFor="tuesday" className="px-3">
                      tuesday
                    </label>
                  </div>
                  <div>
                    <input
                      onChange={formik.handleChange}
                      name="workingDays"
                      type="checkbox"
                      value="wednesday"
                      checked={
                        formik.values.workingDays.indexOf("wednesday") !== -1
                      }
                    />
                    <label htmlFor="wednesday" className="px-3">
                      wednesday
                    </label>
                  </div>
                  <div>
                    <input
                      onChange={formik.handleChange}
                      name="workingDays"
                      type="checkbox"
                      value="thursday"
                      checked={
                        formik.values.workingDays.indexOf("thursday") !== -1
                      }
                    />
                    <label htmlFor="thursday" className="px-3">
                      thursday
                    </label>
                  </div>
                  <div>
                    <input
                      onChange={formik.handleChange}
                      name="workingDays"
                      type="checkbox"
                      value="friday"
                      checked={
                        formik.values.workingDays.indexOf("friday") !== -1
                      }
                    />
                    <label htmlFor="friday" className="px-3">
                      friday
                    </label>
                  </div>
                  <div>
                    <input
                      onChange={formik.handleChange}
                      name="workingDays"
                      type="checkbox"
                      value="saturday"
                      checked={
                        formik.values.workingDays.indexOf("saturday") !== -1
                      }
                    />
                    <label htmlFor="saturday" className="px-3">
                      Saturday
                    </label>
                  </div>
                </div>
              </div>
              <div className="d-flex  my-4">
                <div style={{ width: "40%" }}>
                  <label className="mx-1 fw-bold">Working Time Per Days</label>
                </div>
                <div style={{ width: "60%" }}>
                  <input
                    min={0}
                    name="workingTimePerDays"
                    onChange={formik.handleChange}
                    value={formik.values.workingTimePerDays}
                    type="number"
                    style={{ width: "8rem" }}
                  />
                  {formik.touched.workingTimePerDays && formik.errors.workingTimePerDays ? (
                  <span className="text-danger">{formik.errors.workingTimePerDays}</span>
                ) : null}
                </div>
              </div>
            </div>
            <div style={{ width: "60%" }} className="">
              <div style={{ overflowX: "scroll", maxHeight: "25rem" }}>
                <table>
                  <tbody>
                    <tr>
                      <th>Staff ID</th>
                      <th>Name</th>
                      <th>Specialization</th>
                      <th>Salary</th>
                      <th>Salary</th>
                      <th>Salary</th>
                    </tr>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 7, 8, 9, 4, 5, 6, 1, 2, 3].map(
                      (e, index) => (
                        <tr key={index}>
                          <td>001</td>
                          <td>test Name</td>
                          <td>test</td>
                          <td>test</td>
                          <td>test</td>
                          <td>test</td>
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-end mt-5">
            <button
              type="reset"
              className="btn fw-bold"
              style={{ backgroundColor: "#ECDAAA", width: "6rem" }}
              onClick={formik.handleReset}
            >
              Reset
            </button>

            <button
              type="submit"
              className="btn fw-bold"
              style={{ backgroundColor: "#078944", width: "6rem" }}
            >
              Save
            </button>
            <button
              className="btn fw-bold"
              style={{ backgroundColor: "#AAECC9", width: "6rem" }}
              type="button"
            >
              Update
            </button>
            <button
              className="btn fw-bold"
              type="button"
              style={{ backgroundColor: "#F81212", width: "6rem" }}
            >
              Delete
            </button>
          </div>
        </form>
      </Background>
    </div>
  );
};

export default AddWorking;
