import { useNavigate } from "react-router-dom";
import "./Signup.css";

const Signup = () => {
  const navigate = useNavigate();

  return (
    <div className="signup-container">
      <h2 className="signup-title">Create your<br />PopX account</h2>
      
      <div className="form-group">
        <label className="form-label">Full Name<span className="required" style={{ color: "red" }}>*</span></label>
        <input type="text" className="form-input" defaultValue="Marry Doe" />
      </div>
      
      <div className="form-group">
        <label className="form-label">Phone number<span className="required" style={{ color: "red" }}>*</span></label>
        <input type="tel" className="form-input" defaultValue="Marry Doe" />
      </div>
      
      <div className="form-group">
        <label className="form-label">Email address<span className="required" style={{ color: "red" }}>*</span></label>
        <input type="email" className="form-input" defaultValue="Marry Doe" />
      </div>
      
      <div className="form-group">
        <label className="form-label">Password <span className="required" style={{ color: "red" }}>*</span></label>
        <input type="password" className="form-input" defaultValue="Marry Doe" />
      </div>
      
      <div className="form-group">
        <label className="form-label">Company name</label>
        <input type="text" className="form-input" defaultValue="Marry Doe" />
      </div>
      
      <div className="form-group agency-group">
        <label className="agency-label">
          Are you an Agency?<span className="required">*</span>
        </label>
        
        <div className="radio-group">
          <label className="radio-label">
            <input type="radio" name="agency" value="yes" checked />
            <span className="radio-custom"></span>
            <span className="radio-text">Yes</span>
          </label>
          <label className="radio-label">
            <input type="radio" name="agency" value="no" />
            <span className="radio-custom"></span>
            <span className="radio-text">No</span>
          </label>
        </div>
      </div>
      
      <button 
        onClick={() => navigate("/account")} 
        className="create-account-btn"
      >
        Create Account
      </button>
    </div>
  );
};

export default Signup;