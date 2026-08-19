# 🎓 SkillRise

<p align="center">
  <strong>AI-powered e-learning platform for discovering courses, learning, tracking progress, and growing your skills.</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React"/>
  <img src="https://img.shields.io/badge/Node.js-Express-339933?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js & Express"/>
  <img src="https://img.shields.io/badge/MongoDB-Mongoose-47A248?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB & Mongoose"/>
  <img src="https://img.shields.io/badge/Google_Gemini-AI-4285F4?style=for-the-badge&logo=google&logoColor=white" alt="Google Gemini AI"/>
  <img src="https://img.shields.io/badge/Redux_Toolkit-764ABC?style=for-the-badge&logo=redux&logoColor=white" alt="Redux Toolkit"/>
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS"/>
  <img src="https://img.shields.io/badge/Razorpay-Payments-02042B?style=for-the-badge" alt="Razorpay"/>
</p>

<p align="center"> <a href="https://skill-rise-orcin.vercel.app/"> 🌐 <strong>Live Demo</strong> </a> &nbsp; • &nbsp; <a href="https://github.com/tripathipalak/SkillRise"> ⭐ <strong>GitHub Repository</strong> </a> </p>


## 🚀 Learn. Build. Grow.

SkillRise is a **full-stack AI-powered e-learning platform** built with the MERN stack that brings together **course discovery, online learning, instructor course management, student progress tracking, payments, ratings & reviews, and AI-powered learning tools** in one application.

The platform provides two primary experiences:

* 👨‍🎓 **Students** — discover courses, enroll, learn through structured content, track progress, and use AI-powered learning tools.
* 👨‍🏫 **Instructors** — create, organize, manage, and publish courses for learners.

---

# 🌟 Overview

SkillRise is designed to provide a complete learning experience rather than simply offering course videos.

Students can:

**Discover → Enroll → Learn → Track Progress → Practice → Get AI Assistance → Improve**

Instructors can create structured courses with sections, lessons, pricing, thumbnails, and other course information.

The platform also integrates the **Google Gemini API** to provide AI-powered learning assistance directly inside the application.

---

# ✨ Key Features

## 👨‍🎓 Student Experience

### 🔎 Course Discovery

Students can browse and explore available published courses.

Courses provide information such as:

* Course title
* Description
* Instructor
* Category
* Price
* Thumbnail
* Ratings & reviews
* Course content

---

### 📚 Structured Online Learning

Courses are organized into structured sections and lessons.

```text
Course
  │
  ├── Section
  │     ├── Lesson / Video
  │     ├── Lesson / Video
  │     └── Lesson / Video
  │
  ├── Section
  │     ├── Lesson / Video
  │     └── Lesson / Video
  │
  └── Section
        └── Lesson / Video
```

This allows instructors to organize educational content into logical learning modules.

---

### ▶️ Course Progress Tracking

SkillRise tracks learner progress across enrolled courses.

Students can mark lessons as completed and continue learning from their current progress.

Course progress is stored and associated with the authenticated learner.

---

### ⭐ Ratings & Reviews

Students can rate and review courses, helping other learners make informed decisions when selecting courses.

---

### 🛒 Course Enrollment & Payments

SkillRise supports paid course enrollment through **Razorpay**.

```text
Student
   │
   ▼
Select Course
   │
   ▼
Create Payment Order
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

SkillRise provides instructors with dedicated course-management workflows.

### ➕ Course Creation

Instructors can create courses with information such as:

* Course name
* Description
* Learning objectives
* Price
* Category
* Tags
* Thumbnail
* Instructions
* Course content

Course media can be uploaded and managed through **Cloudinary**.

---

### ✏️ Course Editing

Instructors can update existing courses and modify course information or associated media.

---

### 📂 Course Content Management

Instructors can structure courses using:

* Sections
* Subsections
* Video lessons

This makes it possible to organize large courses into structured learning modules.

---

### 📋 Instructor Dashboard

Instructors have access to a dedicated dashboard where they can manage the courses they have created.

---

### 🗑️ Course Management

Instructors can remove courses and their associated content through the course management workflow.

---

# 🤖 AI-Powered Learning Tools

One of SkillRise's major features is its integrated **AI Learning Tools**.

SkillRise uses the **Google Gemini API** to provide AI-powered assistance directly within the learning experience.

Instead of requiring students to leave the platform whenever they need help, learners can use AI tools to understand concepts, practice what they learned, and plan what to study next.

The current AI toolkit includes:

* 🧑‍🏫 AI Tutor
* 📝 AI Quiz Generator
* 🗺️ Personalized Learning Path
* 🔐 Authenticated AI API access

All AI endpoints are protected using JWT authentication, ensuring that AI tools can only be accessed by authenticated users.

---

## 🧑‍🏫 AI Tutor

Students can ask questions about programming and technical concepts and receive explanations tailored to their learning level.

The AI Tutor can:

* Explain difficult concepts
* Simplify technical topics
* Provide examples
* Adapt explanations to learner level
* Answer programming-related questions

```text
Student Question
       │
       ▼
