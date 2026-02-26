# User Master Pro | Express & MongoDB CRUD Review

A professional User Management System built to practice the integration of **Express.js** and **NoSQL (MongoDB Atlas)**. This project features a full CRUD (Create, Read, Update, Delete) flow with a modern, responsive UI.

## 🚀 Features

* **Full CRUD**: Create, view, edit, and delete users in real-time.
* **Cloud Database**: Connected to MongoDB Atlas for persistent storage.
* **Modern UI**: Styled with Tailwind CSS and Font Awesome icons.
* **Role & Status Management**: Assign specific roles (Developer, Student, etc.) and toggle status.
* **Clean Architecture**: Organized folder structure for better maintainability.

## 🛠️ Tech Stack

* **Frontend**: HTML5, Tailwind CSS, JavaScript (ES6 Modules).
* **Backend**: Node.js, Express.js.
* **Database**: MongoDB Atlas (Mongoose ODM).
* **Environment**: Dotenv for secure configuration.

## 📁 Project Structure

```text
MONGODBTEST/
├── backend/
│   ├── config/          # Database connection logic
│   ├── controllers/     # Route logic & controllers
│   ├── models/          # Mongoose Schemas (User)
│   ├── routes/          # API Endpoints
│   └── server.js        # Main entry point
├── frontend/
│   ├── js/              # API calls and UI logic
│   └── index.html       # Responsive interface
└── .gitignore           # Excludes node_modules and .env

Gemini ha dicho

My bad, Matias! I've updated the info. It’s important to have your own name on your projects, especially when you're building a solid portfolio like this one.

Here is the complete, copyable README.md updated with your GitHub handle and the project details in English.
README.md
Markdown

# User Master Pro | Express & MongoDB CRUD Review

A professional User Management System built to practice the integration of **Express.js** and **NoSQL (MongoDB Atlas)**. This project features a full CRUD (Create, Read, Update, Delete) flow with a modern, responsive UI.

## 🚀 Features

* **Full CRUD**: Create, view, edit, and delete users in real-time.
* **Cloud Database**: Connected to MongoDB Atlas for persistent storage.
* **Modern UI**: Styled with Tailwind CSS and Font Awesome icons.
* **Role & Status Management**: Assign specific roles (Developer, Student, etc.) and toggle status.
* **Clean Architecture**: Organized folder structure for better maintainability.

## 🛠️ Tech Stack

* **Frontend**: HTML5, Tailwind CSS, JavaScript (ES6 Modules).
* **Backend**: Node.js, Express.js.
* **Database**: MongoDB Atlas (Mongoose ODM).
* **Environment**: Dotenv for secure configuration.

## 📁 Project Structure

```text
MONGODBTEST/
├── backend/
│   ├── config/          # Database connection logic
│   ├── controllers/     # Route logic & controllers
│   ├── models/          # Mongoose Schemas (User)
│   ├── routes/          # API Endpoints
│   └── server.js        # Main entry point
├── frontend/
│   ├── js/              # API calls and UI logic
│   └── index.html       # Responsive interface
└── .gitignore           # Excludes node_modules and .env

⚙️ Installation & Setup

    Clone the repository:
    Bash

    git clone [https://github.com/MatiasAC110508/MONGODBServer.git](https://github.com/MatiasAC110508/YOUR_REPO_NAME.git)
    cd MONGODBServer

    Backend Configuration:

        Navigate to the folder: cd backend

        Install dependencies: npm install

        Create a .env file in the backend/ directory:
        Fragmento de código

        PORT=5000
        MONGO_URI=mongodb+srv://<your_user>:<your_password>@cluster.mongodb.net/accounts

        Run the server: npm run dev

    Frontend Access:

        Use Live Server on frontend/index.html to launch the app.

📝 Usage

    Register: Fill out the form and click "Save User".

    Edit: Use the edit icon; the form updates to "Edit Mode" automatically.

    Delete: Use the trash icon to remove users from the Atlas database.

👤 Author

    GitHub: @MatiasAC110508

Developed as a comprehensive review of Fullstack NoSQL development.

