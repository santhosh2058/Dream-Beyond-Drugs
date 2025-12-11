# Dream Beyond Drugs – Digital Support & Counseling Platform

A full-stack MERN application designed to provide emotional support, guided questionnaires, counselor communication, real-time data analysis, and Telegram bot integration for anonymous and accessible mental-health assistance.

## 🚀 Features
- 🔐 JWT Authentication (Users & Counselors)
- 🧑‍⚕️ Counselor Dashboard for monitoring responses
- 🧭 Multi-step Questionnaire System
- 📊 Analytics API for insights
- 🤖 Telegram Bot Integration
- 🗂 Role-Based Access
- 📝 Response Tracking (MongoDB)
- ⚡ Express.js Backend with MVC
- 🎨 React + TailwindCSS Frontend

## 🛠 Tech Stack
### Backend
- Node.js, Express.js
- MongoDB, Mongoose
- JWT, bcrypt
- Telegram Bot API
- express-async-handler

### Frontend
- React
- React Router
- TailwindCSS
- Axios

## 📁 Project Structure
Dream-Beyond-Drugs/
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── app.js
│   └── server.js
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json

## ⚙️ Environment Variables
Backend `.env`:
PORT=5000
MONGO_URI=<your-mongodb-uri>
JWT_SECRET=<your-secret>
TELEGRAM_BOT_TOKEN=<token>
TELEGRAM_CHAT_ID=<chat-id>
NODE_ENV=development

## 🧩 Installation
git clone <repo-url>
cd Dream-Beyond-Drugs-main

cd backend
npm install

cd ../frontend
npm install

## ▶️ Running the Project
### Backend
npm run dev

### Frontend
npm start

## 🌱 API Overview
Auth: register, login, profile  
Counselor: fetch users, view responses  
Questions: list, submit  
Data: analytics, response retrieval  
Telegram: webhook for automated guided conversations  

## 🔐 Authentication
- JWT stored in localStorage  
- Middleware validates each request  
- Roles: User, Counselor  

## 🤖 Telegram Bot Flow
- Receives webhook updates  
- Tracks conversation stage  
- Sends next question  
- Stores replies in MongoDB  

## 🎨 Frontend
Pages:
- Home
- Login/Register
- Questionnaire
- Counselor Dashboard
- Articles/Resources

## 🛡 Security Notes
- Protect Telegram token
- Add rate limiting
- Validate user input
- Enable HTTPS in production

## 📌 Future Improvements
- Real-time counselor chat
- Dashboard charts
- AI-driven classification
- Email alerts
- Improved Telegram UI

## 🤝 Contributing
Fork → Branch → Commit → PR

## 📄 License
MIT License
