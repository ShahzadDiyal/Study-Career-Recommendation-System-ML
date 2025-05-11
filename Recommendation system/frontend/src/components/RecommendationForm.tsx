import { useState } from "react";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";
import Footer from "./Footer";

const BaseUrl = "http://localhost:5000";

const Home = () => {
  const [selectedGroup, setSelectedGroup] = useState<string>("");
  const [result, setResult] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const subjectFields: { [key: string]: string[] } = {
    "Pre-Medical": ["physics", "chemistry", "biology"],
    "Pre-Engineering": ["physics", "chemistry", "math"],
    ics: ["physics", "computer", "math"],
    arts: [
      "general_math",
      "islamic_history",
      "civics",
      "economics",
      "islamic_studies",
      "arabic",
    ],
  };

  const compulsorySubjects = ["english", "urdu", "pak_study", "islamic_studies"];

  const initialValues: any = {
    name: "",
    email: "",
    phone: "",
    gender: "",
    ...Object.fromEntries([...compulsorySubjects, ...Object.values(subjectFields).flat()].map(s => [s, ""])),
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phone: Yup.string()
      .matches(/^\d+$/, "Must be only digits")
      .required("Phone is required"),
    gender: Yup.string().required("Gender is required"),
    ...Object.fromEntries(
      compulsorySubjects.map((s) => [
        s,
        Yup.number()
          .typeError("Enter valid number")
          .min(0, "Min 0")
          .max(200, "Max 200")
          .required("Required"),
      ])
    ),
  });

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      setLoading(true);
      const groupMap: { [key: string]: number } = {
        "Pre-Medical": 1,
        "Pre-Engineering": 2,
        ics: 3,
        arts: 4,
      };

      const payload = {
        "Educational Background": groupMap[selectedGroup] || 0,
        ...Object.fromEntries(
          Object.keys(values).map((k) => [k.replace(/_/g, " "), Number(values[k]) || 0])
        ),
      };

      try {
        const res = await axios.post(`${BaseUrl}/predict`, payload);
        setResult(res.data["Recommended Fields"]);
        localStorage.setItem("career_prediction", res.data["Recommended Fields"]);
      } catch (err) {
        setResult("Something went wrong. Please try again.");
      } finally {
        setLoading(false);
      }
    },
  });

  const renderInput = (name: string, label?: string) => (
  <div className="col-md-6 mb-3" key={name}>
    <label className="form-label">
      {label || name.replace("_", " ").replace(/\b\w/g, (l) => l.toUpperCase())}
    </label>
    <input
      className={`form-control ${
        formik.touched[name] && formik.errors[name] ? "is-invalid" : ""
      }`}
      type="number"
      name={name}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      value={formik.values[name]}
    />
    {formik.touched[name] && formik.errors[name] && (
      <div className="invalid-feedback">
        {typeof formik.errors[name] === "string" ? formik.errors[name] : ""}
      </div>
    )}
  </div>
);


  return (
    <div
      className="position-relative"
      style={{
        minHeight: "100vh",
        backgroundImage: "url(../../images/nature.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding:"15px 0px",
        marginTop:"10px"
      }}
    >
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{ backgroundColor: "rgba(0,0,0,0.6)", zIndex: 0 }}
      ></div>

      <div
        className="container d-flex justify-content-center align-items-center"
        style={{ minHeight: "100vh", position: "relative", zIndex: 1 }}
      >
        <form
          onSubmit={formik.handleSubmit}
          className="bg-opacity-75 p-4 rounded shadow w-100 text-white"
          style={{ maxWidth: "1000px"  ,backgroundColor: "rgba(0, 0, 255, 0.2)" }}
        >
          <h2 className="text-center mb-4 fw-bold">Career Recommendation Form</h2>

          <div className="row">
            <h4 className="mb-3">Personal Information</h4>
            {["name", "email", "phone"].map((field) => (
              <div className="col-md-6 mb-3" key={field}>
                <label className="form-label">
                  {field.charAt(0).toUpperCase() + field.slice(1)}:
                </label>
                <input
                  className={`form-control ${
                    formik.touched[field] && formik.errors[field] ? "is-invalid" : ""
                  }`}
                  type={field === "email" ? "email" : "text"}
                  name={field}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values[field]}
                />
                {formik.touched[field] && formik.errors[field] && (
  <div className="invalid-feedback">
    {/* Ensure the error message is always a string */}
    {typeof formik.errors[field] === "string" ? formik.errors[field] : ""}
  </div>
)}

              </div>
            ))}
            <div className="col-md-6 mb-3">
              <label className="form-label">Gender:</label>
              <select
                className={`form-control ${
                  formik.touched.gender && formik.errors.gender ? "is-invalid" : ""
                }`}
                name="gender"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.gender}
              >
                <option value="">-- Select Gender --</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            {formik.errors.gender && formik.errors.gender && (
  <div className="invalid-feedback">
    {typeof formik.errors.gender === "string" ? formik.errors.gender : ""}
  </div>
)}

              {/* {formik.touched.gender && formik.errors.gender && (
                <div className="invalid-feedback">{formik.errors.gender}</div>
              )} */}  
            </div>
          </div>

          <hr />
          <h4>Compulsory Subjects</h4>
          <div className="row">
            {compulsorySubjects.map((s) => renderInput(s))}
          </div>

          <hr />
          <div className="mb-3">
            <label className="form-label fw-bold">Select your FSc Group:</label>
            <select
              className="form-control"
              value={selectedGroup}
              onChange={(e) => {
                setSelectedGroup(e.target.value);
              }}
            >
              <option value="">-- Select Group --</option>
              <option value="Pre-Medical">Pre-Medical</option>
              <option value="Pre-Engineering">Pre-Engineering</option>
              <option value="ics">ICS</option>
              <option value="arts">Arts</option>
            </select>
          </div>

          <div className="row">
            {selectedGroup &&
              subjectFields[selectedGroup]?.map((s) => renderInput(s))}
          </div>

          <div className="text-center mt-4">
            <button
              className="btn btn-primary w-100 d-flex justify-content-center align-items-center gap-2"
              type="submit"
              disabled={loading}
            >
              {loading && (
                <div
                  className="spinner-border spinner-border-sm text-light"
                  role="status"
                ></div>
              )}
              <span>Submit</span>
            </button>
          </div>

          {result && (
            <div className="text-center mt-4">
              <h5 className="text-success">Recommended Career Path:</h5>
              <p>
                <strong>{result}</strong>
              </p>
            </div>
          )}
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
