# School System Project 🏫

A web application for managing a school system with role-based access control. This application allows users to register and log in as different roles (student, teacher, principal, and master) and provides functionality to manage users and their data efficiently.

## Features

- Role-based user registration and authentication
- Different access levels for students, teachers, principals, and masters
- View and manage lists of students, teachers, and principals
- Count users by role
- Secure password storage using bcrypt

## Technologies Used

- **Node.js**: Backend JavaScript runtime
- **Express**: Web application framework for Node.js
- **Mongoose**: MongoDB object modeling tool
- **MongoDB**: NoSQL database
- **Bcrypt**: Password hashing library
- **JWT**: JSON Web Tokens for secure authentication

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/school-system.git
   cd school-system
    npm install
     npm start

## API Endpoints

### Authentication
- **POST /api/auth/register**: Register a new user.
  - **Request Body**:
    ```json
    {
      "name": "Alice Student",
      "email": "alice@student.com",
      "password": "studentPass123",
      "role": "student"
    }
    ```
  - **Response**: 
    - **Success**: `{ "success": true, "message": "User registered successfully." }`
    - **Error**: `{ "success": false, "message": "Error message." }`

- **POST /api/auth/login**: Login an existing user.
  - **Request Body**:
    ```json
    {
      "email": "alice@student.com",
      "password": "studentPass123"
    }
    ```
  - **Response**:
    - **Success**: 
      ```json
      {
        "success": true,
        "token": "jwt.token.here"
      }
      ```
    - **Error**: `{ "success": false, "message": "Invalid credentials." }`

### Role Management

- **GET /api/roles/students**: Get a list of all students.
  - **Response**:
    ```json
    {
    "message": "Welcome to Students Dashboard",
    "report": {
        "totalStudents": 3,
        "Students_List": [
            {
                "_id": "671ba11a643b58c3be2327f8",
                "name": "Kirtan",
                "username": "kirtan@gmail.com"
            },
            {
                "_id": "671ba126643b58c3be2327fa",
                "name": "bikram",
                "username": "bikram@gmail.com"
            },
            {
                "_id": "671ba137643b58c3be2327fe",
                "name": "meet",
                "username": "meet@gmail.com"
            }
        ]
    }


- **GET /api/roles/teachers**: Get a list of all teachers.
  - **Response**:
    ```json
    {
    "message": "Welcome to Teachers Dashboard",
    "report": {
        "totalStudents": 3,
        "totalTeachers": 2,
        "Students_List": [
            {
                "_id": "671ba11a643b58c3be2327f8",
                "name": "Kirtan",
                "username": "kirtan@gmail.com"
            },
            {
                "_id": "671ba126643b58c3be2327fa",
                "name": "bikram",
                "username": "bikram@gmail.com"
            },
            {
                "_id": "671ba137643b58c3be2327fe",
                "name": "meet",
                "username": "meet@gmail.com"
            }
        ],
        "Teachers_list": [
            {
                "_id": "671ba0e2643b58c3be2327f4",
                "name": "Keyur Sir",
                "username": "teachers@gmail.com"
            },
            {
                "_id": "671ba0f8643b58c3be2327f6",
                "name": "Riddhi mam",
                "username": "teachers1@gmail.com"
            }
        ]
    }


- **GET /api/roles/principal**: Get a list of all principals.
  - **Response**:
    ```json
    {
    "message": "Welcome to Principal Dashboard",
    "report": {
        "totalStudents": 3,
        "totalTeachers": 2,
        "totalPrincipal": 0,
        "Students_List": [
            {
                "_id": "671ba11a643b58c3be2327f8",
                "name": "Kirtan",
                "username": "kirtan@gmail.com"
            },
            {
                "_id": "671ba126643b58c3be2327fa",
                "name": "bikram",
                "username": "bikram@gmail.com"
            },
            {
                "_id": "671ba137643b58c3be2327fe",
                "name": "meet",
                "username": "meet@gmail.com"
            }
        ],
        "Teachers_list": [
            {
                "_id": "671ba0e2643b58c3be2327f4",
                "name": "Keyur Sir",
                "username": "teachers@gmail.com"
            },
            {
                "_id": "671ba0f8643b58c3be2327f6",
                "name": "Riddhi mam",
                "username": "teachers1@gmail.com"
            }
        ],
        "Principal_List": []
    }


- **GET /api/roles/master**: Get a list of all masters.
  - **Response**:
    ```json
    {
    "message": "Welcome to Master Dashboard",
    "report": {
        "totalStudents": 3,
        "totalTeachers": 2,
        "totalPrincipal": 0,
        "totalMaster": 1,
        "students_List": [
            {
                "_id": "671ba11a643b58c3be2327f8",
                "name": "Kirtan",
                "username": "kirtan@gmail.com",
                "role": "student"
            },
            {
                "_id": "671ba126643b58c3be2327fa",
                "name": "bikram",
                "username": "bikram@gmail.com",
                "role": "student"
            },
            {
                "_id": "671ba137643b58c3be2327fe",
                "name": "meet",
                "username": "meet@gmail.com",
                "role": "student"
            }
        ],
        "teachers_list": [
            {
                "_id": "671ba0e2643b58c3be2327f4",
                "name": "Keyur Sir",
                "username": "teachers@gmail.com",
                "role": "teacher"
            },
            {
                "_id": "671ba0f8643b58c3be2327f6",
                "name": "Riddhi mam",
                "username": "teachers1@gmail.com",
                "role": "teacher"
            }
        ],
        "principal_List": [],
        "master_List": [
            {
                "_id": "671ba067643b58c3be2327f0",
                "name": "Chandrakant",
                "username": "master@gmail.com",
                "role": "master"
            }
        ]
    }

  
