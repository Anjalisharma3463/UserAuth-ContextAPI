import { useAuth } from "../Context/AuthSystem";

const Home = () => {
  const { user } = useAuth();

  return (
    <div>
      <h2>Welcome, {user}!</h2>
      <p>You are logged in.</p>
    </div>
  );
};

export default Home;
