import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

const UserDashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-dark-bg">
      <header className="bg-white dark:bg-dark-card shadow-sm border-b border-gray-200 dark:border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-dark-text">User Dashboard</h1>
            <div className="text-sm text-gray-600 dark:text-dark-text-secondary">
              SpiderBot Trading Platform
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Routes>
          <Route path="/" element={<DashboardHome />} />
          <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Routes>
      </main>
    </div>
  );
};

const DashboardHome: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-dark-card rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-dark-text mb-4">
          Welcome to SpiderBot
        </h2>
        <p className="text-gray-600 dark:text-dark-text-secondary">
          Your institutional crypto trading platform is ready.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-dark-card rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-dark-text mb-2">
            Portfolio Value
          </h3>
          <p className="text-3xl font-bold text-primary">$0.00</p>
          <p className="text-sm text-gray-600 dark:text-dark-text-secondary mt-2">
            +0.00% (24h)
          </p>
        </div>

        <div className="bg-white dark:bg-dark-card rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-dark-text mb-2">
            Active Bots
          </h3>
          <p className="text-3xl font-bold text-success">0</p>
          <p className="text-sm text-gray-600 dark:text-dark-text-secondary mt-2">
            No active trading bots
          </p>
        </div>

        <div className="bg-white dark:bg-dark-card rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-dark-text mb-2">
            Total P&L
          </h3>
          <p className="text-3xl font-bold text-gray-900 dark:text-dark-text">$0.00</p>
          <p className="text-sm text-gray-600 dark:text-dark-text-secondary mt-2">
            All time
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
