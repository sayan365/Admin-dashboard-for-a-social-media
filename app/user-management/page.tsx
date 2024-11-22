'use client';

import React, { useEffect, useState } from 'react';
import { fetchUserActivity } from '../utils/api'; // Assume API integration logic
import {
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const UserManagement = () => {
  const [metrics, setMetrics] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getMetrics = async () => {
      const data = await fetchUserActivity(); // Fetching API data
      if (data && data.dashboard && data.dashboard.userMetrics) {
        setMetrics(data.dashboard.userMetrics.daily);
      }
      setLoading(false);
    };
    getMetrics();
  }, []);

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  if (!metrics) {
    return (
      <div className="text-center text-red-500">
        No data available for user metrics.
      </div>
    );
  }

  // Pie Chart Data
  const pieChartData = [
    { name: 'Active Users', value: metrics.activeUser },
    { name: 'Creators', value: metrics.creator },
  ];

  const COLORS = ['#4CAF50', '#FFC107'];

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Overview Section */}
      <h2 className="text-2xl font-bold mb-4">User Management</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="p-4 bg-blue-100 rounded shadow text-center">
          <h3 className="text-lg font-semibold">Total Users</h3>
          <p className="text-2xl font-bold">{metrics.totalUser}</p>
        </div>
        <div className="p-4 bg-green-100 rounded shadow text-center">
          <h3 className="text-lg font-semibold">Active Users</h3>
          <p className="text-2xl font-bold">{metrics.activeUser}</p>
        </div>
        <div className="p-4 bg-yellow-100 rounded shadow text-center">
          <h3 className="text-lg font-semibold">Total Referrals</h3>
          <p className="text-2xl font-bold">{metrics.totalReferral}</p>
        </div>
        <div className="p-4 bg-purple-100 rounded shadow text-center">
          <h3 className="text-lg font-semibold">Creators</h3>
          <p className="text-2xl font-bold">{metrics.creator}</p>
        </div>
      </div>

      {/* Visual Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Pie Chart for Active Users and Creators */}
        <div className="p-6 bg-white shadow rounded">
          <h3 className="text-lg font-bold mb-4">User Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={pieChartData}
                cx="50%"
                cy="50%"
                label
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {pieChartData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Line Chart for Daily Trends */}
        <div className="p-6 bg-white shadow rounded">
          <h3 className="text-lg font-bold mb-4">User Activity Trends</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={metrics.chartData}>
              <XAxis dataKey="timestamp" tick={{ fontSize: 12 }} />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="count" stroke="#4CAF50" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default UserManagement;
