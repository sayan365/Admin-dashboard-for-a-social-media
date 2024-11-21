'use client';

import { useQuery } from 'react-query';
import { fetchData } from '../utils/api'; // Updated fetch function name
import { Bar, Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

const Analytics = () => {
  const { data, isLoading, error } = useQuery('dashboardData', fetchData);

  if (isLoading) {
    return <div className="p-6">Loading...</div>;
  }

  if (error) {
    return <div className="p-6 text-red-500">Error loading data.</div>;
  }

  // Extract user metrics and engagement data
  const userMetrics = data?.dashboard?.userMetrics || {};
  const engagementMetrics = data?.dashboard?.engagementMetrics?.allTime || {};

  // Bar Chart Data for User Metrics (Total Users, Active Users, Creators)
  const barData = {
    labels: ['Total Users', 'Active Users', 'Creators'],
    datasets: [
      {
        label: 'User Metrics',
        data: [
          userMetrics.daily.totalUser,
          userMetrics.daily.activeUser,
          userMetrics.daily.creator,
        ],
        backgroundColor: ['#4F46E5', '#10B981', '#F59E0B'],
        borderColor: ['#3B82F6', '#059669', '#D97706'],
        borderWidth: 1,
      },
    ],
  };

  // Line Chart Data for User Activity (Hourly)
  const lineData = {
    labels: userMetrics.daily.chartData.map((item: any) => item.timestamp),
    datasets: [
      {
        label: 'User Activity',
        data: userMetrics.daily.chartData.map((item: any) => item.count),
        borderColor: '#4F46E5',
        backgroundColor: 'rgba(79, 70, 229, 0.5)',
      },
    ],
  };

  // Bar Chart Data for Engagement Metrics (Views, Likes, Shares, Private Messages)
  const engagementBarData = {
    labels: ['Total Views', 'Total Likes', 'Private Messages'],
    datasets: [
      {
        label: 'Engagement Metrics',
        data: [
          engagementMetrics.totalViews,
          engagementMetrics.totalLikes,
          engagementMetrics.privateChats, // Assuming total private messages exists in the API response
        ],
        backgroundColor: ['#10B981', '#F59E0B', '#EF4444', '#3B82F6'],
        borderColor: ['#059669', '#D97706', '#DC2626', '#3B82F6'],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">Analytics Dashboard</h1>

      {/* User Metrics (Bar Chart) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition duration-300 p-6">
          <h2 className="text-lg font-bold mb-4">User Metrics</h2>
          <Bar data={barData} />
        </div>

        {/* User Activity (Line Chart) */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition duration-300 p-6">
          <h2 className="text-lg font-bold mb-4">User Activity</h2>
          <Line data={lineData} />
        </div>
      </div>

      {/* Engagement Metrics (Bar Chart) */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition duration-300 p-6 mt-6">
        <h2 className="text-lg font-bold mb-4">Engagement Metrics</h2>
        <Bar data={engagementBarData} />
      </div>
    </div>
  );
};

export default Analytics;
