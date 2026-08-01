# 🚀 SkillRise

SkillRise is a full-stack MERN-based e-learning platform that enables students to enroll in courses, learn through structured content, and allows instructors to create and manage courses efficiently.

## ✨ Features

### 👨‍🎓 Student Features
- User Registration & Login
- Secure JWT Authentication
- OTP Email Verification
- Browse Available Courses
- Purchase Courses
- Track Learning Progress
- View Enrolled Courses
- Update Profile
- Reset Password

### 👨‍🏫 Instructor Features
- Instructor Dashboard
- Create New Courses
- Upload Course Thumbnail
- Add Sections & Subsections
- Upload Lecture Videos
- Edit & Delete Courses
- View Course Analytics

### 🔐 Authentication
- JWT Authentication
- Password Encryption using bcrypt
- OTP Verification
- Forgot Password
- Reset Password
- Protected Routes

### 💳 Payment
- Razorpay Payment Gateway Integration
- Secure Course Purchase
- Payment Confirmation

### ☁️ Media Management
- Cloudinary Image Upload
- Cloudinary Video Upload

### 📧 Email Services
- OTP Verification Emails
- Password Reset Emails
- Payment Confirmation Emails

---

## 🛠️ Tech Stack

### Frontend
- React.js
- Redux Toolkit
- React Router
- Tailwind CSS
- Axios
- Framer Motion

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcrypt
- Nodemailer
- Cloudinary
- Razorpay

---

## 📂 Project Structure

```
SkillRise/
│
├── client/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── server/
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   ├── middleware/
│   ├── config/
│   ├── utils/
│   └── package.json
│
└── README.md
```

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/tripathipalak/SkillRise.git
```

### Go to Project

```bash
cd SkillRise
```

### Install Client Dependencies

```bash
cd client
npm install
```

### Install Server Dependencies

```bash
cd ../server
npm install
```

---

## 🔑 Environment Variables

Create a `.env` file inside the **server** folder.

```env
PORT=

MONGODB_URL=

JWT_SECRET=

MAIL_HOST=
MAIL_USER=
MAIL_PASS=

CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=

RAZORPAY_KEY=
RAZORPAY_SECRET=

FOLDER_NAME=
```

---

## ▶️ Run Project

### Start Backend

```bash
cd server
npm run dev
```

### Start Frontend

```bash
cd client
npm start
```

---

## 📸 Screenshots

Add screenshots of:

- Home Page
- Login Page
- Student Dashboard
- Instructor Dashboard
- Course Page
- Payment Page

---

## 🚀 Future Enhancements

- AI Course Recommendation
- Certificate Generation
- Live Classes
- Discussion Forum
- Dark Mode
- Notifications
- Admin Dashboard

---

## 👩‍💻 Author

**Palak Mani Tripathi**

GitHub: https://github.com/tripathipalak
## ⭐ Support

If you like this project, consider giving it a ⭐ on GitHub!
