# 🍴 Recipe App Backend

A secure and scalable REST API backend for the Recipe Management Application built using Node.js, Express.js, MongoDB, and JWT Authentication.

## 🌐 Live Deployment

### Backend API

https://recipe-app-backend-s8nx.onrender.com/

### Frontend Application

https://recipe-app-frontend-mu-murex.vercel.app/

---

# 🚀 Features

## 🔐 Authentication & Authorization

* User Registration
* User Login
* JWT Token Generation
* Protected Routes
* Middleware Based Authorization
* Password Encryption using bcryptjs

---

## 🍽 Recipe Management

* Add Recipes
* Update Recipes
* Delete Recipes
* Fetch All Recipes
* Fetch Single Recipe
* Category-wise Recipe Handling

---

## 👤 User Features

* User Authentication
* Secure Password Storage
* User-specific Recipe Ownership
* Recipe Creator Information

---

# 🛠️ Tech Stack

### Backend

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose
* JWT
* bcryptjs
* dotenv
* cors

---

# ⚙️ Installation and Setup

## Clone Repository

```bash
git clone https://github.com/saicharan123164/recipe-app-backend.git
```

## Install Dependencies

```bash
npm install
```

## Configure Environment Variables

Create a `.env` file

```env
PORT=3007
DB_URL=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

## Start Server

```bash
npm start
```

---

# 📡 API Base URL

Production:

```txt
https://recipe-app-backend-s8nx.onrender.com
```

Local:

```txt
http://localhost:3007
```

---

# 👤 User Routes

| Method | Endpoint        |
| ------ | --------------- |
| POST   | /users/register |
| POST   | /users/login    |
| GET    | /users          |
| DELETE | /users/:id      |

---

# 🍽 Recipe Routes

| Method | Endpoint      |
| ------ | ------------- |
| GET    | /receipes     |
| GET    | /receipes/:id |
| POST   | /receipes     |
| PUT    | /receipes/:id |
| DELETE | /receipes/:id |

---

# 🧪 API Testing

### Health Check

```txt
GET https://recipe-app-backend-s8nx.onrender.com/
```

Response:

```json
{
  "message":"Recipe API Running Successfully 🚀"
}
```

### Get All Recipes

```txt
GET https://recipe-app-backend-s8nx.onrender.com/receipes
```

---

# 🔒 Authentication

Protected endpoints require:

```txt
Authorization: Bearer <token>
```

---

# 🌟 Future Improvements

* Recipe Image Upload
* Cloudinary Integration
* Admin Dashboard
* Role Based Access Control
* Pagination
* API Documentation

---

# 👨‍💻 Author

Sai Charan

GitHub:
https://github.com/saicharan123164

Frontend:
https://recipe-app-frontend-mu-murex.vercel.app/

Backend:
https://recipe-app-backend-s8nx.onrender.com/

---

# 📜 License

This project is developed for educational and portfolio purposes.
