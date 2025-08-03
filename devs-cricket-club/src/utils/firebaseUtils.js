import { ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';
import { 
  collection, 
  addDoc, 
  getDocs, 
  doc, 
  updateDoc, 
  deleteDoc, 
  query, 
  orderBy 
} from 'firebase/firestore';
import { storage, db } from '../firebase/config';

// Image Upload Functions
export const uploadImage = async (file, folder = 'images') => {
  try {
    const timestamp = Date.now();
    const fileName = `${timestamp}_${file.name}`;
    const storageRef = ref(storage, `${folder}/${fileName}`);
    
    const snapshot = await uploadBytes(storageRef, file);
    const downloadURL = await getDownloadURL(snapshot.ref);
    
    return {
      success: true,
      url: downloadURL,
      fileName: fileName,
      path: snapshot.ref.fullPath
    };
  } catch (error) {
    console.error('Error uploading image:', error);
    return {
      success: false,
      error: error.message
    };
  }
};

export const deleteImage = async (imagePath) => {
  try {
    const imageRef = ref(storage, imagePath);
    await deleteObject(imageRef);
    return { success: true };
  } catch (error) {
    console.error('Error deleting image:', error);
    return { success: false, error: error.message };
  }
};

// Achievements CRUD Operations
export const addAchievement = async (achievementData) => {
  try {
    const docRef = await addDoc(collection(db, 'achievements'), {
      ...achievementData,
      createdAt: new Date(),
      updatedAt: new Date()
    });
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error('Error adding achievement:', error);
    return { success: false, error: error.message };
  }
};

export const getAchievements = async () => {
  try {
    const q = query(collection(db, 'achievements'), orderBy('createdAt', 'desc'));
    const querySnapshot = await getDocs(q);
    const achievements = [];
    
    querySnapshot.forEach((doc) => {
      achievements.push({
        id: doc.id,
        ...doc.data()
      });
    });
    
    return { success: true, data: achievements };
  } catch (error) {
    console.error('Error getting achievements:', error);
    return { success: false, error: error.message };
  }
};

export const updateAchievement = async (id, updateData) => {
  try {
    const achievementRef = doc(db, 'achievements', id);
    await updateDoc(achievementRef, {
      ...updateData,
      updatedAt: new Date()
    });
    return { success: true };
  } catch (error) {
    console.error('Error updating achievement:', error);
    return { success: false, error: error.message };
  }
};

export const deleteAchievement = async (id) => {
  try {
    await deleteDoc(doc(db, 'achievements', id));
    return { success: true };
  } catch (error) {
    console.error('Error deleting achievement:', error);
    return { success: false, error: error.message };
  }
};

// Registration Data Operations
export const addRegistration = async (registrationData) => {
  try {
    const docRef = await addDoc(collection(db, 'registrations'), {
      ...registrationData,
      submittedAt: new Date(),
      status: 'pending'
    });
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error('Error adding registration:', error);
    return { success: false, error: error.message };
  }
};

export const getRegistrations = async () => {
  try {
    const q = query(collection(db, 'registrations'), orderBy('submittedAt', 'desc'));
    const querySnapshot = await getDocs(q);
    const registrations = [];
    
    querySnapshot.forEach((doc) => {
      registrations.push({
        id: doc.id,
        ...doc.data()
      });
    });
    
    return { success: true, data: registrations };
  } catch (error) {
    console.error('Error getting registrations:', error);
    return { success: false, error: error.message };
  }
};

// Gallery Image Operations
export const addGalleryImage = async (imageData) => {
  try {
    const docRef = await addDoc(collection(db, 'gallery'), {
      ...imageData,
      createdAt: new Date()
    });
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error('Error adding gallery image:', error);
    return { success: false, error: error.message };
  }
};

export const getGalleryImages = async () => {
  try {
    const q = query(collection(db, 'gallery'), orderBy('createdAt', 'desc'));
    const querySnapshot = await getDocs(q);
    const images = [];
    
    querySnapshot.forEach((doc) => {
      images.push({
        id: doc.id,
        ...doc.data()
      });
    });
    
    return { success: true, data: images };
  } catch (error) {
    console.error('Error getting gallery images:', error);
    return { success: false, error: error.message };
  }
};

export const deleteGalleryImage = async (id) => {
  try {
    await deleteDoc(doc(db, 'gallery', id));
    return { success: true };
  } catch (error) {
    console.error('Error deleting gallery image:', error);
    return { success: false, error: error.message };
  }
};

// Export data to CSV
export const exportToCSV = (data, filename) => {
  const csvContent = convertToCSV(data);
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  
  if (link.download !== undefined) {
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', filename);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
};

const convertToCSV = (data) => {
  if (!data || data.length === 0) return '';
  
  const headers = Object.keys(data[0]);
  const csvHeaders = headers.join(',');
  
  const csvRows = data.map(row => {
    return headers.map(header => {
      const value = row[header];
      // Handle dates and objects
      if (value instanceof Date) {
        return value.toISOString();
      }
      if (typeof value === 'object' && value !== null) {
        return JSON.stringify(value).replace(/"/g, '""');
      }
      // Escape commas and quotes in strings
      return `"${String(value).replace(/"/g, '""')}"`;
    }).join(',');
  });
  
  return [csvHeaders, ...csvRows].join('\n');
};