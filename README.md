# 🎓 SkillRise

### Learn. Build. Grow.

SkillRise is a **full-stack e-learning platform** built with the MERN stack that brings together **course discovery, online learning, instructor course management, student progress tracking, payments, ratings & reviews, and AI-powered learning tools** in one application.

The platform supports two primary experiences:

* 👨‍🎓 **Students** — discover courses, enroll, learn through structured content, track progress, and use AI learning tools.
* 👨‍🏫 **Instructors** — create, manage, publish, and organize courses for learners.

---

## 🌟 Overview

SkillRise is designed around a simple idea:

> **Learning should not stop at watching a course.**

Students can discover relevant courses, learn through structured video content, track their progress, review courses, and use AI-powered tools whenever they need additional help.

Instructors get dedicated workflows for creating and managing courses, including course metadata, categories, pricing, thumbnails, sections, and subsections.

```text
                         ┌─────────────────────┐
                         │      SkillRise      │
                         └──────────┬──────────┘
                                    │
                 ┌──────────────────┴──────────────────┐
                 │                                     │
                 ▼                                     ▼
        ┌─────────────────┐                   ┌─────────────────┐
        │    STUDENT      │                   │   INSTRUCTOR    │
        └────────┬────────┘                   └────────┬────────┘
                 │                                     │
        ┌────────▼────────┐                   ┌────────▼────────┐
        │ Course Discovery│                   │ Course Creation  │
        │ Enrollment      │                   │ Course Editing   │
        │ Learning        │                   │ Course Content   │
        │ Progress        │                   │ Publishing       │
        │ Reviews         │                   │ Management       │
        └────────┬────────┘                   └────────┬────────┘
                 │                                     │
                 └────────────────┬────────────────────┘
                                  │
                                  ▼
                       ┌─────────────────────┐
                       │   AI Learning Tools │
                       ├─────────────────────┤
                       │ AI Tutor            │
                       │ Quiz Generator      │
                       │ Learning Path        │
                       └─────────────────────┘
```

---

# ✨ Key Features

## 👨‍🎓 Student Experience

### 🔎 Course Discovery

Students can browse published courses and explore available learning content.

Courses include information such as:

* Course title
* Description
* Instructor
* Category
* Price
* Thumbnail
* Ratings & reviews
* Enrollment information

---

### 📚 Structured Online Learning

Courses are organized into a structured hierarchy:

```text
Course
  │
  ├── Section
  │     ├── Subsection / Video
  │     ├── Subsection / Video
  │     └── Subsection / Video
  │
  ├── Section
  │     ├── Subsection / Video
  │     └── Subsection / Video
  │
  └── Section
        └── Subsection / Video
```

This allows instructors to organize educational material into logical learning modules.

---

### ▶️ Course Progress Tracking

SkillRise tracks a learner's progress through course content.

Students can see which videos have been completed and continue learning from where they left off.

The backend maintains course-specific progress associated with the authenticated learner.

---

### ⭐ Ratings & Reviews

Students can rate and review courses after learning from them.

Reviews help other learners understand the quality and usefulness of a course before enrolling.

---

### 🛒 Course Enrollment & Payments

SkillRise supports paid courses through an integrated payment workflow.

The platform uses **Razorpay** to process course purchases and connect successful payments with course enrollment.

```text
Student
   │
   ▼
Select Course
   │
   ▼
Create Payment
   │
   ▼
Razorpay
   │
   ▼
Payment Verification
   │
   ▼
Course Enrollment
   │
   ▼
Start Learning
```

---

# 👨‍🏫 Instructor Experience

SkillRise provides instructors with dedicated course-management capabilities.

### ➕ Create Courses

Instructors can create courses with:

* Course name
* Description
* Learning objectives
* Price
* Tags
* Category
* Thumbnail
* Instructions
* Course status

Course thumbnails are uploaded using **Cloudinary**.

---

### ✏️ Edit Courses

Instructors can update existing course information and replace course thumbnails when required.

---

### 📂 Course Content Management

Courses can be divided into:

* Sections
* Subsections
* Video lessons

This gives instructors control over how learning material is structured.

---

