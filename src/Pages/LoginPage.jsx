import { Link } from "react-router-dom";
import './LoginPage.css'; // Import a separate CSS file for styling

export default function LoginPage() {
  return (
    <div className="login-container">
      <div className="login-box">
        <h1 className="login-title">Login</h1>
        <form className="login-form">
          <input
            type="email"
            placeholder="your@gmail.com"
            className="login-input"
          />
          <input
            type="password"
            placeholder="Password"
            className="login-input"
          />
          <button className="login-button">Login</button>
          <div className="login-footer">
            <span>Dont have an account? </span>
            <Link className="register-link" to={'/register'}>
              Register now
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