JWT Authentication
       │
       ▼
Express Backend
       │
       ▼
Google Gemini API
       │
       ▼
AI-Generated Explanation
       │
       ▼
Example / Clarification
```

The backend sends the learner's question and selected difficulty level to Gemini and returns the generated explanation.

---

## 📝 AI Quiz Generator

Students can provide learning material and automatically generate multiple-choice questions using Gemini.

The generated quiz includes:

* Questions
* Four answer options
* Correct answer
* Explanation

The backend requests structured JSON output from Gemini so the generated quiz can be directly consumed by the application.

```text
Learning Content
       │
       ▼
JWT Authentication
       │
       ▼
Express Backend
       │
       ▼
Google Gemini API
       │
       ▼
Generated Quiz
       │
       ├── Question
       ├── Options
       ├── Correct Answer
       └── Explanation
```

---

## 🗺️ Personalized Learning Path

Students can enter:

* Their learning goal
* Current skills
* Existing experience

Gemini then generates a sequenced learning path containing topics and an explanation of why each topic should be learned at that stage.

```text
Learning Goal
      +
Current Skills
      │
      ▼
JWT Authentication
      │
      ▼
Express Backend
      │
      ▼
Google Gemini API
      │
      ▼
Personalized Learning Path
      │
      ├── Topic 1
      ├── Topic 2
      ├── Topic 3
      ├── Topic 4
      └── Topic 5+
```

The generated learning path is returned in structured JSON format for use within the application.

---

# 🧠 AI Architecture

SkillRise uses a centralized AI helper on the backend to communicate with Google's Gemini API.

```text
                     ┌─────────────────┐
                     │ React Frontend  │
                     └────────┬────────┘
                              │
                         REST API
                              │
                              ▼
                     ┌─────────────────┐
                     │ Express Backend │
                     │                 │
                     │ Auth Middleware │
                     │ AI Controllers  │
                     └────────┬────────┘
                              │
                              ▼
                     ┌─────────────────┐
                     │ AI Helper       │
                     │                 │
                     │ askLLM()        │
                     │ askLLMForJSON() │
                     └────────┬────────┘
                              │
                              ▼
                     ┌─────────────────┐
                     │ Google Gemini   │
                     │      API        │
                     └─────────────────┘
```

The application uses Gemini for both normal text responses and structured JSON generation. The backend sends the API key through an environment variable rather than hard-coding credentials.

AI routes also use JWT authentication so that AI operations are restricted to authenticated users.

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
* JWT authentication
* Bearer token authentication for protected API requests
* Cookie-based authentication
* Protected routes
* Student and Instructor account workflows
* Authenticated AI endpoints

Protected API requests use authentication tokens to verify the identity of the requesting user before allowing access to protected functionality.

---

# 👤 User Profiles

Authenticated users can manage their account and profile information.

The platform maintains user-specific information such as:

* Personal details
* Account type
* Enrolled courses
* Instructor courses
* Learning progress

---

# 📊 Learning Dashboard

Students have access to a personalized learning experience where they can access their enrolled courses and monitor their learning activity.

Instructors have a separate workflow focused on course creation and management.

---

# 🏗️ System Architecture

SkillRise follows a full-stack client-server architecture.

```text
                         ┌───────────────────┐
                         │       User        │
                         └─────────┬─────────┘
                                   │
                                   ▼
                         ┌───────────────────┐
                         │  React Frontend   │
                         │                   │
                         │ React             │
                         │ Redux             │
                         │ Tailwind CSS      │
                         │ React Router      │
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
                         │ Rate Limiting     │
                         │ Request Sanitizer │
                         │ Security Headers  │
                         │ AI Services       │
                         └──────┬──────┬─────┘
                                │      │
                ┌───────────────┘      └─────────────────┐
                ▼                                        ▼
       ┌─────────────────┐                      ┌─────────────────┐
       │     MongoDB     │                      │ External        │
       │                 │                      │ Services        │
       │ Users           │                      │                 │
       │ Courses         │                      │ Gemini API      │
       │ Sections        │                      │ Cloudinary      │
       │ Progress        │                      │ Razorpay        │
       │ Reviews         │                      │ Email Services  │
       └─────────────────┘                      └─────────────────┘
