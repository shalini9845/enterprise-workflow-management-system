# Enterprise Project & Workflow Management System

A full-stack enterprise project and workflow management application designed to help teams manage projects, tasks, task progress, and team collaboration through a secure and structured workflow.

The application is built using React.js for the frontend, Spring Boot for the backend, MySQL for data persistence, and JWT-based authentication for secure API access.

## Features

- User Registration and Login
- JWT-based Authentication
- Protected Routes
- Project Creation, Editing and Deletion
- Task Creation, Editing and Deletion
- Project-wise Task Management
- Task Status Tracking
- Task Priority Management
- Task Due Dates
- Task-specific Comments
- Dashboard with Project and Task Statistics
- Form Validation
- Loading and Error Handling
- RESTful APIs
- Secure Password Hashing using BCrypt
- Duplicate Email Validation
- Global Exception Handling
- MySQL Database Integration
- CORS Configuration
- Stateless Authentication

## Tech Stack

### Frontend

- React.js
- React Router
- JavaScript
- HTML5
- CSS3
- Vite

### Backend

- Java 21
- Spring Boot
- Spring Security
- Spring Data JPA
- Hibernate
- REST APIs
- JWT Authentication
- Maven

### Database

- MySQL

### Development Tools

- Visual Studio Code
- IntelliJ IDEA
- MySQL Workbench
- Git
- GitHub
- Postman

## System Architecture

The application follows a client-server architecture:

```text
React.js Frontend
        |
        | REST API / HTTP
        ↓
Spring Boot Backend
        |
        | Spring Data JPA / Hibernate
        ↓
MySQL Database

## Project Structure

```text
enterprise-workflow-management-system/
│
├── backend/
│   ├── src/
│   │   └── main/
│   │       ├── java/com/workflow/backend/
│   │       │   ├── config/
│   │       │   ├── controller/
│   │       │   ├── dto/
│   │       │   ├── entity/
│   │       │   ├── exception/
│   │       │   ├── repository/
│   │       │   ├── security/
│   │       │   └── service/
│   │       └── resources/
│   │           └── application.properties
│   └── pom.xml
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── context/
│   │   ├── pages/
│   │   ├── routes/
│   │   └── services/
│   ├── package.json
│   └── vite.config.js
│
├── .gitignore
├── README.md
├── package.json
└── package-lock.json
```

## Core Modules

### Authentication Module

The authentication system provides:

* User registration
* User login
* BCrypt password hashing
* JWT token generation
* Protected API endpoints
* Protected frontend routes
* Duplicate email prevention
* Generic invalid credential handling

### Project Management

Users can:

* Create projects
* View projects
* Update projects
* Delete projects
* Open project details
* Manage tasks associated with a project

### Task Management

Users can:

* Create tasks
* Edit tasks
* Delete tasks
* Assign task status
* Set task priority
* Set task due dates
* View project-related tasks

### Comment Management

Users can:

* Add comments to tasks
* View task-specific comments
* Delete comments

### Dashboard

The dashboard provides a quick overview of workflow activity, including:

* Total Projects
* Total Tasks
* TODO Tasks
* In Progress Tasks
* Completed Tasks

## Security

Security was implemented using Spring Security and JWT-based stateless authentication.

Key security practices include:

* BCrypt password hashing
* JWT-based authentication
* Protected REST APIs
* Protected frontend routes
* Stateless session management
* CORS configuration
* CSRF disabled for stateless REST APIs
* Environment variables for sensitive configuration
* Database-level unique constraint for user emails
* Global exception handling
* Generic authentication error messages

Sensitive configuration such as database credentials and JWT secrets is not stored directly in the source code.

## API Overview

### Authentication

```text
POST /api/auth/register
POST /api/auth/login
```

### Projects

```text
GET    /api/projects
POST   /api/projects
PUT    /api/projects/{id}
DELETE /api/projects/{id}
```

### Tasks

```text
GET    /api/tasks
POST   /api/tasks
PUT    /api/tasks/{id}
DELETE /api/tasks/{id}
```

### Comments

```text
GET    /api/comments/task/{taskId}
POST   /api/comments
DELETE /api/comments/{id}
```

> API endpoints may require a valid JWT token depending on the operation.

## Database

The application uses MySQL with Spring Data JPA and Hibernate.

Main data entities include:

* User
* Project
* Task
* Comment

The database schema is automatically managed during development using Hibernate JPA configuration.

## Running the Project Locally

### Prerequisites

Make sure the following are installed:

* Java 21
* Node.js
* npm
* MySQL
* Git

### 1. Clone the Repository

```bash
git clone https://github.com/shalini9845/enterprise-workflow-management-system.git
cd enterprise-workflow-management-system
```

### 2. Configure the Database

Create a MySQL database:

```sql
CREATE DATABASE enterprise_workflow;
```

Configure the required environment variables:

```text
DB_PASSWORD=your_mysql_password
JWT_SECRET=your_jwt_secret
```

The backend reads these values through `application.properties`.

### 3. Start the Backend

Open a terminal:

```bash
cd backend
```

Then run:

```bash
.\mvnw spring-boot:run
```

The backend runs on:

```text
http://localhost:8081
```

### 4. Start the Frontend

Open another terminal from the project root:

```bash
cd frontend
npm install
npm run dev
```

The frontend runs on:

```text
http://localhost:5173
```

## Application Flow

```text
User
  ↓
React Frontend
  ↓
Login / Registration
  ↓
JWT Authentication
  ↓
Protected REST API
  ↓
Spring Boot Services
  ↓
Spring Data JPA / Hibernate
  ↓
MySQL Database
```

## Testing Performed

The application was tested through the complete user workflow, including:

* User registration
* User login
* Protected route access
* Project creation
* Project editing
* Project deletion
* Task creation
* Task editing
* Task deletion
* Project-task relationship
* Task-specific comments
* Comment creation
* Comment deletion
* Dashboard statistics
* Duplicate email handling
* Invalid login credentials
* Invalid JWT access
* Navigation between application pages
* Loading and error states
* Form validation

## Future Improvements

Possible future enhancements include:

* Role-based authorization
* Admin dashboard
* User-to-project assignment
* Task assignment to team members
* Pagination and search
* Advanced filtering
* Email notifications
* File attachments
* Activity/audit logs
* Production deployment
* Automated unit and integration testing
* Docker containerization
* CI/CD pipeline

## Learning Outcomes

This project provided practical experience with:

* React.js application development
* REST API development
* Spring Boot
* Spring Security
* JWT authentication
* Spring Data JPA
* Hibernate ORM
* MySQL database integration
* Entity relationships
* Exception handling
* Form validation
* Frontend-backend integration
* Git and GitHub
* API testing
* Basic application security

## Author

**Shalini Shrivastav**

B.Tech Computer Science Engineering — 2024

### Technologies

`React.js` `Java` `Spring Boot` `Spring Security` `JWT` `MySQL` `Hibernate` `REST API` `Git` `GitHub`

## License

This project is created for learning, portfolio development, and demonstration of full-stack software development skills.
