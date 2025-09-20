## DebateIL - Server

### Project Structure

```
├── config/                        # Configuration files
│   └── config.js                 # Database and app configuration
├── controllers/                   # Request handlers
│   ├── argumentController.js     # Argument CRUD operations
│   ├── debateController.js       # Debate management
│   ├── userController.js         # User authentication & profile
│   └── voteController.js         # Voting system
├── data/                         # Data persistence
│   ├── DataPersistence.js        # Data management utilities
│   └── recipes.json              # Sample data
├── middlewares/                  # Express middlewares
│   ├── authentication.js         # JWT authentication
│   ├── errorHandling.js          # Error handling middleware
│   ├── recipeOwnership.js        # Ownership validation
│   └── validation.js             # Input validation
├── migrations/                   # Database migrations
│   ├── 20250910142006-create-users-table.js
│   ├── 20250916104241-create-debates-table.js
│   ├── 20250916104744-create-arguments-table.js
│   ├── 20250917131434-create-debates-newcolumnu1u2.js
│   ├── 20250917140401-create-debates-newcolumns1s2.js
│   └── 20250920111036-add-gender-and-avatar-to-users.js
├── models/                       # Sequelize models
│   ├── argument.js               # Argument model
│   ├── debate.js                 # Debate model
│   ├── index.js                  # Models index
│   └── user.js                   # User model
├── models2/                      # Business logic models
│   ├── argumentModel.js          # Argument business logic
│   ├── debateModel.js            # Debate business logic
│   └── userModel.js              # User business logic
├── routes/                       # API routes
│   ├── debateRoute.js            # Debate endpoints
│   └── userRoute.js              # User endpoints
├── schemas/                      # Validation schemas
│   └── debateSchema.js           # Debate validation
├── seeders/                      # Database seeders
│   ├── 20240125000001-demo-users.js
│   ├── 20240125000002-demo-debates.js
│   └── 20240125000003-demo-messages.js
└── server.js                     # Main server file
```

## 🔧 Key Features

### Authentication System

- **JWT Authentication**: Secure token-based auth
- **User Registration**: Create new user accounts
- **Profile Management**: Update user information
- **Admin Authorization**: Role-based access control

### Debate Management

- **Debate Lifecycle**: Scheduled → Live → Finished
- **User Registration**: Join debates automatically
- **Auto-transition**: Live when 2 users register
- **Manual Finish**: Admin can end debates with scores

### Argument System

- **CRUD Operations**: Create, read, update, delete arguments
- **Debate Association**: Arguments linked to debates
- **Author Tracking**: Track argument authors

### Voting System

- **Real-time Voting**: Vote for debate participants
- **Score Tracking**: Track user scores in debates
- **Vote History**: Maintain voting records

## 📊 Database Schema

### Users Table

- `id` (UUID, Primary Key)
- `username` (String, Unique)
- `email` (String, Unique)
- `firstName` (String)
- `lastName` (String)
- `gender` (String)
- `avatarUrl` (String)
- `createdAt` (DateTime)
- `updatedAt` (DateTime)

### Debates Table

- `id` (Integer, Primary Key)
- `topic` (String)
- `start_time` (DateTime)
- `end_time` (DateTime)
- `status` (ENUM: scheduled, live, finished)
- `user1_id` (UUID, Foreign Key)
- `user2_id` (UUID, Foreign Key)
- `score_user1` (Integer, Default: 0)
- `score_user2` (Integer, Default: 0)
- `createdAt` (DateTime)
- `updatedAt` (DateTime)

### Arguments Table

- `id` (Integer, Primary Key)
- `content` (Text)
- `debate_id` (Integer, Foreign Key)
- `author_id` (UUID, Foreign Key)
- `createdAt` (DateTime)
- `updatedAt` (DateTime)

## 🚀 Getting Started

```bash
npm install
npm run dev
```

## 🛠️ Tech Stack

- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **Sequelize** - ORM for database
- **JWT** - Authentication tokens
- **SQLite/PostgreSQL** - Database
- **CORS** - Cross-origin requests
- **Cookie Parser** - Cookie handling

## 🔐 Environment Variables

```env
JWT_SECRET=your_jwt_secret
DB_HOST=localhost
DB_PORT=5432
DB_NAME=debateil
DB_USER=your_db_user
DB_PASS=your_db_password
PORT=3000
```