```

---

# 🛠️ Tech Stack

## Frontend

* **React**
* **Redux Toolkit**
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

---

## Backend

* **Node.js**
* **Express.js**
* **MongoDB**
* **Mongoose**
* **JWT**
* **bcrypt / bcryptjs**
* **Cookie Parser**
* **Express File Upload**
* **Cloudinary**
* **Nodemailer**
* **Razorpay**
* **Node Schedule**
* **Axios**
* **dotenv**
* **Helmet**
* **Express Rate Limit**

The backend includes authentication middleware, request sanitization, rate limiting, secure HTTP headers, payment verification, and AI service integration.

---

## 🤖 AI

* **Google Gemini API**
* Gemini-powered AI Tutor
* AI Quiz Generator
* Personalized Learning Path Generator
* Structured JSON generation
* Backend AI helper abstraction
* JWT-protected AI endpoints

SkillRise currently communicates with Gemini through the Gemini REST API using Axios and the `GEMINI_API_KEY` environment variable.

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
│   │   ├── auth.js
│   │   ├── rateLimiter.js
│   │   └── sanitize.js
│   ├── models/
│   ├── routes/
│   ├── utils/
│   │   └── aiToolsHelper.js
│   ├── index.js
│   └── package.json
│
└── README.md
```

---

# 🔄 How SkillRise Works

### 1. Create an Account

Users register and verify their account before accessing protected features.

```text
Signup
  ↓
OTP / Email Verification
  ↓
Authenticated User
```

---

### 2. Discover Courses

Students browse available courses and select the content they want to learn.

---

### 3. Enroll

For paid courses:

```text
Course
  ↓
Payment Order
  ↓
Razorpay
  ↓
Payment Verification
  ↓
Enrollment
```

---

### 4. Learn

Students access structured course content organized into sections and video lessons.

---

### 5. Track Progress

Completed lessons are recorded so learners can monitor their progress and continue learning from where they stopped.

---

### 6. Get AI Assistance

Students can use Gemini-powered tools whenever they need additional help.

```text
              AI Learning Tools
                     │
            ┌────────┼────────┐
            ▼        ▼        ▼
          Tutor     Quiz    Learning
                   Generator   Path
                     │
                     ▼
              JWT Authentication
```

AI requests are authenticated before being processed by the backend.

---

### 7. Rate & Review

Students can provide ratings and reviews for courses, helping other learners make informed decisions.

---

# 💳 Payment Architecture

SkillRise integrates Razorpay for course payments.

```text
Student
   │
   ▼
Select Paid Course
   │
   ▼
Create Payment Order
   │
   ▼
Razorpay Checkout
   │
   ▼
Payment Completed
   │
   ▼
Server-side Verification
   │
   ▼
Course Enrollment
```

Payment routes are protected with rate limiting to reduce excessive or abusive payment requests.

---

# ☁️ Media Management

SkillRise uses **Cloudinary** for course media management.

Course thumbnails and uploaded media are stored using Cloudinary, while the resulting URLs are associated with the relevant course data.

---

# 🔒 Security

SkillRise implements multiple backend security measures to protect user accounts, APIs, AI functionality, and payment-related operations.

### 🔑 Authentication

* JWT-based authentication
* Bearer token authentication for protected API requests
* Protected API routes
* Cookie-based authentication
* Password hashing
* OTP/email verification
* Authenticated AI endpoints

### 🛡️ API Security

* **Helmet** for secure HTTP security headers
* **Request sanitization** to reduce NoSQL injection risks
* **Rate limiting** using `express-rate-limit`
* Environment variables for sensitive credentials
* API key protection for Gemini
* Server-side payment verification

