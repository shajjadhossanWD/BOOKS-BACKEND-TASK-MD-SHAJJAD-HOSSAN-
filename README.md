# BOOKS-BACKEND-TASK-MD-SHAJJAD-HOSSAN

This project is a Book & Author Listing System developed using Node.js, Express.js, TypeScript, MongoDB, EJS, JWT cookie authentication, and Redis. The system supports user registration, email verification, login, and user management, along with functionalities for authors to manage books and author details.

## Table of Contents
- [Features](#features)
  - [Authentication System](#authentication-system)
  - [Book & Author Creation](#book--author-creation)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [API Documentation](#api-documentation)
- [Project Structure](#project-structure)
- [License](#license)

## Features

### Authentication System
- **JWT Authentication**: Secure authentication using JSON Web Tokens.
- **Email Verification**: Users must verify their email to complete registration using Nodemailer.
- **Token Management**: Tokens expire after 24 hours to ensure security.
- **User Roles**: Two types of users: 'author' and 'normal user'. Only super admins can create 'author' users.
- **User Operations**: Register, verify email, login, logout, fetch logged-in user info, fetch all users, update user, and delete user.
- **Image Upload**: Used multer middleware for handling image uploads.
- **MVC Pattern**: Followed MVC pattern for clean and reusable code.

### Book & Author Creation
- **Author Privileges**: Only 'author' users can create and update books and author details.
- **Elements**: name= book name, author= author name, publicationDate, description = about the book, price = book price, genres= genres list
- **User Privileges**: Normal users can view all books and author lists.
- **CRUD Operations**: Authors can create, update, retrieve by ID, delete, and delete by ID for both books and authors.
- **MVC Pattern**: Followed MVC pattern for clean and reusable code.

## Author login details for Add/update/get/delete books and authors
 Email: shajjadhossan111@gmail.com
 Password: 123456

## Technologies Used
- **Node.js** (v20.13.1 LTS)
- **Express.js**
- **TypeScript**
- **MongoDB**
- **EJS**
- **JWT Authentication**
- **Nodemailer**
- **Redis**
- **Multer**

## Installation

1. **Clone the repository**
    ```bash
    git clone https://github.com/shajjadhossanWD/BOOKS-BACKEND-TASK-MD-SHAJJAD-HOSSAN-.git
    cd BOOKS-BACKEND-TASK-MD-SHAJJAD-HOSSAN-
    ```

2. **Install dependencies**
    ```bash
    npm install
    ```

3. **Run the application**
    ```bash
    npm start
    ```

4. **For development, build the project**
    ```bash
    npm run build
    npm start
    ```

## Environment Variables

Create a `.env` file in the root of the project and add the following environment variables:

```plaintext
DB_URI=mongodb+srv://booksdb:oTd5VBFIdoPFm0Sl@cluster0.0yvpplb.mongodb.net/bookscollection
PORT=5050
NODE_ENV=production
ACTIVATION_SECRET=43tt654g4t3tv4534
ORIGIN=["http://localhost:3000"]
ACCESS_TOKEN_SECRET=accesstokenbooksbackendtask
REFRESH_TOKEN_SECRET=refreshtokenbooksbackendtask
REDIS_URL=rediss://default:6031724e877d4ebb8f245cfe064bd80b@usable-quail-42199.upstash.io:42199
SMTP_SERVICE=Gmail
SMTP_MAIL=shajjadhossan111@gmail.com
SMTP_PASSWORD="zynoxletekhzjtel"
ACCESS_TOKEN="HVevrtrApMqqDx42suFDpt7C3fukeyWQ9XP5ayA3KTyKbsHrx9"
REFRESH_TOKEN="Kf9XM7rYTXEkdafYy92anPNjH5jWgw98yEBp2e38RFzQjBwY6y"
ACCESS_TOKEN_EXPIRE=5
REFRESH_TOKEN_EXPIRE=5
```

## API Documentation

Detailed API documentation is available at [Postman API Documentation](https://documenter.getpostman.com/view/19571731/2sA3QqesJj).

## Project Structure

The project follows the MVC (Model-View-Controller) pattern:

```
src/
├── controllers/
├── models/
├── routes/
├── middlewares/
├── services/
├── utils/
├── views/
└── index.ts
```

## License

This project is licensed under the MIT License. 

---

Developed by Md Shajjad Hossan. For any queries, feel free to contact at shajjadhossan111@gmail.com.
