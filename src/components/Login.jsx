import { useState } from "react";
import { useAuth } from "../Context/AuthSystem";

const Login = () => {
  const [username, setUsername] = useState("");
  const { login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim()) {
      login(username);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