### 🚦 Rate Limiting

Different rate limits are applied according to the sensitivity and resource cost of each route category:

| Route Category | Limit                    |
| -------------- | ------------------------ |
| Authentication | 10 requests / 15 minutes |
| AI Tools       | 20 requests / 1 minute   |
| Payment        | 5 requests / 10 minutes  |

This helps reduce brute-force attempts, API abuse, excessive AI requests, and repeated payment-related requests.

### 🧹 Request Sanitization

SkillRise uses custom request sanitization middleware to remove potentially unsafe MongoDB operator-style keys containing `$` and `.` from incoming request data.

This provides an additional layer of protection against NoSQL injection attempts.

### 🪖 Security Headers

Helmet is used to configure secure HTTP response headers and reduce common web security risks.

### 🧹 Production Code Cleanup

Debugging `console.log()` statements used during development and testing have been removed from authentication, payment, and authentication middleware code to keep production code cleaner.

> Never commit `.env` files or expose API keys in the repository.

---

# ⚙️ Getting Started

## Prerequisites

Make sure you have:

* **Node.js**
* **npm**
* **MongoDB / MongoDB Atlas**
* **Cloudinary account**
* **Razorpay account** for payment functionality
* **Google Gemini API key**
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

`npm install` installs the backend dependencies required by SkillRise, including security-related packages such as `helmet` and `express-rate-limit`.

---

## 4. Configure Environment Variables

Create:

```text
server/.env
```

Add the required credentials.

Example:

```env
PORT=4000

MONGODB_URL=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

GEMINI_API_KEY=your_gemini_api_key

CLOUD_NAME=your_cloudinary_cloud_name
API_KEY=your_cloudinary_api_key
API_SECRET=your_cloudinary_api_secret

RAZORPAY_KEY=your_razorpay_key
RAZORPAY_SECRET=your_razorpay_secret

MAIL_HOST=your_mail_host
MAIL_USER=your_mail_user
MAIL_PASS=your_mail_password
```

> Use the exact variable names expected by your local configuration. The AI helper in the current repository reads the Gemini credential from `GEMINI_API_KEY`.

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

---

# 🧪 AI Feature Flow

## AI Tutor

```text
Question
   ↓
Frontend
   ↓
JWT Token
   ↓
Authentication Middleware
   ↓
Backend AI Controller
   ↓
Gemini API
   ↓
Generated Explanation
   ↓
Frontend
```

---

## AI Quiz Generator

```text
Learning Content
   ↓
Frontend
   ↓
JWT Token
   ↓
Authentication Middleware
   ↓
Backend
   ↓
Gemini API
   ↓
Structured JSON
   ↓
Quiz Interface
```

---

## Learning Path Generator

```text
Goal + Current Skills
   ↓
Frontend
   ↓
JWT Token
   ↓
Authentication Middleware
   ↓
Backend
   ↓
Gemini API
   ↓
Structured JSON
   ↓
Personalized Learning Path
```

The current implementation uses Gemini's JSON response mode for the quiz and learning-path workflows, allowing the server to parse the model output directly into application data.

---

# 📸 Screenshots

Add screenshots of the actual application here.

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

Potential improvements include:

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
* 🎓 AI-powered assessment and feedback

---

# 💡 What Makes SkillRise Different?

SkillRise combines a complete e-learning workflow with AI-powered learning assistance and backend security measures.

A traditional learning platform might provide:

```text
Browse → Buy → Watch
```

SkillRise extends that experience:

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

The AI tools are integrated into the learning workflow rather than being treated as a standalone chatbot.

The platform also uses backend security practices such as JWT authentication, rate limiting, secure HTTP headers, and request sanitization to protect application functionality.

**Google Gemini API powers the intelligent learning features**, including concept explanations, automated quiz generation, and personalized learning paths.

---

# 👩‍💻 Author

## Palak Mani Tripathi

**B.Tech — Computer Science & Engineering**

Full-Stack Developer interested in **MERN development, AI-powered applications, and building practical products with modern web technologies.**

### GitHub

https://github.com/tripathipalak

---

# ⭐ Support

If you found SkillRise interesting, consider giving the repository a ⭐.

Feedback and suggestions are always welcome.

---

## 📄 License

This project is developed for educational, portfolio, and demonstration purposes.