### 📋 Instructor Dashboard

Instructors can access the courses they have created and manage their content from a dedicated dashboard.

---

### 🗑️ Course Management

Instructors can delete courses along with their associated sections and subsections.

The backend also handles related student-course relationships when courses are removed.

---

# 🤖 AI Learning Tools

One of SkillRise's standout features is its integrated **AI Learning Tools** section.

Instead of requiring learners to leave the platform whenever they get stuck, SkillRise provides AI assistance directly inside the learning experience.

The current AI toolkit includes:

---

## 🧑‍🏫 AI Tutor

Students can ask questions about programming or technical concepts and receive concise explanations tailored to their learning level.

The AI tutor can:

* Explain technical concepts
* Simplify difficult topics
* Provide examples
* Adjust explanations based on learner level

```text
Student Question
       │
       ▼
    AI Tutor
       │
       ▼
Concept Explanation
       │
       ▼
Example / Clarification
```

---

## 📝 AI Quiz Generator

Students can provide learning content and generate multiple-choice questions automatically.

The AI generates:

* Questions
* Multiple-choice options
* Correct answers
* Explanations

This allows learners to turn study material into practice questions without manually creating quizzes.

---

## 🗺️ Personalized Learning Path

SkillRise can generate a personalized learning roadmap based on:

* Learning goal
* Current skills
* Existing experience

The AI creates a sequence of topics to study and explains why each topic belongs at that stage.

```text
Learning Goal
      +
Current Skills
      │
      ▼
   AI Analysis
      │
      ▼
Personalized Path
      │
      ├── Topic 1
      ├── Topic 2
      ├── Topic 3
      ├── Topic 4
      └── Topic 5+
```

---

# 🔐 Authentication & Account Management

SkillRise includes a complete authentication workflow.

Features include:

* User registration
* Login
* Email verification
* OTP verification
* Password reset
* Password update
* Protected routes
* JWT authentication
* Cookie-based authentication

The platform also supports different account types, including **Student** and **Instructor** workflows.

---

# 👤 User Profiles

Authenticated users can manage their profile information and account details.

The application maintains user-specific information such as:

* Personal details
* Account type
* Enrolled courses
* Instructor courses
* Learning progress

---

# 📊 Learning Dashboard

Students can access a personalized dashboard containing their learning activity.

The dashboard can surface:

* Enrolled courses
* Course progress
* Learning content
* Profile information
* Relevant learning activity

Instructors have their own management-oriented workflow for the courses they create.

---

# 🧠 Application Architecture

SkillRise follows a full-stack client-server architecture.

```text
                        ┌───────────────────┐
                        │      Browser      │
                        └─────────┬─────────┘
                                  │
                                  ▼
                        ┌───────────────────┐
                        │  React Frontend   │
                        │                   │
                        │ Components        │
                        │ Pages             │
                        │ Redux             │
                        │ Services          │
                        └─────────┬─────────┘
                                  │
                              REST APIs
                                  │
                                  ▼
                        ┌───────────────────┐
                        │ Express + Node.js │
                        │                   │
                        │ Routes            │
                        │ Controllers       │
                        │ Middleware        │
                        │ Authentication    │
                        └───────┬─────┬─────┘
                                │     │
                   ┌────────────┘     └────────────┐
                   ▼                               ▼
          ┌─────────────────┐             ┌─────────────────┐
          │     MongoDB     │             │ External        │
          │                 │             │ Services        │
          │ Users           │             │                 │
          │ Courses         │             │ Cloudinary      │
          │ Sections        │             │ Razorpay        │
          │ Progress        │             │ AI Services     │
          │ Reviews         │             │ Email           │
          └─────────────────┘             └─────────────────┘
```

---

# 🛠️ Tech Stack

## Frontend

* **React 19**
* **Redux Toolkit**
* **React Redux**
* **React Router**
* **Axios**
* **Tailwind CSS**
* **Framer Motion**
* **Chart.js**
* **React Hook Form**
* **React Dropzone**
* **Swiper**
* **React Markdown**
* **Lucide React**
* **React Icons**
* **React Player**

The frontend is built around reusable components, page-level workflows, Redux state management, and responsive UI components.

