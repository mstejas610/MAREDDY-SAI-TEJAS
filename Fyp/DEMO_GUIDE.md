# 🎮 CyberSec Platform Demo Guide

## Quick Start Testing

### 1. 🔐 Authentication & Roles

**Test Basic Login:**
```
1. Open the application
2. Enter any name (e.g., "Alex")
3. You'll be logged in as a 'learner' by default
4. Notice the streak notification on first login
```

**Test Different Roles:**
```javascript
// In browser console, change user role:
const user = JSON.parse(localStorage.getItem('currentUser'));
user.role = 'admin'; // or 'instructor'
localStorage.setItem('currentUser', JSON.stringify(user));
// Refresh page to see role-based changes
```

### 2. 🏆 Streak System Testing

**Simulate Daily Logins:**
```javascript
// In browser console:
const streakService = window.streakService; // If exposed
// Or manually modify localStorage:
const streakData = {
  currentStreak: 7,
  longestStreak: 10,
  lastLoginDate: new Date().toISOString().split('T')[0],
  streakStartDate: '2024-01-01',
  totalLoginDays: 15,
  streakBonusXP: 165
};
localStorage.setItem('cybersec_streak_data_' + user.id, JSON.stringify(streakData));
// Refresh to see 7-day streak milestone
```

### 3. 📊 Analytics Testing

**View Analytics Events:**
```javascript
// In browser console:
console.log('Analytics Events:', JSON.parse(localStorage.getItem('cybersec_analytics')));
```

**Test Challenge Analytics:**
```
1. Go to "Browse All Challenges"
2. Click on any challenge (triggers 'challenge_view')
3. Try submitting a flag (triggers 'flag_submission')
4. Check console for analytics events
```

### 4. 🛡️ Admin Dashboard Testing

**Access Admin Panel:**
```
1. Set user role to 'admin' (see role testing above)
2. Navigate to: http://localhost:5173/admin-panel
3. Explore different tabs:
   - Overview: Challenge statistics
   - Challenges: Lifecycle management
   - Users: Placeholder for user management
   - Analytics: Placeholder for advanced analytics
```

### 5. 🎯 Challenge Lifecycle Testing

**View Different Challenge Types:**
```
As Learner: Only see published challenges
As Instructor: See published + draft challenges  
As Admin: See all challenges (published, draft, archived)
```

**Test Challenge Filtering:**
```javascript
// In browser console, check filtered challenges:
const { filterChallengesByRole } = window.challengeFilters; // If exposed
const challenges = window.mockChallenges; // If exposed
console.log('Learner sees:', filterChallengesByRole(challenges, 'learner'));
console.log('Admin sees:', filterChallengesByRole(challenges, 'admin'));
```

## 🎨 UI Features to Test

### Dashboard Components
- ✅ Welcome banner with user name
- ✅ XP progress bar
- ✅ Rank badge display
- ✅ Summary statistics
- ✅ Streak display (compact and detailed)
- ✅ Quick access navigation

### Challenge System
- ✅ Challenge cards with status badges
- ✅ Difficulty indicators
- ✅ Category filtering
- ✅ Search functionality
- ✅ Challenge details page
- ✅ Flag submission system
- ✅ Hint unlocking (costs XP)

### Notifications
- ✅ Streak milestone notifications
- ✅ XP gain notifications
- ✅ Auto-dismiss after 5 seconds
- ✅ Manual close button

## 🔍 Debug Information

### LocalStorage Keys
```
currentUser - User authentication data
cybersec_analytics - Analytics events
cybersec_streak_data_{userId} - User streak data
cybersec_session - Current session info
```

### Console Commands for Testing
```javascript
// View current user
console.log(JSON.parse(localStorage.getItem('currentUser')));

// View analytics events
console.log(JSON.parse(localStorage.getItem('cybersec_analytics')));

// Clear all data (reset)
localStorage.clear();

// Simulate XP gain
const user = JSON.parse(localStorage.getItem('currentUser'));
user.xp += 100;
localStorage.setItem('currentUser', JSON.stringify(user));
```

## 🎯 Test Scenarios

### Scenario 1: New User Journey
1. First login → See welcome + streak notification
2. Browse challenges → Analytics tracking
3. Attempt challenge → Flag submission tracking
4. Complete challenge → XP reward + completion tracking

### Scenario 2: Returning User
1. Login after 1 day → Streak continues
2. Login after 2+ days → Streak resets
3. Reach milestone → Bonus XP notification

### Scenario 3: Admin Workflow
1. Switch to admin role
2. Access admin panel
3. View challenge statistics
4. See draft/archived challenges
5. Manage challenge lifecycle

### Scenario 4: Analytics Deep Dive
1. Perform various actions
2. Check console for event logging
3. View stored analytics data
4. Test event filtering and statistics

## 🚨 Known Limitations (MVP Phase)

- **No Backend**: All data stored in localStorage
- **No Real Labs**: Lab buttons are placeholders
- **Mock Data**: Using static challenge data
- **Basic Auth**: Simple name-based authentication
- **Limited Analytics**: Console logging only

## 🎉 Success Indicators

✅ **Authentication**: Users can login and roles work
✅ **Streaks**: Daily login tracking with milestones
✅ **Analytics**: Events are logged and tracked
✅ **Admin Panel**: Role-based access control works
✅ **Challenge Lifecycle**: Draft/published/archived system
✅ **Responsive Design**: Works on mobile and desktop
✅ **XP System**: Points awarded for actions
✅ **Notifications**: Real-time feedback system

---

**Ready for User Testing!** 🚀

The platform now has all the foundational features for a gamified cybersecurity learning experience. Users can progress through challenges, build streaks, earn XP, and administrators can manage the platform effectively.
