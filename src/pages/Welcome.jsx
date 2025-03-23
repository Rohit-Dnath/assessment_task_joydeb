import { useNavigate } from "react-router-dom";
import "./Welcome.css"; // Import CSS for styling

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div className="welcome-container">
      <div className="welcome-content">
        <h2 className="welcome-title">Welcome to PopX</h2>
        <p className="welcome-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>
        <div className="welcome-buttons">
          <button
            onClick={() => navigate("/signup")}
            className="welcome-primary-btn"
          >
            Create Account
          </button>
          <button
            onClick={() => navigate("/login")}
            className="welcome-secondary-btn"
          >
            Already Registered? Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
