import { useState } from "react"

const Home = () => {
  const [selectedGroup, setSelectedGroup] = useState("");

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh", paddingTop: "20px",backgroundColor:"linear-gradient(90deg, #000000, #2daeaf)" }}>

      <form className="form p-4 rounded shadow" style={{ width: "100%", maxWidth: "1200px", backgroundColor:"#BBC2CC"}}>
        <h2 className="text-center mb-4">Your Career Recommender</h2>

        {/* Personal Info */}
        <div className="row">
          <h4>Personal Informations:</h4>
          <div className="col-md-6 mb-3">
            <label>Full Name:</label><br />
            <input className="form-control" type="text" />
          </div>
          <div className="col-md-6 mb-3">
            <label>Email:</label><br />
            <input className="form-control" type="email" />
          </div>
          <div className="col-md-6 mb-3">
            <label>Phone:</label><br />
            <input className="form-control" type="number" />
          </div>
          <div className="col-md-6 mb-3">
            <label>Gender:</label><br />
            <select className="form-control">
            <option value="">-- Select Gender --</option>
              <option value="">Male</option>
              <option value="">Female</option>
            </select>
          </div>
        </div>

        <hr />
        <h4>Enter the marks in the Compulsory Subjects:</h4>
        <div className="row">
          <div className="col-md-6 mb-3">
            <label>English:</label><br />
            <input className="form-control" type="text" />
          </div>
          <div className="col-md-6 mb-3">
            <label>Urdu:</label><br />
            <input className="form-control" type="text" />
          </div>
          <div className="col-md-6 mb-3">
            <label>Pak Study:</label><br />
            <input className="form-control" type="text" />
          </div>
          <div className="col-md-6 mb-3">
            <label>Islamiyat (Compulsory):</label><br />
            <input className="form-control" type="text" />
          </div>
        </div>

        <hr />
        <div className="mb-3">
          <label>Select your FSc Group:</label><br />
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

        {/* Group-based subjects */}
        {selectedGroup === "Pre-Engineering" && (
          <>
            <h4>Pre-Engineering Group Subjects</h4>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label>Physics</label><br />
                <input className="form-control" type="text" />
              </div>
              <div className="col-md-6 mb-3">
                <label>Chemistry</label><br />
                <input className="form-control" type="text" />
              </div>
              <div className="col-md-6 mb-3">
                <label>Mathematics</label><br />
                <input className="form-control" type="text" />
              </div>
            </div>
          </>
        )}

        {selectedGroup === "Pre-Medical" && (
          <>
            <h4>Pre-Medical Group Subjects</h4>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label>Physics</label><br />
                <input className="form-control" type="number" max={199} min={0}  />
              </div>
              <div className="col-md-6 mb-3">
                <label>Chemistry</label><br />
                <input className="form-control" type="text" />
              </div>
              <div className="col-md-6 mb-3">
                <label>Biology</label><br />
                <input className="form-control" type="text" />
              </div>
            </div>
          </>
        )}

        {selectedGroup === "ics" && (
          <>
            <h4>ICS Group Subjects</h4>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label>Physics</label><br />
                <input className="form-control" type="text" />
              </div>
              <div className="col-md-6 mb-3">
                <label>Computer Science</label><br />
                <input className="form-control" type="text" />
              </div>
              <div className="col-md-6 mb-3">
                <label>Mathematics</label><br />
                <input className="form-control" type="text" />
              </div>
            </div>
          </>
        )}

        {selectedGroup === "arts" && (
          <>
            <h4>Arts Group Subjects</h4>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label>General Mathematics</label><br />
                <input className="form-control" type="text" />
              </div>
              <div className="col-md-6 mb-3">
                <label>Islamic History</label><br />
                <input className="form-control" type="text" />
              </div>
              <div className="col-md-6 mb-3">
                <label>Civics</label><br />
                <input className="form-control" type="text" />
              </div>
              <div className="col-md-6 mb-3">
                <label>Economics</label><br />
                <input className="form-control" type="text" />
              </div>
              <div className="col-md-6 mb-3">
                <label>Islamic Studies (Elective)</label><br />
                <input className="form-control" type="text" />
              </div>
              <div className="col-md-6 mb-3">
                <label>Arabic</label><br />
                <input className="form-control" type="text" />
              </div>
            </div>
          </>
        )}

        <div className="text-center mt-4">
          <button className="btn submit-btn w-100"type="submit" >Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Home