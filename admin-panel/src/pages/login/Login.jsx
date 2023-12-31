import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../redux/apiCalls";
import "./Login.css";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };

  return (
    <div className="Container">
      <div className="Wrapper">
        <h1 className="title">SIGN IN AS ADMIN</h1>
        <form className="Form">
          <input
            style={{ padding: 10, marginBottom: 20 }}
            type="text"
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
            className="Input"
          />
          <input
            style={{ padding: 10, marginBottom: 20 }}
            type="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
            className="Input"
          />
          <button
            onClick={handleClick}
            style={{ padding: 10, width: 100 }}
            className="login_button"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
