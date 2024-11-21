import './globals.css';
import Sidebar from './components/Sidebar';
import QueryProvider from './components/QueryProvider'; // Import the new QueryProvider
import React, { createContext, useContext, useEffect, useState } from 'react';
import './globals.css';

export const metadata = {
  title: 'Admin Dashboard',
  description: 'A simple admin dashboard layout',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="flex min-h-screen">
          <Sidebar />
          <main className="flex-1">
            <QueryProvider>{children}</QueryProvider>{' '}
            {/* Wrap children with QueryProvider */}
          </main>
        </div>
      </body>
    </html>
  );
}
