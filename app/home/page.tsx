'use client';

import Link from 'next/link';

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="bg-blue-600 text-white p-6">
        <div className="max-w-screen-xl mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-semibold">Admin Dashboard</h1>
          <nav className="space-x-6">
            <Link href="/dashboard" className="text-xl hover:text-gray-300">
              Dashboard
            </Link>
            <Link href="/analytics" className="text-xl hover:text-gray-300">
              Analytics
            </Link>
            <Link
              href="/content-moderation"
              className="text-xl hover:text-gray-300"
            >
              Content Moderation
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 px-6 py-12">
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
        </div>
      </main>
    </div>
  );
};

export default HomePage;
