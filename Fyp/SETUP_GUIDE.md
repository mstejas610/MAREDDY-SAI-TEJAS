# 🚀 CyberSec Platform - Setup & Run Guide

## Prerequisites

Before running the project, make sure you have the following installed:

### 1. Node.js (Required)
- **Download**: https://nodejs.org/
- **Recommended Version**: Node.js 18+ or 20+
- **Verify Installation**: 
  ```bash
  node --version
  npm --version
  ```

### 2. Git (Optional but recommended)
- **Download**: https://git-scm.com/
- **Verify Installation**: 
  ```bash
  git --version
  ```

## 🏃‍♂️ Quick Start

### Step 1: Navigate to Project Directory
```bash
cd c:\Users\rev\Desktop\project
```

### Step 2: Install Dependencies
```bash
npm install
```

### Step 3: Start Development Server
```bash
npm run dev
```

### Step 4: Open in Browser
The development server will start and show you a URL like:
```
➜  Local:   http://localhost:5173/
➜  Network: use --host to expose
```

Open `http://localhost:5173/` in your browser.

## 🎮 Testing the Application

### First Login
1. **Enter any name** (e.g., "Alex", "Sarah", "John")
2. **You'll be logged in as a 'learner'** by default
3. **Notice the streak notification** on first login

### Testing Different User Roles

#### Method 1: Using the Role Switcher (Development Tool)
- Look for the **Role Switcher** in the bottom-left corner
- Click on different roles: **Learner**, **Instructor**, **Admin**
- See how the interface changes based on your role

#### Method 2: Using Browser Console
1. **Open Developer Tools** (F12)
2. **Go to Console tab**
3. **Run these commands**:

```javascript
// Switch to Admin role
const user = JSON.parse(localStorage.getItem('currentUser'));
user.role = 'admin';
localStorage.setItem('currentUser', JSON.stringify(user));
location.reload(); // Refresh page

// Switch to Instructor role
user.role = 'instructor';
localStorage.setItem('currentUser', JSON.stringify(user));
location.reload();

// Switch back to Learner role
user.role = 'learner';
localStorage.setItem('currentUser', JSON.stringify(user));
location.reload();
```

### Key Features to Test

#### 🏆 Streak System
- **Login daily** to build your streak
- **Check the streak display** on the dashboard
- **Simulate different streak counts**:
```javascript
// In browser console:
const user = JSON.parse(localStorage.getItem('currentUser'));
const streakData = {
  currentStreak: 7,
  longestStreak: 10,
  lastLoginDate: new Date().toISOString().split('T')[0],
  streakStartDate: '2024-01-01',
  totalLoginDays: 15,
  streakBonusXP: 165
};
localStorage.setItem('cybersec_streak_data_' + user.id, JSON.stringify(streakData));
location.reload();
```

#### 🎯 Challenge System
1. **Browse All Challenges** - See different challenges based on your role
2. **Click on any challenge** - View detailed challenge information
3. **Try submitting flags** - Test the flag submission system
4. **Unlock hints** - Spend XP to get hints

#### 🛡️ Admin Dashboard (Admin Role Only)
1. **Switch to admin role** (see instructions above)
2. **Navigate to**: `http://localhost:5173/admin-panel`
3. **Explore different tabs**:
   - **Overview**: Challenge statistics
   - **Challenges**: Lifecycle management
   - **Users**: User management (placeholder)
   - **Analytics**: Analytics dashboard (placeholder)

#### 📊 Analytics Tracking
- **All your actions are tracked** and logged to the console
- **Open Developer Tools** → **Console** to see analytics events
- **View stored data**:
```javascript
// View analytics events
console.log('Analytics:', JSON.parse(localStorage.getItem('cybersec_analytics')));

// View user data
console.log('User:', JSON.parse(localStorage.getItem('currentUser')));
```

## 🔧 Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linting
npm run lint
```

## 🌐 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # Base UI components
│   ├── StreakDisplay.tsx
│   ├── ProtectedRoute.tsx
│   └── ...
├── pages/              # Page components
│   ├── AdminDashboard.tsx
│   ├── ChallengeDetails.tsx
│   └── ...
├── contexts/           # React contexts
│   └── UserContext.tsx
├── utils/              # Utility functions
│   ├── analytics.ts
│   ├── streakSystem.ts
│   └── challengeFilters.ts
├── data/               # Mock data
│   ├── challenges.ts
│   └── learningPaths.ts
└── types/              # TypeScript types
    └── index.ts
```

## 🎨 Key Features Implemented

- ✅ **Role-based Authentication** (Learner, Instructor, Admin)
- ✅ **Challenge Lifecycle Management** (Draft → Published → Archived)
- ✅ **Streak System** with milestone rewards
- ✅ **Analytics Tracking** with localStorage persistence
- ✅ **Admin Dashboard** with challenge management
- ✅ **Responsive Design** for mobile and desktop
- ✅ **XP System** with rewards and progression
- ✅ **Real-time Notifications** for achievements

## 🚨 Troubleshooting

### Port Already in Use
If port 5173 is busy:
```bash
npm run dev -- --port 3000
```

### Clear All Data (Reset)
```javascript
// In browser console:
localStorage.clear();
location.reload();
```

### Dependencies Issues
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

## 🎯 Next Steps

1. **Test all features** using the demo guide
2. **Provide feedback** on the user experience
3. **Consider backend integration** for production use
4. **Plan lab environment integration**

---

**Happy Testing! 🎮🛡️**

The platform is ready for user testing and feedback collection!
