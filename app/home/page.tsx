'use client';

import Link from 'next/link';

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 relative overflow-hidden">

      {/* Main Content */}
      <main className="flex-1 px-6 py-12 relative z-10">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white">
            Welcome to Your Admin Dashboard
          </h2>
          <p className="mt-4 text-xl text-gray-500 dark:text-gray-300">
            Manage your content, analyze metrics, and monitor user activity.
          </p>
          <div className="mt-8 flex justify-center gap-8">
            <Link href="/dashboard">
              <button className="px-6 py-3 text-lg bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">
                Go to Dashboard
              </button>
            </Link>
            <Link href="/analytics">
              <button className="px-6 py-3 text-lg bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition duration-300">
                View Analytics
              </button>
            </Link>
          </div>
          <div className="image-container">
            <img src="https://img.freepik.com/free-vector/analyze-concept-illustration_114360-6491.jpg" alt="Analysis Concept" />
          </div>

        </div>
      </main>
    </div>
  );
};

export default HomePage;
