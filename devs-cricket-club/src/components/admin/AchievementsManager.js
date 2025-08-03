import React, { useState, useEffect } from 'react';
import { 
  addAchievement, 
  getAchievements, 
  updateAchievement, 
  deleteAchievement 
} from '../../utils/firebaseUtils';
import ImageUpload from './ImageUpload';

const AchievementsManager = () => {
  const [achievements, setAchievements] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    achievement: '',
    years: '',
    image: '',
    imagePath: ''
  });

  useEffect(() => {
    loadAchievements();
  }, []);

  const loadAchievements = async () => {
    setLoading(true);
    try {
      const result = await getAchievements();
      if (result.success) {
        setAchievements(result.data);
      } else {
        console.error('Failed to load achievements:', result.error);
      }
    } catch (error) {
      console.error('Error loading achievements:', error);
    }
    setLoading(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.description || !formData.achievement) {
      alert('Please fill in all required fields');
      return;
    }

    setLoading(true);
    try {
      let result;
      if (editingId) {
        result = await updateAchievement(editingId, formData);
      } else {
        result = await addAchievement(formData);
      }

      if (result.success) {
        alert(editingId ? 'Achievement updated successfully!' : 'Achievement added successfully!');
        resetForm();
        loadAchievements();
      } else {
        alert('Operation failed: ' + result.error);
      }
    } catch (error) {
      console.error('Error saving achievement:', error);
      alert('Error saving achievement: ' + error.message);
    }
    setLoading(false);
  };

  const handleEdit = (achievement) => {
    setFormData({
      name: achievement.name || '',
      description: achievement.description || '',
      achievement: achievement.achievement || '',
      years: achievement.years || '',
      image: achievement.image || '',
      imagePath: achievement.imagePath || ''
    });
    setEditingId(achievement.id);
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this achievement?')) {
      return;
    }

    setLoading(true);
    try {
      const result = await deleteAchievement(id);
      if (result.success) {
        alert('Achievement deleted successfully!');
        loadAchievements();
      } else {
        alert('Delete failed: ' + result.error);
      }
    } catch (error) {
      console.error('Error deleting achievement:', error);
      alert('Error deleting achievement: ' + error.message);
    }
    setLoading(false);
  };

  const resetForm = () => {
    setFormData({
      name: '',
      description: '',
      achievement: '',
      years: '',
      image: '',
      imagePath: ''
    });
    setEditingId(null);
    setShowForm(false);
  };

  const handleImageUpload = (uploadResult) => {
    if (uploadResult.url) {
      setFormData(prev => ({
        ...prev,
        image: uploadResult.url,
        imagePath: uploadResult.path
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        image: '',
        imagePath: ''
      }));
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-cricket-green">Achievements Management</h2>
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-cricket-green text-white px-4 py-2 rounded-lg hover:bg-cricket-lightgreen transition-colors"
        >
          {showForm ? 'Cancel' : 'Add Achievement'}
        </button>
      </div>

      {showForm && (
        <div className="bg-gray-50 rounded-lg p-6 mb-6">
          <h3 className="text-lg font-semibold mb-4 text-cricket-green">
            {editingId ? 'Edit Achievement' : 'Add New Achievement'}
          </h3>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cricket-green focus:border-transparent"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Achievement *
                </label>
                <input
                  type="text"
                  name="achievement"
                  value={formData.achievement}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cricket-green focus:border-transparent"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Years
              </label>
              <input
                type="text"
                name="years"
                value={formData.years}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cricket-green focus:border-transparent"
                placeholder="e.g., 2018-2021"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Description *
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                rows="3"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cricket-green focus:border-transparent"
                required
              />
            </div>

            <ImageUpload
              onUploadSuccess={handleImageUpload}
              currentImage={formData.image}
              folder="achievements"
              label="Player Image"
            />

            <div className="flex space-x-4">
              <button
                type="submit"
                disabled={loading}
                className="bg-cricket-green text-white px-6 py-2 rounded-lg hover:bg-cricket-lightgreen transition-colors disabled:opacity-50"
              >
                {loading ? 'Saving...' : (editingId ? 'Update' : 'Add')}
              </button>
              <button
                type="button"
                onClick={resetForm}
                className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600 transition-colors"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      {loading && !showForm ? (
        <div className="text-center py-8">
          <div className="inline-flex items-center">
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-cricket-green" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Loading achievements...
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          {achievements.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              No achievements found. Add your first achievement!
            </div>
          ) : (
            achievements.map((achievement) => (
              <div key={achievement.id} className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-start justify-between">
                  <div className="flex space-x-4 flex-1">
                    {achievement.image && (
                      <img
                        src={achievement.image}
                        alt={achievement.name}
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                    )}
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg text-cricket-green">{achievement.name}</h3>
                      <p className="text-cricket-gold font-medium">{achievement.achievement}</p>
                      {achievement.years && (
                        <p className="text-gray-500 text-sm">{achievement.years}</p>
                      )}
                      <p className="text-gray-700 mt-2">{achievement.description}</p>
                    </div>
                  </div>
                  <div className="flex space-x-2 ml-4">
                    <button
                      onClick={() => handleEdit(achievement)}
                      className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition-colors"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(achievement.id)}
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition-colors"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default AchievementsManager;