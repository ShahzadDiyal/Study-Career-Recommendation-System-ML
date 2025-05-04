import { useState, ChangeEvent, FormEvent } from "react";
import axios from "axios";

interface FormDataType {
  [key: string]: string | number;
}

const BaseUrl = 'http://localhost:5000';

const Home = () => {
  const [selectedGroup, setSelectedGroup] = useState<string>("");
  const [formData, setFormData] = useState<FormDataType>({});
  const [result, setResult] = useState<string | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value.trim() === "" ? 0 : value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const groupMap: { [key: string]: number } = {
      "Pre-Medical": 1,
      "Pre-Engineering": 2,
      "ics": 3,
      "arts": 4,
    };

    const payload = {
      "Educational Background": groupMap[selectedGroup] || 0,
      "Biology": Number(formData["biology"]) || 0,
      "Chemistry": Number(formData["chemistry"]) || 0,
      "Civics": Number(formData["civics"]) || 0,
      "Computer Science": Number(formData["computer"]) || 0,
      "Economics": Number(formData["economics"]) || 0,
      "English": Number(formData["english"]) || 0,
      "Fine Arts": Number(formData["fine_arts"]) || 0,
      "General Mathematics": Number(formData["general_math"]) || 0,
      "Geography": Number(formData["geography"]) || 0,
      "History": Number(formData["history"]) || 0,
      "Islamic Studies": Number(formData["islamic_studies"]) || 0,
      "Library Science": Number(formData["library_science"]) || 0,
      "Maths": Number(formData["math"]) || 0,
      "Pakistan Studies": Number(formData["pak_study"]) || 0,
      "Physics": Number(formData["physics"]) || 0,
      "Sociology": Number(formData["sociology"]) || 0,
      "Statistics": Number(formData["statistics"]) || 0,
      "Urdu": Number(formData["urdu"]) || 0,
      "Islamic History": Number(formData["islamic_history"]) || 0,
      "Arabic": Number(formData["arabic"]) || 0,
    };

    try {
      const res = await axios.post(`${BaseUrl}/predict`, payload);
      const prediction = res.data["Recommended Fields"];
      setResult(prediction);
      localStorage.setItem("career_prediction", prediction);
    } catch (error) {
      console.error("Prediction failed:", error);
      setResult("Something went wrong. Please try again.");
    }
  };

  const renderSubjectInput = (subject: string) => (
    <div className="col-md-6 mb-3" key={subject}>
      <label>{subject.replace("_", " ").replace(/\b\w/g, (l) => l.toUpperCase())}:</label>
      <input className="form-control" type="number" name={subject} onChange={handleChange} />
    </div>
  );

  return (
    <div
      className="position-relative"
      style={{
        minHeight: "100vh",
        backgroundImage: 'url(../../images/nature.jpg)',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        marginTop:"20px"
      }}
    >
      {/* Overlay with opacity */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          zIndex: 0,
        }}
      ></div>

      {/* Form wrapper */}
      <div
        className="d-flex justify-content-center align-items-center"
        style={{
          minHeight: "100vh",
          padding: "20px",
          position: "relative",
          border:"2px solid",
          zIndex: 1,
        }}
      >
        <form
          onSubmit={handleSubmit}
          className="form p-4 rounded shadow"
          style={{ width: "100%", maxWidth: "1200px"}}
        >
          <h2 className="text-center mb-4">Your Career Recommender</h2>

          {/* Personal Info */}
          <div className="row">
            <h4>Personal Information:</h4>
            {["name", "email", "phone"].map((field) => (
              <div className="col-md-6 mb-3" key={field}>
                <label>{field.charAt(0).toUpperCase() + field.slice(1)}:</label>
                <input
                  className="form-control"
                  type={field === "email" ? "email" : field === "phone" ? "number" : "text"}
                  name={field}
                  onChange={handleChange}
                />
              </div>
            ))}
            <div className="col-md-6 mb-3">
              <label>Gender:</label>
              <select className="form-control" name="gender" onChange={handleChange}>
                <option value="">-- Select Gender --</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
          </div>

          <hr />
          <h4>Enter the marks in the Compulsory Subjects:</h4>
          <div className="row">
            {["english", "urdu", "pak_study", "islamic_studies"].map(renderSubjectInput)}
          </div>

          <hr />
          <div className="mb-3">
            <label>Select your FSc Group:</label>
            <select
              className="form-control"
              value={selectedGroup}
              onChange={(e) => setSelectedGroup(e.target.value)}
            >
              <option value="">-- Select Group --</option>
              <option value="Pre-Medical">Pre-Medical</option>
              <option value="Pre-Engineering">Pre-Engineering</option>
              <option value="ics">ICS</option>
              <option value="arts">Arts</option>
            </select>
          </div>

          <div className="row">
            {selectedGroup === "Pre-Engineering" &&
              ["physics", "chemistry", "math"].map(renderSubjectInput)}

            {selectedGroup === "Pre-Medical" &&
              ["physics", "chemistry", "biology"].map(renderSubjectInput)}

            {selectedGroup === "ics" &&
              ["physics", "computer", "math"].map(renderSubjectInput)}

            {selectedGroup === "arts" &&
              ["general_math", "islamic_history", "civics", "economics", "islamic_studies", "arabic"].map(renderSubjectInput)}
          </div>

          <div className="text-center mt-4">
            <button className="btn btn-primary w-100" type="submit">
              Submit
            </button>
          </div>

          {result && (
            <div className="text-center mt-4">
              <h5 className="text-success">Recommended Career Path:</h5>
              <p><strong>{result}</strong></p>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Home;
