🔐 Login Authentication App

Web Programmer Challenge – PT. Javis Teknologi Albarokah

A simple and secure login system built with React.js (Frontend) and Node.js + Express + MySQL (Backend) using JWT + HttpOnly Cookies for authentication.

🚀 Tech Stack

Frontend:
React.js (Vite)
Bootstrap 5
Axios
React Router DOM

Backend:
Node.js + Express.js
MySQL (via Sequelize ORM)
JWT (jsonwebtoken)
bcrypt.js (password hashing)
dotenv
cookie-parser
express-rate-limit

⚙️ Installation & Setup
🧩 1. Clone Repository
git clone https://github.com/yourusername/login-auth-javis.git
cd login-auth-javis

🗄️ 2. Setup Backend
cd backend
npm install

Buat file .env:
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=db
JWT_SECRET=your_secret_key
JWT_EXPIRES_IN=1h


Buat database di MySQL:
CREATE DATABASE login_app;


Jalankan server:
npm run dev

Backend akan berjalan di:
👉 http://localhost:5000

💻 3. Setup Frontend
cd ../frontend
npm install
npm run dev

Frontend berjalan di:
👉 http://localhost:5173



🔄 Flow Autentikasi
User mengisi form login (email/username & password).
Backend verifikasi user & password (bcrypt compare).
Jika benar → kirim JWT token via HttpOnly cookie.
Frontend menyimpan status login lewat context (AuthContext).
/dashboard hanya dapat diakses jika JWT valid (middleware).
Logout menghapus cookie dan menghapus sesi.
