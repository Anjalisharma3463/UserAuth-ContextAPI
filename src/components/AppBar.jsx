import { useAuth } from "../Context/AuthSystem";

const AppBar = () => {
  const { user } = useAuth();

  return (
    <nav style={{ padding: "10px", background: "#333", color: "white" }}>
      <h2>MyApp</h2>
      {user && <p>Welcome, {user}!</p>}
    </nav>
  );
};

export default AppBar;
