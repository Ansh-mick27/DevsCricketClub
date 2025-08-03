import React, { useState, useEffect } from 'react';
import { getRegistrations, exportToCSV } from '../../utils/firebaseUtils';

const RegistrationViewer = () => {
  const [registrations, setRegistrations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    loadRegistrations();
  }, []);

  const loadRegistrations = async () => {
    setLoading(true);
    try {
      const result = await getRegistrations();
      if (result.success) {
        setRegistrations(result.data);
      } else {
        console.error('Failed to load registrations:', result.error);
      }
    } catch (error) {
      console.error('Error loading registrations:', error);
    }
    setLoading(false);
  };

  const filteredRegistrations = registrations.filter(registration => {
    const matchesFilter = filter === 'all' || registration.status === filter;
    const matchesSearch = !searchTerm || 
      registration.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      registration.contact?.includes(searchTerm) ||
      registration.email?.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesFilter && matchesSearch;
  });

  const handleExportCSV = () => {
    if (filteredRegistrations.length === 0) {
      alert('No data to export');
      return;
    }

    const exportData = filteredRegistrations.map(reg => ({
      Name: reg.name || '',
      Age: reg.age || '',
      Role: reg.role || '',
      Contact: reg.contact || '',
      Email: reg.email || '',
      Experience: reg.experience || '',
      EmergencyContact: reg.emergencyContact || '',
      PreviousClubs: reg.previousClubs || '',
      Availability: Array.isArray(reg.availability) ? reg.availability.join('; ') : '',
      Status: reg.status || 'pending',
      SubmittedAt: reg.submittedAt ? new Date(reg.submittedAt.seconds * 1000).toISOString() : ''
    }));

    const filename = `cricket_club_registrations_${new Date().toISOString().split('T')[0]}.csv`;
    exportToCSV(exportData, filename);
  };

  const handleExportJSON = () => {
    if (filteredRegistrations.length === 0) {
      alert('No data to export');
      return;
    }

    const dataStr = JSON.stringify(filteredRegistrations, null, 2);
    const dataBlob = new Blob([dataStr], {type: 'application/json'});
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `cricket_club_registrations_${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const formatDate = (timestamp) => {
    if (!timestamp) return 'N/A';
    const date = timestamp.seconds ? new Date(timestamp.seconds * 1000) : new Date(timestamp);
    return date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
  };

  const getStatusBadge = (status) => {
    const colors = {
      pending: 'bg-yellow-100 text-yellow-800',
      approved: 'bg-green-100 text-green-800',
      rejected: 'bg-red-100 text-red-800'
    };
    return colors[status] || colors.pending;
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-cricket-green">Registration Data</h2>
        <div className="flex space-x-2">
          <button
            onClick={handleExportCSV}
            className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors"
          >
            Export CSV
          </button>
          <button
            onClick={handleExportJSON}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Export JSON
          </button>
          <button
            onClick={loadRegistrations}
            className="bg-cricket-green text-white px-4 py-2 rounded-lg hover:bg-cricket-lightgreen transition-colors"
          >
            Refresh
          </button>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="mb-6 flex flex-col sm:flex-row gap-4">
        <div className="flex-1">
          <input
            type="text"
            placeholder="Search by name, contact, or email..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cricket-green focus:border-transparent"
          />
        </div>
        <div>
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cricket-green focus:border-transparent"
          >
            <option value="all">All Status</option>
            <option value="pending">Pending</option>
            <option value="approved">Approved</option>
            <option value="rejected">Rejected</option>
          </select>
        </div>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-gray-50 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-cricket-green">{registrations.length}</div>
          <div className="text-sm text-gray-600">Total Registrations</div>
        </div>
        <div className="bg-yellow-50 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-yellow-600">
            {registrations.filter(r => r.status === 'pending').length}
          </div>
          <div className="text-sm text-gray-600">Pending</div>
        </div>
        <div className="bg-green-50 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-green-600">
            {registrations.filter(r => r.status === 'approved').length}
          </div>
          <div className="text-sm text-gray-600">Approved</div>
        </div>
        <div className="bg-red-50 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-red-600">
            {registrations.filter(r => r.status === 'rejected').length}
          </div>
          <div className="text-sm text-gray-600">Rejected</div>
        </div>
      </div>

      {loading ? (
        <div className="text-center py-8">
          <div className="inline-flex items-center">
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-cricket-green" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Loading registrations...
          </div>
        </div>
      ) : filteredRegistrations.length === 0 ? (
        <div className="text-center py-8 text-gray-500">
          {registrations.length === 0 ? 'No registrations found.' : 'No registrations match your criteria.'}
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Player Info
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Contact
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Cricket Info
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Submitted
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredRegistrations.map((registration) => (
                <tr key={registration.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="text-sm font-medium text-gray-900">{registration.name}</div>
                      <div className="text-sm text-gray-500">Age: {registration.age}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="text-sm text-gray-900">{registration.contact}</div>
                      {registration.email && (
                        <div className="text-sm text-gray-500">{registration.email}</div>
                      )}
                      {registration.emergencyContact && (
                        <div className="text-sm text-gray-500">Emergency: {registration.emergencyContact}</div>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div>
                      <div className="text-sm font-medium text-gray-900">{registration.role}</div>
                      <div className="text-sm text-gray-500">{registration.experience}</div>
                      {registration.availability && Array.isArray(registration.availability) && (
                        <div className="text-sm text-gray-500 mt-1">
                          {registration.availability.join(', ')}
                        </div>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusBadge(registration.status)}`}>
                      {registration.status || 'pending'}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {formatDate(registration.submittedAt)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <div className="mt-4 text-sm text-gray-500">
        Showing {filteredRegistrations.length} of {registrations.length} registrations
      </div>
    </div>
  );
};

export default RegistrationViewer;