---

## Backend

* **Node.js**
* **Express.js**
* **MongoDB**
* **Mongoose**
* **JWT**
* **bcrypt / bcryptjs**
* **Cookie Parser**
* **Multer / Express File Upload**
* **Cloudinary**
* **Nodemailer**
* **Razorpay**
* **Node Schedule**
* **dotenv**

The backend follows a modular structure separating controllers, routes, models, middleware, configuration, mail templates, and utilities.

---

## AI

SkillRise integrates AI capabilities for:

* AI tutoring
* Quiz generation
* Personalized learning paths

The AI layer uses structured prompts and JSON responses where structured output is required, allowing AI-generated learning content to be consumed directly by the application.

---

# 📁 Project Structure

```text
SkillRise/
│
├── client/
│   ├── public/
│   └── src/
│       ├── assets/
│       ├── components/
│       ├── data/
│       ├── hooks/
│       ├── pages/
│       ├── reducer/
│       ├── services/
│       ├── slices/
│       ├── utils/
│       ├── App.css
│       ├── App.js
│       ├── index.css
│       └── index.js
│
├── server/
│   ├── config/
│   ├── controllers/
│   ├── mail/
│   │   └── templates/
│   ├── middlewares/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   ├── index.js
│   └── package.json
│
└── README.md
```

The repository currently uses separate `client` and `server` applications, with dedicated frontend pages/components and a modular backend structure.

---

# 🔄 How SkillRise Works

## 1. Create an Account

A user registers and verifies their account.

```text
Signup
  ↓
Email / OTP Verification
  ↓
Authenticated Account
```

---

## 2. Choose Your Learning Path

Students browse available courses through the catalog and select the course they want to learn.

---

## 3. Enroll in a Course

For paid courses:

```text
Course
  ↓
Payment
  ↓
Razorpay Verification
  ↓
Enrollment
```

---

## 4. Start Learning

Students access the course content organized into sections and video lessons.

---

## 5. Track Progress

Completed lessons are recorded so learners can monitor their progress and continue learning efficiently.

---

## 6. Use AI Assistance

Whenever a learner needs help, they can use:

```text
AI Tutor
    │
    ├── Ask a question
    │
    ▼
AI Quiz Generator
    │
    ├── Practice from learning content
    │
    ▼
Learning Path
    │
    └── Build a personalized roadmap
```

---

## 7. Review & Improve

After completing or progressing through courses, learners can rate and review their learning experience.

---

# 💳 Payment Architecture

SkillRise integrates Razorpay for course payments.

```text
             ┌──────────────┐
             │    Student   │
             └───────┬──────┘
                     │
                     ▼
             Select Paid Course
                     │
                     ▼
             Create Payment Order
                     │
                     ▼
                Razorpay
                     │
                     ▼
             Payment Completed
                     │
                     ▼
           Backend Verification
                     │
                     ▼
              Course Enrolled
```

Payment-related backend functionality is separated into its own controller and route modules.

---

# ☁️ Media Management

Course thumbnails and uploaded media are handled using **Cloudinary**.

The backend uploads course thumbnails to Cloudinary and stores the resulting secure URL with the course information.

---

# 🔒 Security

SkillRise uses several mechanisms to protect user accounts and application data:

* JWT-based authentication
* Protected backend routes
* Cookie-based authentication
* Password hashing
* OTP/email verification
* Environment variables for secrets
* Server-side payment verification
* User-specific course and progress access

---

# ⚙️ Getting Started

## Prerequisites

Make sure you have:

* **Node.js**
* **npm**
* **MongoDB / MongoDB Atlas**
* **Cloudinary account**
* **Razorpay account** for payment functionality
* Required AI API credentials
* A code editor such as VS Code

---

## 1. Clone the Repository

```bash
git clone https://github.com/tripathipalak/SkillRise.git

cd SkillRise
```

---

## 2. Install Frontend Dependencies

```bash
cd client
npm install
```

---

## 3. Install Backend Dependencies

```bash
cd ../server
npm install
```

---

## 4. Configure Environment Variables

Create a `.env` file inside the `server` directory.

Example:

