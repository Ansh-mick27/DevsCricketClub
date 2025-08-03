# 🏏 Dev's Cricket Club Website

A modern, responsive website for Dev's Cricket Club built with React, Tailwind CSS, and Firebase. Features a comprehensive admin panel (CPanel) for managing club content, member registrations, and image galleries.

## ✨ Features

### 🌟 Public Website
- **Responsive Design**: Mobile-first design that works on all devices
- **Loading Animation**: Cricket-themed loading screen with animated cricket ball
- **Modern UI**: Clean, minimalist design with cricket-themed colors
- **Sections**:
  - Hero section with club branding
  - About section with club history and values
  - Achievements showcase with past players
  - Dynamic image gallery with filtering
  - Testimonials from club members
  - Player registration form
  - Contact information and footer

### 🔧 Admin Panel (CPanel)
- **Secure Login**: Password-protected admin access
- **Dashboard**: Overview of club statistics and system status
- **Achievements Management**: 
  - Add/Edit/Delete player achievements
  - Upload player photos
  - Track achievement categories
- **Gallery Management**:
  - Upload hero and gallery images
  - Organize images by categories (team, action, awards, training, facilities)
  - Delete unwanted images
- **Registration Data**:
  - View all member registrations
  - Export data to CSV/JSON formats
  - Filter and search functionality
  - Registration statistics

### 🔥 Firebase Integration
- **Cloud Storage**: Secure image storage with Firebase Storage
- **Database**: Real-time data sync with Firestore
- **Scalable**: Auto-scaling cloud infrastructure

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Firebase account
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/devs-cricket-club.git
   cd devs-cricket-club
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up Firebase**
   - Create a Firebase project at [console.firebase.google.com](https://console.firebase.google.com)
   - Enable Firestore Database and Storage
   - Get your Firebase configuration
   - Create `.env.local` file:
   ```env
   REACT_APP_FIREBASE_API_KEY=your-api-key
   REACT_APP_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
   REACT_APP_FIREBASE_PROJECT_ID=your-project-id
   REACT_APP_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
   REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
   REACT_APP_FIREBASE_APP_ID=your-app-id
   ```

4. **Start development server**
   ```bash
   npm start
   ```

5. **Open browser**
   - Website: [http://localhost:3000](http://localhost:3000)
   - Admin Panel: [http://localhost:3000/#admin](http://localhost:3000/#admin)
   - Login: `admin` / `cricket123`

## 📁 Project Structure

```
devs-cricket-club/
├── public/                 # Static assets
├── src/
│   ├── components/         # React components
│   │   ├── admin/         # Admin panel components
│   │   │   ├── AchievementsManager.js
│   │   │   ├── GalleryManager.js
│   │   │   ├── ImageUpload.js
│   │   │   └── RegistrationViewer.js
│   │   ├── About.js
│   │   ├── Achievements.js
│   │   ├── Admin.js
│   │   ├── Footer.js
│   │   ├── Gallery.js
│   │   ├── Hero.js
│   │   ├── LoadingScreen.js
│   │   ├── Navbar.js
│   │   ├── Registration.js
│   │   └── Testimonials.js
│   ├── firebase/          # Firebase configuration
│   │   └── config.js
│   ├── utils/             # Utility functions
│   │   └── firebaseUtils.js
│   ├── App.css           # Tailwind CSS and custom styles
│   ├── App.js            # Main app component
│   └── index.js          # App entry point
├── vercel.json           # Vercel deployment config
├── tailwind.config.js    # Tailwind CSS configuration
├── DEPLOYMENT_GUIDE.md   # Detailed deployment guide
└── README.md            # This file
```

## 🎨 Technology Stack

- **Frontend**: React 18
- **Styling**: Tailwind CSS
- **Backend**: Firebase (Firestore + Storage)
- **Deployment**: Vercel
- **Build Tool**: Create React App
- **Icons**: Emoji and SVG icons
- **Animations**: CSS animations and transitions

## 🔐 Admin Panel Access

The admin panel provides comprehensive management tools:

### Login Credentials (Demo)
- **Username**: `admin`
- **Password**: `cricket123`

### Admin Features
1. **Dashboard**: Overview and statistics
2. **Achievements**: Manage player achievements and photos
3. **Gallery**: Upload and organize club images
4. **Registrations**: View and export member data

## 🚀 Deployment

The project is configured for easy deployment on Vercel:

### Quick Deploy
1. Push your code to GitHub
2. Connect repository to Vercel
3. Add Firebase environment variables
4. Deploy with one click

### Detailed Instructions
See [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md) for comprehensive deployment instructions including:
- Firebase setup
- Vercel configuration
- Custom domain setup
- Environment variables
- Troubleshooting guide

## 🔧 Configuration

### Firebase Security Rules

**Firestore Rules**:
```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /achievements/{document} {
      allow read: if true;
      allow write: if request.auth != null;
    }
    match /gallery/{document} {
      allow read: if true;
      allow write: if request.auth != null;
    }
    match /registrations/{document} {
      allow create: if true;
      allow read, update, delete: if request.auth != null;
    }
  }
}
```

**Storage Rules**:
```javascript
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /{allPaths=**} {
      allow read: if true;
      allow write: if request.auth != null;
    }
  }
}
```

### Tailwind Configuration
Custom cricket-themed colors:
```javascript
colors: {
  cricket: {
    green: '#1B4D3E',
    lightgreen: '#4A7C59',
    cream: '#F5F5DC',
    gold: '#FFD700',
  }
}
```

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

All components adapt seamlessly across devices.

## 🎯 Performance

- **Lazy Loading**: Images load on demand
- **Code Splitting**: Optimized bundle sizes
- **Firebase CDN**: Fast global content delivery
- **Vercel Edge Network**: Global edge caching

## 🔒 Security

- **Environment Variables**: Sensitive data secured
- **Firebase Rules**: Proper access controls
- **Input Validation**: Form data sanitization
- **HTTPS**: SSL encryption enabled

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

- **Documentation**: Check this README and deployment guide
- **Issues**: Open an issue on GitHub
- **Firebase**: Check Firebase console for backend issues
- **Vercel**: Check deployment logs for hosting issues

## 🙏 Acknowledgments

- **React Team**: For the amazing React framework
- **Tailwind CSS**: For the utility-first CSS framework
- **Firebase**: For backend-as-a-service
- **Vercel**: For seamless deployment platform

---

**Built with ❤️ for cricket enthusiasts** 🏏

### Live Demo
- **Website**: [Your Live URL Here]
- **Admin Panel**: [Your Live URL Here/#admin]

### Screenshots
Add screenshots of your deployed website here to showcase the design and functionality.
