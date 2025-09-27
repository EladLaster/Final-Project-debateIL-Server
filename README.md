🖥️ DebateIL - Server

> **שרת API מתקדם** - Node.js + Express + Sequelize לניהול דיבייטים בזמן אמת

[![Node.js](https://img.shields.io/badge/Node.js-18+-green.svg)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-5.1.0-blue.svg)](https://expressjs.com/)
[![Sequelize](https://img.shields.io/badge/Sequelize-6.37.7-52B0E7.svg)](https://sequelize.org/)
[![JWT](https://img.shields.io/badge/JWT-9.0.2-000000.svg)](https://jwt.io/)

## 🎯 תכונות עיקריות

### 🔐 **מערכת אימות מתקדמת**

- **JWT Authentication** - אימות מבוסס טוקנים
- **bcrypt Encryption** - הצפנת סיסמאות מאובטחת
- **Role-based Access** - בקרת גישה מבוססת תפקידים
- **Session Management** - ניהול סשנים מתקדם

### 🗣️ **ניהול דיבייטים**

- **Debate Lifecycle** - מחזור חיים מלא: Scheduled → Live → Finished
- **Auto-transition** - מעבר אוטומטי ל-Live כשמשתמשים נרשמים
- **Real-time Updates** - עדכונים בזמן אמת
- **Score Management** - ניהול ציונים וניקוד

### 💬 **מערכת טיעונים**

- **CRUD Operations** - פעולות יצירה, קריאה, עדכון ומחיקה
- **Debate Association** - קישור טיעונים לדיבייטים
- **Author Tracking** - מעקב אחר מחברי טיעונים
- **Content Validation** - אימות תוכן מתקדם

### 🗳️ **מערכת הצבעה**

- **Real-time Voting** - הצבעה בזמן אמת
- **Vote Tracking** - מעקב הצבעות מפורט
- **Score Calculation** - חישוב ציונים אוטומטי
- **Vote History** - היסטוריית הצבעות

## 🏗️ מבנה הפרויקט

```
├── 📁 config/                      # קבצי תצורה
│   └── config.js                   # תצורת מסד נתונים ואפליקציה
├── 🎮 controllers/                 # מטפלי בקשות
│   ├── argumentController.js      # פעולות CRUD לטיעונים
│   ├── debateController.js        # ניהול דיבייטים
│   ├── userController.js          # אימות ופרופיל משתמש
│   └── voteController.js          # מערכת הצבעה
├── 🛡️ middlewares/                # Middleware של Express
│   ├── authentication.js          # אימות JWT
│   ├── errorHandling.js           # טיפול בשגיאות
│   └── validation.js              # אימות קלט
├── 🗄️ migrations/                 # מיגרציות מסד נתונים
│   ├── 20250910142006-create-users-table.js
│   ├── 20250916104241-create-debates-table.js
│   ├── 20250916104744-create-arguments-table.js
│   ├── 20250917131434-create-debates-newcolumnu1u2.js
│   ├── 20250917140401-create-debates-newcolumns1s2.js
│   └── 20250920111036-add-gender-and-avatar-to-users.js
├── 📊 models/                     # מודלי Sequelize
│   ├── argument.js                # מודל טיעון
│   ├── debate.js                  # מודל דיבייט
│   ├── index.js                   # אינדקס מודלים
│   └── user.js                    # מודל משתמש
├── 🏢 models2/                    # מודלי לוגיקה עסקית
│   ├── argumentModel.js           # לוגיקה עסקית טיעונים
│   ├── debateModel.js             # לוגיקה עסקית דיבייטים
│   └── userModel.js               # לוגיקה עסקית משתמשים
├── 🛣️ routes/                     # נתיבי API
│   ├── debateRoute.js             # endpoints דיבייטים
│   └── userRoute.js               # endpoints משתמשים
├── 📋 schemas/                     # סכמות אימות
│   ├── argumentSchema.js          # אימות טיעונים
│   ├── debateSchema.js            # אימות דיבייטים
│   ├── userSchema.js              # אימות משתמשים
│   └── voteSchema.js              # אימות הצבעות
└── server.js                      # קובץ שרת ראשי
```

## 🚀 התקנה והרצה

### דרישות מערכת

- **Node.js** 18+
- **npm** 9+
- **Database** (MySQL/PostgreSQL/SQLite)

### התקנה מהירה

```bash
# שכפול הפרויקט
git clone https://github.com/EladLaster/Final-Project-debateIL-Server.git
cd Final-Project-debateIL-Server

# התקנת תלויות
npm install

# הגדרת משתני סביבה
cp .env.example .env

# הרצת מיגרציות
npm run db:migrate

# הרצה במצב פיתוח
npm run dev

# הרצה במצב ייצור
npm start
```

### משתני סביבה

צור קובץ `.env` בתיקיית השורש:

```env
# Server Configuration
PORT=3030
NODE_ENV=development

# Database Configuration
DB_HOST=localhost
DB_PORT=3306
DB_NAME=debateil
DB_USER=root
DB_PASSWORD=your_password

# JWT Configuration
JWT_SECRET=your_super_secret_jwt_key
JWT_EXPIRES_IN=24h

# CORS Configuration
ALLOWED_ORIGINS=http://localhost:5173,http://localhost:5174
```

## 🛠️ טכנולוגיות

### **Backend Core**

- **Node.js 18+** - Runtime JavaScript
- **Express 5.1.0** - Web framework מתקדם
- **Morgan 1.10.1** - HTTP request logger

### **Database & ORM**

- **Sequelize 6.37.7** - ORM מתקדם
- **MySQL2 3.15.0** - MySQL driver
- **PostgreSQL 8.16.3** - PostgreSQL driver
- **SQLite3 5.1.7** - SQLite driver

### **Authentication & Security**

- **JWT 9.0.2** - JSON Web Tokens
- **bcrypt 6.0.0** - Password hashing
- **CORS 2.8.5** - Cross-Origin Resource Sharing
- **Cookie Parser 1.4.7** - Cookie management

### **Validation & Utilities**

- **AJV 8.17.1** - JSON Schema validation
- **AJV Formats 3.0.1** - Additional formats
- **UUID 11.1.0** - Unique identifiers
- **dotenv 17.2.2** - Environment variables

## 📊 סכמת מסד נתונים

### 👤 **טבלת משתמשים (Users)**

```sql
CREATE TABLE users (
  id UUID PRIMARY KEY,
  username VARCHAR(50) UNIQUE NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  firstName VARCHAR(50),
  lastName VARCHAR(50),
  gender ENUM('male', 'female', 'other'),
  avatarUrl VARCHAR(500),
  isAdmin BOOLEAN DEFAULT FALSE,
  createdAt DATETIME,
  updatedAt DATETIME
);
```

### 🗣️ **טבלת דיבייטים (Debates)**

```sql
CREATE TABLE debates (
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  topic VARCHAR(500) NOT NULL,
  start_time DATETIME,
  end_time DATETIME,
  status ENUM('scheduled', 'live', 'finished') DEFAULT 'scheduled',
  user1_id UUID,
  user2_id UUID,
  score_user1 INTEGER DEFAULT 0,
  score_user2 INTEGER DEFAULT 0,
  createdAt DATETIME,
  updatedAt DATETIME,
  FOREIGN KEY (user1_id) REFERENCES users(id),
  FOREIGN KEY (user2_id) REFERENCES users(id)
);
```

### 💬 **טבלת טיעונים (Arguments)**

```sql
CREATE TABLE arguments (
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  debate_id INTEGER NOT NULL,
  user_id UUID NOT NULL,
  content TEXT NOT NULL,
  createdAt DATETIME,
  updatedAt DATETIME,
  FOREIGN KEY (debate_id) REFERENCES debates(id),
  FOREIGN KEY (user_id) REFERENCES users(id)
);
```

## 🔌 API Endpoints

### 🔐 **אימות משתמשים**

```http
POST   /auth/register              # הרשמת משתמש חדש
POST   /auth/login                 # התחברות משתמש
GET    /api/users/profile          # קבלת פרופיל נוכחי
PUT    /api/users/profile          # עדכון פרופיל
DELETE /api/users/profile          # מחיקת פרופיל
```

### 🗣️ **ניהול דיבייטים**

```http
GET    /api/debates                # רשימת כל הדיבייטים
GET    /api/debates/:id            # דיבייט ספציפי
POST   /api/debates                # יצירת דיבייט חדש
PUT    /api/debates/:id            # עדכון דיבייט
DELETE /api/debates/:id            # מחיקת דיבייט
POST   /api/debates/:id/register   # הרשמה לדיבייט
POST   /api/debates/:id/finish     # סיום דיבייט
GET    /api/debates/stats          # סטטיסטיקות דיבייטים
```

### 💬 **מערכת טיעונים**

```http
GET    /api/debates/:id/arguments           # טיעונים לדיבייט
POST   /api/debates/:id/arguments           # יצירת טיעון חדש
PUT    /api/debates/:id/arguments/:argId   # עדכון טיעון
DELETE /api/debates/:id/arguments/:argId   # מחיקת טיעון
```

### 🗳️ **מערכת הצבעה**

```http
PATCH  /api/debates/:id/vote/user1          # הצבעה למשתתף 1
PATCH  /api/debates/:id/vote/user2          # הצבעה למשתתף 2
GET    /api/debates/:id/votes               # תוצאות הצבעה
POST   /api/debates/:id/votes/reset        # איפוס הצבעות
```

## 🛡️ אבטחה

### **Authentication & Authorization**

- **JWT Tokens** - אימות מבוסס טוקנים
- **Password Hashing** - הצפנת סיסמאות עם bcrypt
- **Role-based Access** - בקרת גישה מבוססת תפקידים
- **Session Security** - אבטחת סשנים

### **Input Validation**

- **Schema Validation** - אימות עם AJV
- **SQL Injection Protection** - הגנה מפני SQL injection
- **XSS Protection** - הגנה מפני Cross-site scripting
- **CSRF Protection** - הגנה מפני CSRF attacks

### **CORS Configuration**

```javascript
const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:5174",
  "https://final-project-debateil-client.onrender.com",
];
```

## 📈 ביצועים

### **Database Optimization**

- **Indexing** - אינדקסים אופטימליים
- **Query Optimization** - אופטימיזציית שאילתות
- **Connection Pooling** - ניהול חיבורים
- **Caching Strategy** - אסטרטגיית cache

### **API Performance**

- **Response Time** < 200ms
- **Throughput** > 1000 req/sec
- **Error Rate** < 0.1%
- **Uptime** > 99.9%

## 🧪 בדיקות

### **Unit Tests**

```bash
npm test                    # הרצת כל הבדיקות
npm run test:watch         # בדיקות במצב watch
npm run test:coverage      # בדיקות עם כיסוי
```

### **Integration Tests**

```bash
npm run test:integration   # בדיקות אינטגרציה
npm run test:e2e          # בדיקות end-to-end
```

## 🚀 Deployment

### **Docker Deployment**

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
EXPOSE 3030
CMD ["npm", "start"]
```

### **Environment Variables**

```env
NODE_ENV=production
PORT=3030
DB_HOST=your-db-host
DB_PASSWORD=your-secure-password
JWT_SECRET=your-super-secret-key
```

### **Database Migration**

```bash
# הרצת מיגרציות
npm run db:migrate

# ביטול מיגרציה אחרונה
npm run db:migrate:undo

# ביטול כל המיגרציות
npm run db:migrate:undo:all
```

## 📊 Monitoring & Logging

### **Health Check**

```http
GET /health
```

### **Metrics**

- **Request Count** - מספר בקשות
- **Response Time** - זמן תגובה
- **Error Rate** - אחוז שגיאות
- **Active Users** - משתמשים פעילים

### **Logging**

```javascript
// Morgan logging format
:method :url :status :response-time ms - :date
```

## 🤝 תרומה לפרויקט

### **הנחיות פיתוח**

1. **Fork** הפרויקט
2. **צור feature branch** (`git checkout -b feature/amazing-feature`)
3. **Commit** השינויים (`git commit -m 'Add amazing feature'`)
4. **Push** ל-branch (`git push origin feature/amazing-feature`)
5. **פתח Pull Request**

### **Code Standards**

- **ESLint** - כללי קוד מחמירים
- **Prettier** - עיצוב קוד עקבי
- **JSDoc** - תיעוד פונקציות
- **Error Handling** - טיפול בשגיאות

## 📄 רישיון

פרויקט זה מוגן תחת רישיון MIT. ראה קובץ [LICENSE](LICENSE) לפרטים.

## 👥 צוות הפיתוח

- **Elad Laster** - Full Stack Developer
- **Lior Kirshner** - Backend Specialist
- **Guy Hanan** - Backend Developer & Database Specialist

## 📞 יצירת קשר

- **GitHub Issues** - דיווח על באגים
- **Discussions** - שאלות ודיונים
- **Email** - contact@debateil.com

---

<div align="center">

**🌟 אם הפרויקט עזר לך, תן לו ⭐**

[![GitHub stars](https://img.shields.io/github/stars/EladLaster/Final-Project-debateIL-Server?style=social)](https://github.com/EladLaster/Final-Project-debateIL-Server)

</div>
