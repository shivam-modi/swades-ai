# Backend API

## Overview

This is a backend API built with Express and Sequelize for managing a blog application. The API supports user authentication, blog post creation, and retrieval of posts.

## Tech Stack

- **Node.js**: JavaScript runtime for building server-side applications.
- **Express**: Web framework for Node.js.
- **Sequelize**: ORM for managing database interactions.
- **SQLite**: Lightweight SQL database for local development.
- **Yarn**: Package manager used for managing dependencies.
- **bcrypt**: For hashing passwords.
- **dotenv**: For managing environment variables.
- **cors**: For enabling Cross-Origin Resource Sharing.
- **lodash**: For manipulating arrays and objects.
- **morgan**: For logging requests and responses.

## Setup

### Prerequisites

- Node.js
- Yarn

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. Install dependencies using Yarn:

   ```bash
   yarn install
   ```

### Database Setup

1. **Create the SQLite database**: This step is typically handled automatically by Sequelize migrations, so manual creation is not usually necessary. Ensure you have the `config/config.json` file correctly set up for SQLite.

2. **Run migrations**: Execute the following command to create the database schema:

   ```bash
   yarn sequelize-cli db:migrate
   ```

   This command applies all the migrations located in the `migrations` folder.

3. **(Optional) Seed the database**: If you have seed files and want to populate the database with initial data, run:

   ```bash
   yarn sequelize-cli db:seed:all
   ```

## Running the Server

1. **Start the server**:

   ```bash
   yarn start
   ```

   The server will start and listen on the port defined in your configuration (default is 3000).

2. **Development Mode**: If you want to run the server in development mode with automatic reloading, use:

   ```bash
   yarn dev
   ```

## API Endpoints

- **POST /signup**: Create a new user.
- **POST /login**: Authenticate a user and return a JWT token.
- **POST /v1/posts/new**: Create a new blog post.
- **GET /v1/posts/all**: Retrieve all blog posts.

## Environment Variables

Ensure you have the following environment variables configured in a `.env` file:

- `DATABASE_URL`: Connection string for the SQLite database.
- `JWT_SECRET`: Secret key for signing JWT tokens.
- `BCRYPT_SALT_ROUNDS`: Number of rounds for hashing passwords with `bcrypt`.
