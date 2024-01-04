# Todo App

A simple Todo app with Node.js, Express, MongoDB, and Mongoose.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [API Routes](#api-routes)
- [Contributing](#contributing)
- [License](#license)

## Features

- User authentication (signup and login)
- CRUD operations for Todos (Create, Read, Update, Delete)
- MVC (Model-View-Controller) structure
- Express for backend
- MongoDB for data storage
- Also Implemented Rate Limter 


## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/guptag0808/charitism_assignment.git
   cd backend

## Install Dependancy
- npm install

## Deploy Link
- Visit https://todo-backend-app-i82u.onrender.com
## Usage
- Visit https://todo-backend-app-i82u.onrender.com/signup to create a new user.
- Visit https://todo-backend-app-i82u.onrender.com/login to log in.
- Once logged in, you can access the Todo app at https://todo-backend-app-i82u.onrender.com/todo.

 ## API Routes
The following API routes are available:
 - GET /todo - Get all todos for everyone without login
 - GET /todo/mytodo - Get all todos for the logged-in user.
 - POST /todo/create - Create a new todo.
 - GET /todo/:id - Get details of a specific todo.
 - PUT /todo/:id - Update the details of a specific todo.
 - DELETE /todo/:id - Delete a specific todo.

 ### Rate Limit
 - Every Get routes have an limit to execute 5 times in a minute.

 ### `POST /signup`

For signup.

#### Request

- **Endpoint:** `/signup`
- **Method:** `POST`
- **Request Body:**

  ```json
  {
    "name":"Raj",
	"email":"raj@gmail.com",
	"password":"raj"
  }
  

For Login

#### Request

- **Endpoint:** `/login`
- **Method:** `POST`
- **Request Body:**

  ```json
  {
    
	"email":"raj@gmail.com",
	"password":"raj"
  }
 
 ### Authentication
  - Paas the generated token to headers
 

 ### `POST /todos`

Create a new todo.

#### Request

- **Endpoint:** `/todo/create`
- **Method:** `POST`
- **Request Body:**

  ```json
  {
    "task": "string",
	"compeleted": true
  }

### `GET /todos`

Get all new todos.

#### Request

- **Endpoint:** `/todo`
- **Method:** `GET`


  ### `DELETE /todos`

Delete  todo.

#### Request

- **Endpoint:** `/todo/:Id`
- **Method:** `DELETE`


 ### `POST /todos`

Update  todo.

#### Request

- **Endpoint:** `/todo/:id`
- **Method:** `UPDATE`

 ### `POST /todos`

Get all todo of login users.

#### Request

- **Endpoint:** `/todo/mytodo`
- **Method:** `GET`


