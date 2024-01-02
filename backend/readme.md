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


## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/todo-app.git
   cd todo-app

## Install Dependancy
- npm install

## Usage
- Visit http://localhost:3000/signup to create a new user.
- Visit http://localhost:3000/login to log in.
- Once logged in, you can access the Todo app at http://localhost:3000/todos.

 ## API Routes
The following API routes are available:
 - GET /todo - Get all todos for everyone without login
 - GET /todo/mytodo - Get all todos for the logged-in user.
 - POST /todo/create - Create a new todo.
 - GET /todo/:id - Get details of a specific todo.
 - PUT /todo/:id - Update the details of a specific todo.
 - DELETE /todo/:id - Delete a specific todo.

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
   ### `POST /signup`

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


