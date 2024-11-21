'use client';

import { useState } from 'react';
import Link from 'next/link';

const Dashboard = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
      {/* Main Content */}
      <main className="flex-1 p-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white">
            Dashboard
          </h1>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
            Manage your data and metrics here.
          </p>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
