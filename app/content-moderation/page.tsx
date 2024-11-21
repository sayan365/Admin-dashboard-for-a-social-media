'use client';

import React, { useEffect, useState } from 'react';
import { fetchData } from '../utils/api'; // Adjusted to your API setup
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const ContentModeration = () => {
  const [contentMetrics, setContentMetrics] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMetrics = async () => {
      try {
        const data = await fetchData();
        const metrics = data?.dashboard?.contentMetrics?.daily;
        setContentMetrics(metrics);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMetrics();
  }, []);

  if (loading) {
    return <div>Loading content moderation metrics...</div>;
  }

  if (error) {
    return <div>Error loading metrics: {error}</div>;
  }

  if (!contentMetrics) {
    return <div>No content metrics data available.</div>;
  }

  const {
    totalPosts,
    totalCategory,
    totalPostShares,
    totalViews,
    totalPostBlocked,
    totalPostDeleted,
    chartData,
  } = contentMetrics;

  const metrics = [
    { title: 'Total Posts', value: totalPosts, bgColor: 'bg-blue-100' },
    {
      title: 'Total Categories',
      value: totalCategory,
      bgColor: 'bg-green-100',
    },

    { title: 'Post Shares', value: totalPostShares, bgColor: 'bg-purple-100' },
    { title: 'Total Views', value: totalViews, bgColor: 'bg-red-100' },
    { title: 'Blocked Posts', value: totalPostBlocked, bgColor: 'bg-gray-100' },
    {
      title: 'Deleted Posts',
      value: totalPostDeleted,
      bgColor: 'bg-indigo-100',
    },
  ];

  return (
    <div className="space-y-8 p-6">
      <h2 className="text-2xl font-bold mb-6">Content Moderation</h2>

      {/* Metrics Cards */}
      <div className="grid grid-cols-3 gap-6">
        {metrics.map((metric, idx) => (
          <div
            key={idx}
            className={`${metric.bgColor} p-4 shadow-md rounded-lg text-center`}
          >
            <h3 className="text-lg font-semibold mb-2">{metric.title}</h3>
            <p className="text-3xl font-bold">{metric.value}</p>
          </div>
        ))}
      </div>

      {/* Content Trends Chart */}
      <div className="p-6 bg-white shadow-md rounded-lg">
        <h3 className="text-lg font-semibold mb-4">Content Trends</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={chartData}>
            <XAxis
              dataKey="timestamp"
              tickFormatter={(timestamp) =>
                new Date(timestamp).toLocaleTimeString()
              }
            />
            <YAxis />
            <Tooltip
              labelFormatter={(label) =>
                `Time: ${new Date(label).toLocaleTimeString()}`
              }
            />
            <Line type="monotone" dataKey="count" stroke="#4CAF50" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ContentModeration;
