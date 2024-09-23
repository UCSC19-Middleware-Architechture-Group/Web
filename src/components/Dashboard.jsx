import Widgets from "./Widgets";

const Dashboard = ({ logout, viewProfile, editProfile }) => {
  return (
    <div>
      <header>
        <h1 className="text-lg">Dashboard</h1>
        <div>
          <button className="p-2 m-2 bg-red-300" onClick={viewProfile}>
            View Profile
          </button>
          <button className="p-2 m-2 bg-red-300" onClick={editProfile}>
            Edit Profile
          </button>
          <button className="p-2 m-2 bg-red-300" onClick={logout}>
            Logout
          </button>
        </div>
      </header>
      <main>
        <Widgets />
      </main>
    </div>
  );
};

export default Dashboard;
