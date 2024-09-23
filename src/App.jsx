import LandingPage from "./components/LandingPage";
import Dashboard from "./components/Dashboard";
import useAuth from "./hooks/useAuth";

function App() {
  const { authenticated, login, logout, viewProfile, editProfile } = useAuth();

  if (!authenticated) {
    return <LandingPage login={login} />;
  }

  return (
    <div>
      <Dashboard
        logout={logout}
        viewProfile={viewProfile}
        editProfile={editProfile}
      />
    </div>
  );
}

export default App;
