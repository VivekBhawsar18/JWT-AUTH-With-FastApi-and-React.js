# 🛡️ FastAPI JWT Authentication API with MongoDB

This repository contains a FastAPI application that implements **JWT-based authentication**. It supports user registration and login, using **MongoDB** as the backend database.

---

## 🚀 Getting Started

Follow the steps below to run the project locally on your machine.

---

### ✅ Prerequisites

* Python 3.7 or above
* MongoDB (Atlas or local instance)
* `pip` package manager

---

## 🔧 Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/fastapi-jwt-auth.git
   ```

2. Navigate into the project directory:

   ```bash
   cd fastapi-jwt-auth
   ```

3. Install all Python dependencies:

   ```bash
   pip install -r requirements.txt
   ```

---

## 🔐 Configuration

1. Create a `.env` file in the root folder of the project.

2. Add the following line to your `.env`, replacing `<username>` and `<password>` with your MongoDB credentials:

   ```env
   MONGODB_CONNECTION_STRING=mongodb+srv://<username>:<password>@farm.mamxmw1.mongodb.net/
   SECRET_KEY="cd703a7e9729c26b24ec5a58fa7988e1"
   ALGORITHM="HS256"

   ```

   You can also add other environment variables here later like secret keys if needed.

---

## ▶️ Running the Application

1. Run the FastAPI app using Uvicorn:

   ```bash
   uvicorn main:app --reload
   ```

2. Open your browser and navigate to:

   ```
   http://localhost:8000/docs
   ```

   to access the Swagger UI with interactive API docs.

---

## 🔌 API Endpoints

| Method | Endpoint       | Description                          |
| ------ | -------------- | ------------------------------------ |
| POST   | `/user/signup` | Register a new user                  |
| POST   | `/user/login`  | Login and receive a JWT access token |
| GET    | `/protected`   | Access a secure route with token     |

🔐 The `/protected` route requires the `Authorization: Bearer <token>` header.

---

## 🗂 Folder Structure

```
.
├── main.py                  # Main FastAPI app
├── requirements.txt         # Project dependencies
├── .env                     # Your environment variables (MongoDB URI)
├── auth/
│   ├── auth_handler.py      # JWT token creation & verification
│   └── auth_bearer.py       # Token validation as FastAPI dependency
├── config/
│   └── db.py                # MongoDB connection logic
├── models/
│   └── user.py              # User schema & models
├── utils/
│   └── utils.py             # Helper functions (e.g., password hashing)
```

---

## 🧪 Example Token Usage

Use the token received from `/user/login` like this:

```http
GET /protected HTTP/1.1
Host: localhost:8000
Authorization: Bearer your_token_here
```

---

## 🙌 Contributing

Pull requests and issues are welcome! If you have suggestions for improvements, feel free to open a discussion or a PR.

---

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

### 😂 Bonus Dev Humour

JWT is like that party pass you get — just don’t lose it, or the bouncer (your API) is sending you back to the login gate. 😎
