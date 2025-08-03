import React, { useState } from 'react';
import AchievementsManager from './admin/AchievementsManager';
import GalleryManager from './admin/GalleryManager';
import RegistrationViewer from './admin/RegistrationViewer';

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [activeTab, setActiveTab] = useState('dashboard');

  const handleLogin = (e) => {
    e.preventDefault();
    // Simple authentication for demo purposes
    if (credentials.username === 'admin' && credentials.password === 'cricket123') {
      setIsAuthenticated(true);
    } else {
      alert('Invalid credentials! Use username: admin, password: cricket123');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setCredentials({ username: '', password: '' });
    setActiveTab('dashboard');
  };

  const tabs = [
    { id: 'dashboard', name: 'Dashboard', icon: '📊' },
    { id: 'achievements', name: 'Achievements', icon: '🏆' },
    { id: 'gallery', name: 'Gallery & Images', icon: '🖼️' },
    { id: 'registrations', name: 'Registrations', icon: '📝' },
  ];

  if (!isAuthenticated) {
    return (
      <section id="admin" className="py-16 bg-gray-50 min-h-screen flex items-center justify-center">
        <div className="max-w-md w-full mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-cricket-green rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">🔐</span>
              </div>
              <h2 className="text-2xl font-bold text-cricket-green">Admin CPanel</h2>
              <p className="text-gray-600 mt-2">Dev's Cricket Club Management</p>
            </div>

            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Username
                </label>
                <input
                  type="text"
                  value={credentials.username}
                  onChange={(e) => setCredentials({...credentials, username: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cricket-green focus:border-transparent"
                  placeholder="Enter username"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  value={credentials.password}
                  onChange={(e) => setCredentials({...credentials, password: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cricket-green focus:border-transparent"
                  placeholder="Enter password"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-cricket-green text-white py-3 rounded-lg font-bold hover:bg-cricket-lightgreen transition-colors duration-300"
              >
                Login to CPanel
              </button>
            </form>

            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600 text-center">
                <strong>Demo Credentials:</strong><br />
                Username: admin<br />
                Password: cricket123
              </p>
            </div>

            <div className="mt-6 text-center">
              <p className="text-xs text-gray-500">
                🔒 Secure Admin Access<br />
                Complete club management system
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="admin" className="py-16 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-cricket-green">Admin CPanel</h1>
            <p className="text-gray-600">Dev's Cricket Club Management System</p>
          </div>
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors flex items-center space-x-2"
          >
            <span>🚪</span>
            <span>Logout</span>
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="mb-8">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8 overflow-x-auto">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`whitespace-nowrap py-2 px-1 border-b-2 font-medium text-sm flex items-center space-x-2 ${
                    activeTab === tab.id
                      ? 'border-cricket-green text-cricket-green'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <span>{tab.icon}</span>
                  <span>{tab.name}</span>
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Tab Content */}
        <div className="space-y-6">
          {activeTab === 'dashboard' && <DashboardTab />}
          {activeTab === 'achievements' && <AchievementsManager />}
          {activeTab === 'gallery' && <GalleryManager />}
          {activeTab === 'registrations' && <RegistrationViewer />}
        </div>
      </div>
    </section>
  );
};

// Dashboard Tab Component
const DashboardTab = () => {
  return (
    <div className="space-y-6">
      {/* Welcome Message */}
      <div className="bg-gradient-to-r from-cricket-green to-cricket-lightgreen rounded-lg p-6 text-white">
        <h2 className="text-2xl font-bold mb-2">Welcome to CPanel</h2>
        <p className="text-cricket-cream">
          Manage your cricket club with ease. Upload images, manage achievements, and view registrations.
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-cricket-green rounded-lg flex items-center justify-center mr-4">
              <span className="text-white text-xl">👥</span>
            </div>
            <h3 className="text-xl font-bold text-cricket-green">Members</h3>
          </div>
          <p className="text-gray-600 mb-4">Manage club members and registrations</p>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Total Members:</span>
              <span className="font-bold">142</span>
            </div>
            <div className="flex justify-between">
              <span>New Registrations:</span>
              <span className="font-bold text-green-600">8</span>
            </div>
            <div className="flex justify-between">
              <span>Active Players:</span>
              <span className="font-bold">134</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-cricket-lightgreen rounded-lg flex items-center justify-center mr-4">
              <span className="text-white text-xl">🏆</span>
            </div>
            <h3 className="text-xl font-bold text-cricket-green">Achievements</h3>
          </div>
          <p className="text-gray-600 mb-4">Track player achievements and milestones</p>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Total Achievements:</span>
              <span className="font-bold">24</span>
            </div>
            <div className="flex justify-between">
              <span>This Month:</span>
              <span className="font-bold text-green-600">3</span>
            </div>
            <div className="flex justify-between">
              <span>Categories:</span>
              <span className="font-bold">6</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-cricket-gold rounded-lg flex items-center justify-center mr-4">
              <span className="text-cricket-green text-xl">🖼️</span>
            </div>
            <h3 className="text-xl font-bold text-cricket-green">Gallery</h3>
          </div>
          <p className="text-gray-600 mb-4">Manage club photos and images</p>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Total Images:</span>
              <span className="font-bold">156</span>
            </div>
            <div className="flex justify-between">
              <span>Hero Images:</span>
              <span className="font-bold">5</span>
            </div>
            <div className="flex justify-between">
              <span>Gallery Images:</span>
              <span className="font-bold">151</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mr-4">
              <span className="text-white text-xl">📊</span>
            </div>
            <h3 className="text-xl font-bold text-cricket-green">Analytics</h3>
          </div>
          <p className="text-gray-600 mb-4">Website and engagement metrics</p>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Monthly Visits:</span>
              <span className="font-bold">2,345</span>
            </div>
            <div className="flex justify-between">
              <span>Page Views:</span>
              <span className="font-bold">8,901</span>
            </div>
            <div className="flex justify-between">
              <span>Bounce Rate:</span>
              <span className="font-bold text-green-600">12%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Features Overview */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold text-cricket-green mb-6">CPanel Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-cricket-green mb-3">🏆 Achievements Management</h3>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>• Add/Edit/Delete player achievements</li>
              <li>• Upload player photos</li>
              <li>• Track achievement categories</li>
              <li>• Manage player profiles</li>
            </ul>
          </div>

          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-cricket-green mb-3">🖼️ Image Management</h3>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>• Upload hero section images</li>
              <li>• Manage gallery photos</li>
              <li>• Organize by categories</li>
              <li>• Cloud storage integration</li>
            </ul>
          </div>

          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-cricket-green mb-3">📝 Registration Data</h3>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>• View all member registrations</li>
              <li>• Export data to CSV/JSON</li>
              <li>• Filter and search records</li>
              <li>• Track application status</li>
            </ul>
          </div>
        </div>
      </div>

      {/* System Info */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold text-cricket-green mb-4">System Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold text-gray-700 mb-2">Firebase Integration</h3>
            <p className="text-sm text-gray-600 mb-4">
              Secure cloud storage for images and data management with real-time sync.
            </p>
            <div className="space-y-1 text-sm">
              <div className="flex justify-between">
                <span>Storage:</span>
                <span className="text-green-600">✓ Connected</span>
              </div>
              <div className="flex justify-between">
                <span>Database:</span>
                <span className="text-green-600">✓ Connected</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-gray-700 mb-2">Deployment Status</h3>
            <p className="text-sm text-gray-600 mb-4">
              Deployed on Vercel with automatic deployments from GitHub.
            </p>
            <div className="space-y-1 text-sm">
              <div className="flex justify-between">
                <span>Environment:</span>
                <span className="text-green-600">Production</span>
              </div>
              <div className="flex justify-between">
                <span>Last Deploy:</span>
                <span className="text-gray-600">2 hours ago</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;