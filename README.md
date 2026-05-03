# 🚀 Team Task Manager API

A backend-only REST API for managing teams, projects, and tasks with authentication and role-based access control.

---

## 📌 Features

* 🔐 User Authentication (Register & Login using JWT)
* 👥 Role-Based Access (Admin / Member)
* 📁 Project Management (Admin only creation)
* ✅ Task Management (Create, assign, update status)
* 📊 Dashboard API (Task statistics)
* 🌐 RESTful API structure

---

## 🛠 Tech Stack

* Node.js
* Express.js
* MongoDB (Mongoose)
* JWT Authentication
* bcryptjs (password hashing)

---

## 📁 Project Structure

team-task-manager-api/
│
├── models/
│   ├── User.js
│   ├── Project.js
│   └── Task.js
│
├── routes/
│   ├── auth.js
│   ├── projects.js
│   └── tasks.js
│
├── middleware/
│   └── auth.js
│
├── server.js
├── package.json
├── .env
└── .gitignore

---

## ⚙️ Installation & Setup

### 1. Clone the repository

git clone https://github.com/your-username/team-task-manager-api.git

### 2. Navigate to project folder

cd team-task-manager-api

### 3. Install dependencies

npm install

### 4. Create `.env` file

Add the following:

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000

### 5. Run the server

npm start

Server will run on:
http://localhost:5000

---

## 🔐 Authentication

### Register

POST /api/auth/register

Body:
{
"name": "John",
"email": "[john@example.com](mailto:john@example.com)",
"password": "123456",
"role": "admin"
}

---

### Login

POST /api/auth/login

Response:
{
"token": "your_jwt_token"
}

---

## 📁 Projects API

### Create Project (Admin only)

POST /api/projects

Headers:
Authorization: TOKEN

Body:
{
"name": "Project 1"
}

---

### Get All Projects

GET /api/projects

---

## ✅ Tasks API

### Create Task

POST /api/tasks

Body:
{
"title": "Task 1",
"assignedTo": "user_id",
"projectId": "project_id",
"dueDate": "2026-05-10"
}

---

### Get All Tasks

GET /api/tasks

---

### Update Task Status

PUT /api/tasks/:id

Body:
{
"status": "done"
}

---

### Dashboard Stats

GET /api/tasks/dashboard

Response:
{
"total": 10,
"completed": 5,
"pending": 3,
"overdue": 2
}

---

## 🧪 Testing

You can test APIs using:

* Postman
* Thunder Client (VS Code Extension)

---

## 🌍 Deployment

You can deploy this API using platforms like:

* Railway
* Render

---

## 📌 Notes

* Ensure MongoDB is connected properly
* Keep your `.env` file secure
* Do not upload `.env` to GitHub

---

## 👨‍💻 Author

Your Name
GitHub: https://github.com/your-username

---

## ⭐ Contribution

Feel free to fork and improve this project!

---

## 📜 License

This project is open-source and free to use.
