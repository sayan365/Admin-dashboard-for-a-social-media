import Link from 'next/link';

const Sidebar = () => {
  return (
    <div className="bg-gray-800 text-white w-64 p-4 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>
      <ul className="space-y-4">
        <li className="hover:bg-gray-700 p-2 rounded">
          <Link
            href="/home"
            className="block py-2 px-4 rounded-lg transition duration-200"
          >
            Home
          </Link>
        </li>
        <li className="hover:bg-gray-700 p-2 rounded">
          <Link
            href="/dashboard"
            className="block py-2 px-4 rounded-lg transition duration-200"
          >
            Dashboard
          </Link>
        </li>
        <li className="hover:bg-gray-700 p-2 rounded">
          <Link
            href="/user-management"
            className="block py-2 px-4 rounded-lg transition duration-200"
          >
            User Management
          </Link>
        </li>
        <li className="hover:bg-gray-700 p-2 rounded">
          <Link
            href="/content-moderation"
            className="block py-2 px-4 rounded-lg transition duration-200"
          >
            Content Moderation
          </Link>
        </li>
        <li className="hover:bg-gray-700 p-2 rounded">
          <Link
            href="/analytics"
            className="block py-2 px-4 rounded-lg transition duration-200"
          >
            Analytics
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