```env
PORT=4000

MONGODB_URL=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

CLOUD_NAME=your_cloudinary_cloud_name
API_KEY=your_cloudinary_api_key
API_SECRET=your_cloudinary_api_secret

RAZORPAY_KEY=your_razorpay_key
RAZORPAY_SECRET=your_razorpay_secret

MAIL_HOST=your_mail_host
MAIL_USER=your_mail_user
MAIL_PASS=your_mail_password

AI_API_KEY=your_ai_api_key
```

> Use the exact environment-variable names expected by your local configuration files. Never commit your `.env` file or expose credentials publicly.

---

# ▶️ Running the Application

## Start Backend

```bash
cd server
npm run dev
```

For production:

```bash
npm start
```

---

## Start Frontend

Open another terminal:

```bash
cd client
npm start
```

The React development server will start the frontend application.

---

# 🏗️ Development Architecture

The backend is organized into dedicated modules for different business responsibilities:

```text
server/
│
├── controllers/
│   ├── Auth
│   ├── Course
│   ├── Payments
│   ├── Profile
│   ├── Rating & Review
│   ├── Course Progress
│   └── AI Tools
│
├── models/
│   ├── User
│   ├── Course
│   ├── Section
│   ├── SubSection
│   ├── Category
│   ├── CourseProgress
│   └── Rating & Review
│
├── routes/
│   ├── User
│   ├── Course
│   ├── Payments
│   ├── Profile
│   ├── Contact
│   └── AI Tools
│
└── utils/
    ├── Authentication
    ├── AI helpers
    ├── Cloudinary
    └── Utility functions
```

This separation keeps authentication, course management, payments, progress tracking, and AI functionality independently maintainable.

---

# 📸 Screenshots

Add screenshots of the actual application here to make the repository much more visually appealing.

### 🏠 Home Page

```md
![SkillRise Home](./screenshots/home.png)
```

### 📚 Course Catalog

```md
![Course Catalog](./screenshots/catalog.png)
```

### 📖 Course Details

```md
![Course Details](./screenshots/course-details.png)
```

### 🎓 Student Dashboard

```md
![Student Dashboard](./screenshots/student-dashboard.png)
```

### 👨‍🏫 Instructor Dashboard

```md
![Instructor Dashboard](./screenshots/instructor-dashboard.png)
```

### 🤖 AI Learning Tools

```md
![AI Learning Tools](./screenshots/ai-tools.png)
```

### 📝 AI Quiz Generator

```md
![Quiz Generator](./screenshots/quiz-generator.png)
```

---

# 🚀 Future Enhancements

Potential improvements for SkillRise include:

* 🎯 AI-powered course recommendations
* 📊 Advanced learner analytics
* 🏆 Certificates and achievements
* 🔥 Learning streaks
* 💬 Course discussion forums
* 🔔 Personalized notifications
* 📱 Progressive Web App support
* 🎥 Live classes
* 🧑‍🤝‍🧑 Collaborative learning
* 🧠 More advanced AI learning assistants
* 📈 Instructor analytics dashboard

---

# 💡 What Makes SkillRise Different?

SkillRise combines the functionality of a modern learning marketplace with an integrated AI learning assistant.

Instead of stopping at:

```text
Browse → Buy → Watch
```

SkillRise expands the experience to:

```text
Discover
   ↓
Enroll
   ↓
Learn
   ↓
Track Progress
   ↓
Ask AI
   ↓
Practice
   ↓
Build Learning Path
   ↓
Improve
```

The AI features are therefore not treated as a separate chatbot. They are designed as **learning utilities integrated directly into the educational workflow**.

---

# 👩‍💻 Author

## Palak Mani Tripathi

**B.Tech — Computer Science & Engineering**

Full-Stack Developer interested in **MERN development, AI-powered applications, and building practical products with modern web technologies.**

### GitHub

[github.com/tripathipalak](https://github.com/tripathipalak)

---

# ⭐ Support

If you found SkillRise useful or interesting, consider giving the repository a ⭐.

Feedback and suggestions are always welcome.

---

## 📄 License

This project is developed for educational, portfolio, and demonstration purposes.

