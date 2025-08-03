import React, { useState, useEffect } from 'react';
import { 
  addGalleryImage, 
  getGalleryImages, 
  deleteGalleryImage,
  deleteImage
} from '../../utils/firebaseUtils';
import ImageUpload from './ImageUpload';

const GalleryManager = () => {
  const [galleryImages, setGalleryImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    category: 'team',
    alt: '',
    url: '',
    imagePath: ''
  });

  const categories = ['team', 'action', 'awards', 'training', 'facilities', 'hero'];

  useEffect(() => {
    loadGalleryImages();
  }, []);

  const loadGalleryImages = async () => {
    setLoading(true);
    try {
      const result = await getGalleryImages();
      if (result.success) {
        setGalleryImages(result.data);
      } else {
        console.error('Failed to load gallery images:', result.error);
      }
    } catch (error) {
      console.error('Error loading gallery images:', error);
    }
    setLoading(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.title || !formData.url) {
      alert('Please fill in required fields and upload an image');
      return;
    }

    setLoading(true);
    try {
      const result = await addGalleryImage(formData);
      
      if (result.success) {
        alert('Image added to gallery successfully!');
        resetForm();
        loadGalleryImages();
      } else {
        alert('Failed to add image: ' + result.error);
      }
    } catch (error) {
      console.error('Error adding image:', error);
      alert('Error adding image: ' + error.message);
    }
    setLoading(false);
  };

  const handleDelete = async (imageId, imagePath) => {
    if (!window.confirm('Are you sure you want to delete this image?')) {
      return;
    }

    setLoading(true);
    try {
      // Delete from Firestore
      const deleteResult = await deleteGalleryImage(imageId);
      
      // Delete from Storage if we have the path
      if (imagePath) {
        await deleteImage(imagePath);
      }
      
      if (deleteResult.success) {
        alert('Image deleted successfully!');
        loadGalleryImages();
      } else {
        alert('Delete failed: ' + deleteResult.error);
      }
    } catch (error) {
      console.error('Error deleting image:', error);
      alert('Error deleting image: ' + error.message);
    }
    setLoading(false);
  };

  const resetForm = () => {
    setFormData({
      title: '',
      category: 'team',
      alt: '',
      url: '',
      imagePath: ''
    });
    setShowForm(false);
  };

  const handleImageUpload = (uploadResult) => {
    if (uploadResult.url) {
      setFormData(prev => ({
        ...prev,
        url: uploadResult.url,
        imagePath: uploadResult.path,
        alt: prev.alt || uploadResult.fileName || 'Gallery image'
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        url: '',
        imagePath: '',
        alt: ''
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

  const groupedImages = galleryImages.reduce((acc, image) => {
    const category = image.category || 'team';
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(image);
    return acc;
  }, {});

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-cricket-green">Gallery & Hero Images</h2>
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-cricket-green text-white px-4 py-2 rounded-lg hover:bg-cricket-lightgreen transition-colors"
        >
          {showForm ? 'Cancel' : 'Add Image'}
        </button>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mb-6">
        {categories.map(category => (
          <div key={category} className="bg-gray-50 rounded-lg p-3 text-center">
            <div className="text-lg font-bold text-cricket-green">
              {groupedImages[category]?.length || 0}
            </div>
            <div className="text-sm text-gray-600 capitalize">{category}</div>
          </div>
        ))}
      </div>

      {showForm && (
        <div className="bg-gray-50 rounded-lg p-6 mb-6">
          <h3 className="text-lg font-semibold mb-4 text-cricket-green">Add New Image</h3>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Title *
                </label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cricket-green focus:border-transparent"
                  required
                  placeholder="Image title"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Category *
                </label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cricket-green focus:border-transparent"
                  required
                >
                  {categories.map(category => (
                    <option key={category} value={category}>
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Alt Text
              </label>
              <input
                type="text"
                name="alt"
                value={formData.alt}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cricket-green focus:border-transparent"
                placeholder="Alternative text for accessibility"
              />
            </div>

            <ImageUpload
              onUploadSuccess={handleImageUpload}
              currentImage={formData.url}
              folder="gallery"
              label="Upload Image *"
            />

            <div className="flex space-x-4">
              <button
                type="submit"
                disabled={loading || !formData.url}
                className="bg-cricket-green text-white px-6 py-2 rounded-lg hover:bg-cricket-lightgreen transition-colors disabled:opacity-50"
              >
                {loading ? 'Adding...' : 'Add Image'}
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
            Loading gallery...
          </div>
        </div>
      ) : (
        <div className="space-y-6">
          {categories.map(category => {
            const categoryImages = groupedImages[category] || [];
            if (categoryImages.length === 0) return null;
            
            return (
              <div key={category} className="border border-gray-200 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-cricket-green mb-4 capitalize">
                  {category} Images ({categoryImages.length})
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {categoryImages.map((image) => (
                    <div key={image.id} className="relative group">
                      <img
                        src={image.url}
                        alt={image.alt || image.title}
                        className="w-full h-48 object-cover rounded-lg shadow-md"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 rounded-lg">
                        <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <button
                            onClick={() => handleDelete(image.id, image.imagePath)}
                            className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition-colors"
                            title="Delete image"
                          >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9zM4 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 112 0v4a1 1 0 11-2 0V9zm4 0a1 1 0 112 0v4a1 1 0 11-2 0V9z" clipRule="evenodd"/>
                            </svg>
                          </button>
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 rounded-b-lg opacity-0 group-hover:opacity-100 transition-opacity">
                          <h4 className="text-white font-semibold">{image.title}</h4>
                          {image.alt && (
                            <p className="text-gray-300 text-sm">{image.alt}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
          
          {galleryImages.length === 0 && (
            <div className="text-center py-8 text-gray-500">
              No images found. Add your first image to the gallery!
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default GalleryManager;