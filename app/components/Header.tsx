const Header = () => {
  return (
    <div className="bg-white shadow w-full p-4 flex justify-between items-center">
      <h2 className="text-lg font-medium">Dashboard</h2>
      <div className="space-x-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          Notifications
        </button>
        <button className="bg-gray-200 px-4 py-2 rounded">Profile</button>
      </div>
    </div>
  );
};

export default Header;
