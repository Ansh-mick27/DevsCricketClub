import React, { useState } from 'react';

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [credentials, setCredentials] = useState({ username: '', password: '' });

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
  };

  if (!isAuthenticated) {
    return (
      <section id="admin" className="py-16 bg-gray-50 min-h-screen flex items-center justify-center">
        <div className="max-w-md w-full mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-cricket-green rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">🔐</span>
              </div>
              <h2 className="text-2xl font-bold text-cricket-green">Admin Login</h2>
              <p className="text-gray-600 mt-2">Access restricted area</p>
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
                Login
              </button>
            </form>

            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600 text-center">
                <strong>Demo Credentials:</strong><br />
                Username: admin<br />
                Password: cricket123
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
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-cricket-green">Admin Dashboard</h2>
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors"
          >
            Logout
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Member Management */}
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

          {/* Events Management */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-cricket-lightgreen rounded-lg flex items-center justify-center mr-4">
                <span className="text-white text-xl">📅</span>
              </div>
              <h3 className="text-xl font-bold text-cricket-green">Events</h3>
            </div>
            <p className="text-gray-600 mb-4">Manage matches and training sessions</p>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Upcoming Matches:</span>
                <span className="font-bold">5</span>
              </div>
              <div className="flex justify-between">
                <span>Training Sessions:</span>
                <span className="font-bold">12</span>
              </div>
              <div className="flex justify-between">
                <span>Tournaments:</span>
                <span className="font-bold">2</span>
              </div>
            </div>
          </div>

          {/* Financial Overview */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-cricket-gold rounded-lg flex items-center justify-center mr-4">
                <span className="text-cricket-green text-xl">💰</span>
              </div>
              <h3 className="text-xl font-bold text-cricket-green">Finance</h3>
            </div>
            <p className="text-gray-600 mb-4">Financial overview and management</p>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Monthly Revenue:</span>
                <span className="font-bold">₹45,000</span>
              </div>
              <div className="flex justify-between">
                <span>Expenses:</span>
                <span className="font-bold">₹32,000</span>
              </div>
              <div className="flex justify-between">
                <span>Net Profit:</span>
                <span className="font-bold text-green-600">₹13,000</span>
              </div>
            </div>
          </div>

          {/* Equipment Management */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-cricket-green rounded-lg flex items-center justify-center mr-4">
                <span className="text-white text-xl">🏏</span>
              </div>
              <h3 className="text-xl font-bold text-cricket-green">Equipment</h3>
            </div>
            <p className="text-gray-600 mb-4">Manage cricket equipment inventory</p>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Cricket Bats:</span>
                <span className="font-bold">24</span>
              </div>
              <div className="flex justify-between">
                <span>Balls:</span>
                <span className="font-bold">156</span>
              </div>
              <div className="flex justify-between">
                <span>Protective Gear:</span>
                <span className="font-bold">48</span>
              </div>
            </div>
          </div>

          {/* Analytics */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-cricket-lightgreen rounded-lg flex items-center justify-center mr-4">
                <span className="text-white text-xl">📊</span>
              </div>
              <h3 className="text-xl font-bold text-cricket-green">Analytics</h3>
            </div>
            <p className="text-gray-600 mb-4">Performance and engagement metrics</p>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Website Visits:</span>
                <span className="font-bold">2,345</span>
              </div>
              <div className="flex justify-between">
                <span>Social Media:</span>
                <span className="font-bold">1,890</span>
              </div>
              <div className="flex justify-between">
                <span>Engagement Rate:</span>
                <span className="font-bold text-green-600">8.5%</span>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-cricket-gold rounded-lg flex items-center justify-center mr-4">
                <span className="text-cricket-green text-xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold text-cricket-green">Quick Actions</h3>
            </div>
            <div className="space-y-3">
              <button className="w-full bg-cricket-green text-white py-2 rounded-lg hover:bg-cricket-lightgreen transition-colors">
                Add New Member
              </button>
              <button className="w-full bg-cricket-lightgreen text-white py-2 rounded-lg hover:bg-cricket-green transition-colors">
                Schedule Match
              </button>
              <button className="w-full border border-cricket-green text-cricket-green py-2 rounded-lg hover:bg-cricket-green hover:text-white transition-colors">
                Send Newsletter
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Admin;