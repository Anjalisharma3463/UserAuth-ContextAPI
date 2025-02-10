import { AuthProvider, useAuth } from "./Context/AuthSystem";
import AppBar from "./components/AppBar";
import Login from "./components/Login";
import Home from "./components/Home";

function App() {
  return (
    <AuthProvider>
      <MainApp />
    </AuthProvider>
  );
}

function MainApp() {
  const { user } = useAuth();
  return (
    <div>
      <AppBar />
      {user ? <Home /> : <Login />}
    </div>
  );
}

export default App;
