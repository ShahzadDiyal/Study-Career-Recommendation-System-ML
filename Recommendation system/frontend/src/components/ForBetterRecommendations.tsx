import { useState, ChangeEvent, FormEvent } from "react";
import axios from "axios";

interface FormDataType {
  [key: string]: string | number;
}
const BaseUrl = 'http://localhost:5000'
const Home = () => {
  const [selectedGroup, setSelectedGroup] = useState<string>("");
  const [formData, setFormData] = useState<FormDataType>({});
  const [result, setResult] = useState<string | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
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
      // Personal Info
      "Name": formData["name"] || "",
      "Email": formData["email"] || "",
      "Phone": formData["phone"] || "",
      "Gender": formData["gender"] || "",
      // New Info
      "Current Education Level": formData["education_level"] || "",
      "Major": formData["major"] || "",
      "Career Interests": formData["career_interests"] || "",
      "Technical Skills": formData["technical_skills"] || "",
      "Soft Skills": formData["soft_skills"] || "",
      "Languages Known": formData["languages_known"] || "",
      "Personality Type": formData["personality_type"] || "",
      "Study Style": formData["study_style"] || "",
      "Relocation Willingness": formData["relocation"] || "",
      "Scholarship Need": formData["scholarship_need"] || "",
      "Budget Range": formData["budget"] || "",
      "Additional Notes": formData["additional_notes"] || "",
      // Educational Marks
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
      const res = await axios.post(`${BaseUrl}/better-prediction`, payload);
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
      <input
        className="form-control"
        type="number"
        name={subject}
        onChange={handleChange}
        placeholder={`Enter marks for ${subject.replace("_", " ")}`}
      />
    </div>
  );

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        minHeight: "100vh",
        paddingTop: "20px",
        background: "linear-gradient(90deg, #2daeaf, #000000)",
      }}
    >
      <form
        onSubmit={handleSubmit}
        className="form p-4 rounded shadow"
        style={{ width: "100%", maxWidth: "1200px", backgroundColor: "#F0F1F6" }}
      >
        <h2 className="text-center mb-4 text-dark">Your Career Path Recommender</h2>

        {/* Personal Info */}
        <div className="row">
          <h4 className="mb-3">Personal Information:</h4>
          {["name", "email", "phone"].map((field) => (
            <div className="col-md-6 mb-3" key={field}>
              <label>{field.charAt(0).toUpperCase() + field.slice(1)}:</label>
              <input
                className="form-control"
                type={field === "email" ? "email" : field === "phone" ? "number" : "text"}
                name={field}
                onChange={handleChange}
                placeholder={`Enter your ${field}`}
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
        {/* Academic and Personal Interests */}
        <div className="row">
          <h4 className="mb-3">Academic and Personal Interests:</h4>

          <div className="col-md-6 mb-3">
            <label>Current Education Level:</label>
            <select className="form-control" name="education_level" onChange={handleChange}>
              <option value="">-- Select --</option>
              <option value="High School">Matric</option>
              <option value="High School">FSc</option>
              <option value="Undergraduate">Undergraduate</option>
              <option value="Graduate">Graduate</option>
            </select>
          </div>

          <div className="col-md-6 mb-3">
            <label>Major/Field of Study:</label>
            <input
              className="form-control"
              type="text"
              name="major"
              onChange={handleChange}
              placeholder="Enter your field of study"
            />
          </div>

          <div className="col-md-6 mb-3">
            <label>Career Interests:</label>
            <input
              className="form-control"
              type="text"
              name="career_interests"
              onChange={handleChange}
              placeholder="Enter your career interests"
            />
          </div>

          <div className="col-md-6 mb-3">
            <label>Technical Skills (comma-separated):</label>
            <input
              className="form-control"
              type="text"
              name="technical_skills"
              onChange={handleChange}
              placeholder="e.g., Python, JavaScript"
            />
          </div>

          <div className="col-md-6 mb-3">
            <label>Soft Skills (comma-separated):</label>
            <input
              className="form-control"
              type="text"
              name="soft_skills"
              onChange={handleChange}
              placeholder="e.g., Communication, Teamwork"
            />
          </div>

          <div className="col-md-6 mb-3">
            <label>Languages Known (comma-separated):</label>
            <input
              className="form-control"
              type="text"
              name="languages_known"
              onChange={handleChange}
              placeholder="e.g., English, Urdu"
            />
          </div>

          <div className="col-md-6 mb-3">
            <label>Personality Type:</label>
            <select className="form-control" name="personality_type" onChange={handleChange}>
              <option value="">-- Select --</option>
              <option value="Introvert">Introvert</option>
              <option value="Extrovert">Extrovert</option>
              <option value="Ambivert">Ambivert</option>
            </select>
          </div>

          <div className="col-md-6 mb-3">
            <label>Study Style:</label>
            <select className="form-control" name="study_style" onChange={handleChange}>
              <option value="">-- Select --</option>
              <option value="Self-study">Self-study</option>
              <option value="Classroom Learning">Classroom Learning</option>
              <option value="Hybrid">Hybrid (Both)</option>
            </select>
          </div>

          <div className="col-md-6 mb-3">
            <label>Relocation Willingness:</label>
            <select className="form-control" name="relocation" onChange={handleChange}>
              <option value="">-- Select --</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>

          <div className="col-md-6 mb-3">
            <label>Scholarship Needed:</label>
            <select className="form-control" name="scholarship_need" onChange={handleChange}>
              <option value="">-- Select --</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>

          <div className="col-md-6 mb-3">
            <label>Budget Range:</label>
            <select className="form-control" name="budget" onChange={handleChange}>
              <option value="">-- Select --</option>
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </div>

          <div className="col-md-12 mb-3">
            <label>Additional Notes:</label>
            <textarea
              className="form-control"
              name="additional_notes"
              rows={3}
              onChange={handleChange}
              placeholder="Any additional information you would like to provide"
            ></textarea>
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
            ["civics", "economics", "general_math"].map(renderSubjectInput)}
        </div>

        <div className="d-flex justify-content-center mt-4">
          <button type="submit" className="btn btn-primary">
            Get Recommendations
          </button>
        </div>

        {result && (
          <div className="mt-4">
            <h4>Recommended Fields:</h4>
            <p>{result}</p>
          </div>
        )}
      </form>
    </div>
  );
};

export default Home;
