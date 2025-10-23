🧑‍💻 Fullstack Login Register App (React + Node.js + MySQL)

A full-featured Login & Register App built with
🖥️ React + Bootstrap (Frontend) and
⚙️ Node.js + Express + MySQL + Sequelize (Backend).

This project provides a clean, modern authentication system with JWT, protected routes, and RESTful APIs.

📂 Project Structure
loginRegister/
│
├── backend/
│   ├── server.js
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   └── authController.js
│   ├── models/
│   │   └── User.js
│   ├── routes/
│   │   └── authRoutes.js
│   ├── middleware/
│   │   └── authMiddleware.js
│   ├── package.json
│   └── .env
│
└── frontend/
    ├── src/
    │   ├── App.jsx
    │   ├── main.jsx
    │   ├── index.css
    │   ├── components/
    │   │   └── Navbar.jsx
    │   ├── context/
    │   │   └── AuthContext.jsx
    │   └── pages/
    │       ├── Login.jsx
    │       ├── Register.jsx
    │       └── Dashboard.jsx
    └── package.json

⚙️ Backend Setup
1️⃣ Navigate to backend folder
cd backend

2️⃣ Install dependencies
npm install

3️⃣ Create .env file

Isi dengan konfigurasi berikut:

PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=loginapp
JWT_SECRET=your_secret_key


💡 Pastikan MySQL sudah aktif (XAMPP / Laragon / Docker).

4️⃣ Setup database

Buka terminal dan jalankan MySQL:

CREATE DATABASE loginapp;

5️⃣ Run backend server
npm run dev


Server berjalan di:
👉 http://localhost:5000

🧱 Backend Tech Stack

🚀 Node.js + Express.js

🗄️ MySQL + Sequelize ORM

🔐 JWT Authentication

🧩 bcrypt.js for password hashing

⚙️ dotenv for environment variables

🔁 CORS enabled for API access

🖥️ Frontend Setup
1️⃣ Navigate to frontend folder
cd frontend

2️⃣ Install dependencies
npm install

3️⃣ Install Bootstrap
npm install bootstrap

4️⃣ Import Bootstrap

Tambahkan di main.jsx:

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

5️⃣ Run the app
npm run dev


Frontend berjalan di:
👉 http://localhost:5173

🔗 API Endpoints
Method	Endpoint	Description	Auth Required
POST	/api/auth/register	Register new user	❌ No
POST	/api/auth/login	Login existing user	❌ No
GET	/api/auth/me	Get user info	✅ Yes
POST	/api/auth/logout	Logout user	✅ Yes
🔒 Authentication Flow

User registers → Data disimpan di MySQL
User login → Backend verifikasi password
JWT token dikirim ke frontend
Frontend simpan token (localStorage)
Protected routes hanya bisa diakses dengan token valid
Logout menghapus token

🧪 Example Users
Username	Email	            Password
admin	    admin@example.com   123456
💡 Features

✅ Register user baru
✅ Login & Logout
✅ JWT Authentication
✅ Protected Routes
✅ Validasi input
✅ Bootstrap UI (Responsif)
✅ Error handling backend/frontend

🚀 Deployment
Frontend

Build project:

npm run build


Upload folder dist ke Vercel, Netlify, atau Firebase Hosting.

Backend

Deploy ke:

Render

Railway

VPS / cPanel
Pastikan untuk men-setup variabel environment .env di server.

🧰 Useful Commands
Command	Description
npm run dev	Menjalankan development server
npm run start	Menjalankan server production
npx sequelize-cli db:migrate	Menjalankan migrasi database (jika pakai CLI)
📜 License

This project is open-source under the MIT License.

👨‍💻 Author

Dimas Kenzo
💼 Fullstack Developer
📧 kainbekas@gmail.com