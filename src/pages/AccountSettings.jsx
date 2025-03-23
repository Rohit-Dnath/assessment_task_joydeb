import { useNavigate } from "react-router-dom";
import "./AccountSettings.css";

const AccountSettings = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="header">
        <h2>Account Settings</h2>
      </div>
      <div className="profile-section">
        <div className="profile-info">
          <div className="profile-image-container">
            <img src="/src/assets/image.png" alt="Profile" className="profile-image" />
            <div className="camera-badge">
              <span className="camera-icon">📷</span>
            </div>
          </div>
          <div className="user-details">
            <h3>Marry Doe</h3>
            <p className="email">Marry@Gmail.com</p>
          </div>
        </div>
        <p className="description">
          Lorem Ipsum Dolor Sit Amet. Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
        </p>
      </div>
    </div>
  );
};

export default AccountSettings;