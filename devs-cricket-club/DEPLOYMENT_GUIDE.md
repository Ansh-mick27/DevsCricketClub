# 🚀 Deployment Guide - Dev's Cricket Club

This guide will help you deploy the Dev's Cricket Club website to Vercel with Firebase integration.

## 📋 Prerequisites

Before deploying, ensure you have:
- ✅ GitHub account
- ✅ Vercel account (free tier available)
- ✅ Firebase project set up
- ✅ All project files committed to GitHub

## 🔥 Firebase Setup

### 1. Create Firebase Project
1. Go to [Firebase Console](https://console.firebase.google.com)
2. Click "Add project" or "Create a project"
3. Enter project name: `devs-cricket-club`
4. Enable Google Analytics (optional)
5. Create project

### 2. Enable Required Services
1. **Authentication** (if needed for future admin features)
   - Go to Authentication → Sign-in method
   - Enable Email/Password provider

2. **Firestore Database**
   - Go to Firestore Database
   - Click "Create database"
   - Start in test mode (change rules later)
   - Choose location closest to your users

3. **Storage**
   - Go to Storage
   - Click "Get started"
   - Start in test mode
   - Use default bucket

### 3. Get Firebase Configuration
1. Go to Project Settings (gear icon)
2. Scroll down to "Your apps"
3. Click "Add app" → Web (</>) icon
4. Register app with nickname: `cricket-club-web`
5. Copy the config object - you'll need these values:

```javascript
const firebaseConfig = {
  apiKey: "your-api-key-here",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "123456789",
  appId: "your-app-id"
};
```

### 4. Configure Security Rules

**Firestore Rules** (`firestore.rules`):
```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow read access to achievements and gallery
    match /achievements/{document} {
      allow read: if true;
      allow write: if request.auth != null; // Only authenticated users can write
    }
    
    match /gallery/{document} {
      allow read: if true;
      allow write: if request.auth != null;
    }
    
    // Allow anyone to create registrations, but only admins to read
    match /registrations/{document} {
      allow create: if true;
      allow read, update, delete: if request.auth != null;
    }
  }
}
```

**Storage Rules** (`storage.rules`):
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

## 📁 GitHub Repository Setup

### 1. Create GitHub Repository
```bash
# If not already done
git init
git add .
git commit -m "Initial commit: Dev's Cricket Club website"
git branch -M main
git remote add origin https://github.com/yourusername/devs-cricket-club.git
git push -u origin main
```

### 2. Repository Structure
Ensure your repository has this structure:
```
devs-cricket-club/
├── public/
├── src/
│   ├── components/
│   │   ├── admin/
│   │   │   ├── AchievementsManager.js
│   │   │   ├── GalleryManager.js
│   │   │   ├── ImageUpload.js
│   │   │   └── RegistrationViewer.js
│   │   ├── Admin.js
│   │   ├── Gallery.js
│   │   └── ... (other components)
│   ├── firebase/
│   │   └── config.js
│   ├── utils/
│   │   └── firebaseUtils.js
│   └── App.js
├── vercel.json
├── package.json
├── DEPLOYMENT_GUIDE.md
└── README.md
```

## 🚀 Vercel Deployment

### Method 1: GitHub → Vercel Import (Recommended)

1. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign up/Login with GitHub
   - Click "New Project"

2. **Import Repository**
   - Select your `devs-cricket-club` repository
   - Click "Import"

3. **Configure Project**
   - Framework Preset: **Create React App**
   - Root Directory: `./` (default)
   - Build Command: `npm run build` (default)
   - Output Directory: `build` (default)
   - Install Command: `npm install` (default)

4. **Environment Variables**
   Click "Environment Variables" and add:
   ```
   REACT_APP_FIREBASE_API_KEY = your-firebase-api-key
   REACT_APP_FIREBASE_AUTH_DOMAIN = your-project.firebaseapp.com
   REACT_APP_FIREBASE_PROJECT_ID = your-project-id
   REACT_APP_FIREBASE_STORAGE_BUCKET = your-project.appspot.com
   REACT_APP_FIREBASE_MESSAGING_SENDER_ID = your-sender-id
   REACT_APP_FIREBASE_APP_ID = your-app-id
   ```

5. **Deploy**
   - Click "Deploy"
   - Wait for build completion (2-3 minutes)
   - Get your live URL: `https://your-project.vercel.app`

### Method 2: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy from project directory
cd devs-cricket-club
vercel

# Follow prompts:
# - Set up and deploy? Y
# - Which scope? (your account)
# - Link to existing project? N
# - Project name: devs-cricket-club
# - In which directory is your code? ./
# - Want to override settings? N

# Set environment variables
vercel env add REACT_APP_FIREBASE_API_KEY
vercel env add REACT_APP_FIREBASE_AUTH_DOMAIN
vercel env add REACT_APP_FIREBASE_PROJECT_ID
vercel env add REACT_APP_FIREBASE_STORAGE_BUCKET
vercel env add REACT_APP_FIREBASE_MESSAGING_SENDER_ID
vercel env add REACT_APP_FIREBASE_APP_ID

# Redeploy with environment variables
vercel --prod
```

## 🔗 Custom Domain Setup (Bonus)

### 1. Purchase/Use Existing Domain
- Buy from providers like Namecheap, GoDaddy, or Google Domains
- Or use existing domain you own

### 2. Add Domain to Vercel
1. Go to Vercel Dashboard → Project Settings
2. Click "Domains" tab
3. Enter your domain: `devscricketclub.com`
4. Click "Add"

### 3. Configure DNS Records
Add these records in your domain provider's DNS settings:

**For Root Domain (devscricketclub.com):**
```
Type: A
Name: @
Value: 76.76.19.61
```

**For WWW Subdomain (www.devscricketclub.com):**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

**Alternative (using CNAME for root):**
```
Type: CNAME
Name: @
Value: cname.vercel-dns.com
```

### 4. Verify Domain
- Wait 24-48 hours for DNS propagation
- Vercel will automatically issue SSL certificate
- Test both `devscricketclub.com` and `www.devscricketclub.com`

## 🔧 Post-Deployment Setup

### 1. Test All Features
- ✅ Website loads correctly
- ✅ All sections are responsive
- ✅ Admin login works (admin/cricket123)
- ✅ Image uploads work in admin panel
- ✅ Achievements CRUD operations work
- ✅ Registration form saves to Firebase
- ✅ Registration data export works

### 2. Update Firebase Configuration
1. Add your Vercel domain to Firebase authorized domains:
   - Firebase Console → Authentication → Settings
   - Authorized domains → Add domain
   - Add: `your-project.vercel.app` and your custom domain

### 3. Performance Optimization
1. **Enable Vercel Analytics** (optional)
   - Dashboard → Analytics → Enable

2. **Add Custom Headers** (add to `vercel.json`):
```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        }
      ]
    }
  ]
}
```

## 🚨 Troubleshooting

### Common Issues:

1. **Build Fails**
   ```bash
   # Check logs in Vercel dashboard
   # Common fix: ensure all dependencies are in package.json
   npm install
   npm run build  # Test locally first
   ```

2. **Firebase Connection Issues**
   ```javascript
   // Check environment variables are set correctly
   console.log('Firebase Config:', process.env.REACT_APP_FIREBASE_API_KEY);
   ```

3. **404 on Refresh**
   - Ensure `vercel.json` includes the routing rule:
   ```json
   "routes": [{ "src": "/(.*)", "dest": "/index.html" }]
   ```

4. **Images Not Loading**
   - Check Firebase Storage rules
   - Verify image URLs are accessible
   - Check CORS settings if needed

## 📊 Monitoring & Maintenance

### 1. Set Up Monitoring
- Enable Vercel Analytics
- Monitor Firebase usage in console
- Set up uptime monitoring (optional)

### 2. Regular Maintenance
- Update dependencies monthly
- Review Firebase usage and costs
- Backup important data
- Monitor performance metrics

### 3. Security
- Regularly review Firebase security rules
- Monitor admin access logs
- Keep dependencies updated
- Use strong passwords for admin access

## 📞 Support

If you encounter issues:
1. Check Vercel deployment logs
2. Review Firebase console for errors
3. Test locally with `npm start`
4. Check this guide for troubleshooting steps

## 🎉 Success!

Your Dev's Cricket Club website should now be live at:
- **Vercel URL**: `https://your-project.vercel.app`
- **Custom Domain**: `https://your-domain.com` (if configured)

**Admin Panel Access:**
- URL: `your-domain.com/#admin`
- Username: `admin`
- Password: `cricket123`

---

### 🔗 Useful Links
- [Vercel Documentation](https://vercel.com/docs)
- [Firebase Documentation](https://firebase.google.com/docs)
- [React Documentation](https://reactjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)