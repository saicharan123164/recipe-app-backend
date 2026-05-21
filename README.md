# 🍴 Recipe App Backend

A secure and scalable REST API backend for the Recipe Management Application built using Node.js, Express.js, MongoDB, and JWT Authentication.

This backend provides authentication, authorization, and full CRUD operations for recipe management while maintaining secure access control for users.

---

# 🚀 Features

## 🔐 Authentication & Authorization
- User Registration
- User Login
- JWT Token Generation
- Protected Routes
- Middleware Based Authorization
- Password Encryption using bcryptjs

---

## 🍽 Recipe Management
- Add Recipes
- Update Recipes
- Delete Recipes
- Fetch All Recipes
- Fetch Single Recipe
- Category-wise Recipe Handling

---

## 👤 User Features
- User Authentication
- Secure Password Storage
- User-specific Recipe Ownership
- Recipe Creator Information

---

# 🛠️ Tech Stack

## Backend Technologies
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT (jsonwebtoken)
- bcryptjs
- dotenv
- cors
- nodemon

---

# 📁 Project Structure

```txt
recipe-app-backend/
 ┣ controllers/
 ┣ middleware/
 ┣ models/
 ┣ routes/
 ┣ dbconnection.js
 ┣ index.js
 ┣ package.json
 ┗ .env
```

---

# 📂 Folder Explanation

## controllers/
Contains all business logic and CRUD operations.

Examples:
- User Controller
- Recipe Controller

---

## middleware/
Contains middleware functions.

Examples:
- JWT Authentication Middleware
- Authorization Checks

---

## models/
Contains Mongoose Models and Schemas.

Examples:
- User Model
- Recipe Model

---

## routes/
Contains Express Route Definitions.

Examples:
- User Routes
- Recipe Routes

---

# ⚙️ Installation and Setup

## 1️⃣ Clone Repository

```bash
git clone <your-backend-repo-url>
```

---

## 2️⃣ Navigate to Project Folder

```bash
cd recipe-app-backend
```

---

## 3️⃣ Install Dependencies

```bash
npm install
```

---

## 4️⃣ Configure Environment Variables

Create `.env` file:

```env
PORT=3007
MONGO_URL=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

---

## 5️⃣ Start Server

```bash
npm start
```

Server runs on:

```txt
http://localhost:3007
```

---

# 🌐 Database

This project uses:

- MongoDB Atlas
- Mongoose ODM

Database stores:
- Users
- Recipes
- Authentication Data

---

# 🔒 Authentication Flow

## User Login Process

1. User logs in
2. Password verified using bcryptjs
3. JWT token generated
4. Token returned to frontend
5. Protected routes verify token using middleware

---

# 🔑 Protected Routes

Protected operations require JWT token.

Example Header:

```txt
Authorization: Bearer <token>
```

Protected Routes:
- Add Recipe
- Update Recipe
- Delete Recipe

---

# 📡 API Endpoints

# 👤 User Routes

| Method | Endpoint | Description |
|---|---|---|
| POST | /users/register | Register User |
| POST | /users/login | Login User |
| GET | /users | Get All Users |
| DELETE | /users/:id | Delete User |

---

# 🍽 Recipe Routes

| Method | Endpoint | Description |
|---|---|---|
| GET | /receipes | Get All Recipes |
| GET | /receipes/:id | Get Single Recipe |
| POST | /receipes | Add Recipe |
| PUT | /receipes/:id | Update Recipe |
| DELETE | /receipes/:id | Delete Recipe |

---

# 🧪 Features Tested

The following functionalities were tested successfully:

✅ MongoDB Connection  
✅ User Registration  
✅ User Login  
✅ JWT Authentication  
✅ Password Hashing  
✅ Add Recipe  
✅ Update Recipe  
✅ Delete Recipe  
✅ Protected Routes  
✅ Error Handling  

---

# ⚡ Middleware Used

## Authentication Middleware
Checks:
- JWT token existence
- Token validity
- User authorization

---

# 🧹 Best Practices Followed

- MVC Architecture
- REST API Design
- Environment Variables Usage
- Secure Password Hashing
- JWT Authentication
- Proper Error Handling
- Reusable Middleware
- Clean Code Structure
- Protected Routes
- Modular Folder Structure

---

# 🌟 Future Improvements

- Recipe Image Upload
- Cloudinary Integration
- Admin Dashboard
- Role-based Authorization
- Pagination
- Rate Limiting
- API Documentation
- Deployment on Render

---

# 🚀 Deployment Suggestions

## Backend Hosting
- Render
- Railway
- Cyclic

## Database Hosting
- MongoDB Atlas

---

# 👨‍💻 Author

Sai Charan

---

# 📜 License

This project is developed for educational and portfolio purposes.