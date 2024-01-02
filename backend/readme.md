# Todo App

A simple Todo app with Node.js, Express, MongoDB, and Mongoose.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [API Routes](#api-routes)
- [Frontend](#frontend)
- [Contributing](#contributing)
- [License](#license)

## Features

- User authentication (signup and login)
- CRUD operations for Todos (Create, Read, Update, Delete)
- MVC (Model-View-Controller) structure
- Express for backend
- MongoDB for data storage
- EJS for frontend templating

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
Visit http://localhost:3000/signup to create a new user.
Visit http://localhost:3000/login to log in.
Once logged in, you can access the Todo app at http://localhost:3000/todos.

 ## API Routes
The following API routes are available:

 - GET /todos - Get all todos for the logged-in user.
 - POST /todos - Create a new todo.
 - GET /todos/:id - Get details of a specific todo.
 - PUT /todos/:id - Update the details of a specific todo.
 - DELETE /todos/:id - Delete a specific todo.
