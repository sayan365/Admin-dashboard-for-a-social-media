'use client';

import { useQuery } from 'react-query';
import { fetchDashboardData } from '../utils/api'; // API function for data fetching
import { Bar, Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
} from 'chart.js';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, PointElement, LineElement);

const DashboardPage = () => {
  const { data, isLoading, error } = useQuery('dashboardData', fetchDashboardData);

  if (isLoading) return <div className="p-6 text-center">Loading...</div>;
  if (error) return <div className="p-6 text-red-500 text-center">Failed to load data</div>;

  // Real Data from the API
  const userMetrics = data?.dashboard?.userMetrics?.daily || {};
  const contentMetrics = data?.dashboard?.contentMetrics?.daily || {};

  // User Growth Chart
  const userGrowthData = {
    labels: userMetrics.chartData?.map((item: any) => item.timestamp) || [],
    datasets: [
      {
        label: 'User Growth',
        data: userMetrics.chartData?.map((item: any) => item.count) || [],
        borderColor: '#4F46E5',
        backgroundColor: 'rgba(79, 70, 229, 0.5)',
      },
    ],
  };

  // Engagement Metrics using Content Metrics
  const engagementData = {
    labels: ['Total Posts', 'Shares', 'Comments', 'Blocked Posts', 'Deleted Posts'],
    datasets: [
      {
        label: 'Engagement Metrics',
        data: [
          contentMetrics.totalPosts || 0,
          contentMetrics.totalPostShares || 0,
          contentMetrics.totalComments || 0,
          contentMetrics.totalPostBlocked || 0,
          contentMetrics.totalPostDeleted || 0,
        ],
        backgroundColor: ['#4F46E5', '#10B981', '#F59E0B', '#EF4444', '#3B82F6'],
      },
    ],
  };

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Dashboard Overview</h1>

      {/* Display User Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
          <h3 className="text-lg font-semibold">Total Users</h3>
          <p className="text-2xl font-bold text-blue-600">{userMetrics.totalUser || 0}</p>
        </div>

        <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
          <h3 className="text-lg font-semibold">Active Users</h3>
          <p className="text-2xl font-bold text-green-600">{userMetrics.activeUser || 0}</p>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Line Chart for User Growth */}
        <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
          <h3 className="text-lg font-bold mb-4">User Growth</h3>
          <Line data={userGrowthData} />
        </div>

        {/* Bar Chart for Engagement Metrics */}
        <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
          <h3 className="text-lg font-bold mb-4">Engagement Metrics</h3>
          <Bar data={engagementData} />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
