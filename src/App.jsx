import LandingPage from "./components/LandingPage";
import Dashboard from "./components/Dashboard";
import useAuth from "./hooks/useAuth";

import Header from './components/Header';
import ServicesSection from './components/ServicesSection';
import BillsSection from './components/BillsSection';
import NotificationsSection from './components/NotificationsSection';
import ProfileSection from './components/ProfileSection';

function App() {
  const { authenticated, login, logout, viewProfile, editProfile } = useAuth();

  if (!authenticated) {
    return <LandingPage login={login} />;
  }

  return (
      <div>
          {/*<Dashboard*/}
          {/*    logout={logout}*/}
          {/*    viewProfile={viewProfile}*/}
          {/*    editProfile={editProfile}*/}
          {/*/>*/}

          <Header />
          <main className="p-6">
              <div className="grid grid-cols-3 gap-6">
                  <div className="col-span-2">
                      <ServicesSection />
                      <BillsSection />
                  </div>
                  <div>
                      <NotificationsSection />
                      <ProfileSection />
                  </div>
              </div>
          </main>

      </div>
  );
}

export default App;
