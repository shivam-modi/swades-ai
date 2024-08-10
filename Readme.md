# Swades AI Blog Assignment

## Overview

This repository contains both the backend and frontend components of the project. The backend is built with Express and uses SQLite as the database. The frontend is built with Next.js.

## Tech Stack

### Backend
- **Framework:** Express
- **Database:** SQLite
- **ORM:** Sequelize
- **Other Tools:** `sequelize-cli` for migrations

### Frontend
- **Framework:** Next.js
- **Styling:** Tailwind CSS

## Setup Instructions

### Cloning the Repository

1. Clone the repository:
   ```bash
   git clone https://github.com/shivam-modi/swades-ai.git
   cd swades-ai
   ```

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   yarn install
   ```

3. Create the SQLite database and run migrations:
   ```bash
   yarn sequelize-cli db:migrate
   ```

4. Create a `.env` file by copying `.env.example` and configure the necessary environment variables.

5. Start the backend server:
   ```bash
   yarn dev
   ```
   The backend will be available at `http://localhost:2000`.

### Frontend Setup

1. Open a new terminal instance and navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   yarn install
   ```

3. Start the frontend server:
   ```bash
   yarn dev
   ```
   The frontend will be available at `http://localhost:3000`.

## Notes

- Ensure that the backend server is running before starting the frontend server.
- Both frontend and backend should be run concurrently for proper operation.

## License

This project is for assignment purposes only and is not intended for public use.

```

Feel free to adjust any details according to your project specifics.