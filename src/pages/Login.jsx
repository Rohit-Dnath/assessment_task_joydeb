import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="login-container">
      <h2 className="login-title">Signin to your 
        <br />PopX account</h2>
      <p className="login-subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      
      <div className="form-group">
        <label className="form-label">Email Address</label>
        <input type="email" className="form-input" placeholder="Enter email address" />
      </div>
      
      <div className="form-group">
        <label className="form-label">Password</label>
        <input type="password" className="form-input" placeholder="Enter password" />
      </div>
      
      <button onClick={() => navigate("/account")} className="primary-btn">
        Login
      </button>
    </div>
  );
};

export default Login;
