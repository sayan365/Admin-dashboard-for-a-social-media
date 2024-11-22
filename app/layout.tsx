'use client';

import './globals.css';
import Sidebar from './components/Sidebar';
import QueryProvider from './components/QueryProvider';
import React, { useState } from 'react';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <html lang="en">
      <body>
        {/* Layout Wrapper */}
        <div className="flex min-h-screen relative">
          {/* Sidebar */}
          <div
            className={`fixed top-0 left-0 h-full  bg-gray-800 text-white z-40 transition-transform transform ${
              isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
            } md:static md:translate-x-0 w-64`}
          >
            
            <Sidebar />
          </div>

          {/* Overlay */}
          {isSidebarOpen && (
            <div
              className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
              onClick={closeSidebar}
            ></div>
          )}

          {/* Main Content */}
          <main className="flex-1">
            {/* Toggle Button */}
            <button
              onClick={toggleSidebar}
              className="absolute top-4 right-4 z-50 bg-blue-600 text-white p-2 rounded-lg md:hidden"
            >
              {isSidebarOpen ? 'Close' : 'Menu'}
            </button>

            {/* Query Provider Wrap */}
            <QueryProvider>{children}</QueryProvider>
          </main>
        </div>
      </body>
    </html>
  );
}
