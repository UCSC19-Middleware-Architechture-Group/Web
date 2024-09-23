const LandingPage = ({ login }) => {
  return (
    <div className="p-5">
      <h1 className="text-xl">Welcome to Our Platform</h1>
      <p>Please login to continue...</p>
      <button className="p-3 m-2 bg-green-300" onClick={login}>
        Login
      </button>
    </div>
  );
};

export default LandingPage;
