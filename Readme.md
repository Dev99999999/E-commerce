🛒 E-Commerce Web Application

A full-stack E-Commerce Web Application built to manage products, users, cart, and orders with a secure and scalable backend.
This project demonstrates real-world backend development concepts such as authentication, authorization, REST APIs, and database design.

🚀 Features
👤 User Features

User registration & login (JWT based authentication)

Secure password handling

View product listings

Add / remove products from cart

Place orders

🛠️ Admin Features

Admin authentication

Add, update & delete products

Manage users

View all orders

🔐 Security

JWT Authentication

Role-based Authorization (Admin / User)

Protected APIs

🧑‍💻 Tech Stack
Backend

Node.js

Express.js

MongoDB (Mongoose)

JWT Authentication

Zod / Validation

Swagger UI (API Documentation)

Frontend (if applicable)

HTML / CSS / JavaScript
(or React.js if used)

Tools

Git & GitHub

Postman

VS Code

📂 Project Structure
E-commerce/
│
├── src/
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   ├── middlewares/
│   ├── validations/
│   └── utils/
│
├── .env
├── package.json
├── server.js
└── README.md

⚙️ Installation & Setup
1️⃣ Clone the Repository
git clone https://github.com/Dev99999999/E-commerce.git
cd E-commerce

2️⃣ Install Dependencies
npm install

3️⃣ Environment Variables

Create a .env file and add:

PORT=3000
MONGO_URI=your_mongodb_url
JWT_SECRET=your_secret_key

4️⃣ Run the Project
npm start


Server will run on:

http://localhost:3000

📑 API Documentation

Swagger UI available at:

http://localhost:3000/api-docs


Includes:

Authentication APIs

Product APIs

User APIs

Order APIs

🧪 Testing

APIs tested using Postman

Validation handled using Zod

Proper error handling implemented

🎯 Learning Outcomes

RESTful API design

JWT authentication & authorization

MongoDB schema design

Backend project structure

Real-world e-commerce logic

Swagger documentation

👨‍💻 Author

Dev Sonawane
Backend / MERN Stack Developer

GitHub: Dev99999999

⭐ Feedback

If you like this project, feel free to ⭐ star the repository and share feedback!