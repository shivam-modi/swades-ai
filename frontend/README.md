# Frontend Application

## Overview

This is the frontend application for a blog platform, built using Next.js with React. It provides a user interface for interacting with the blog API, allowing users to view posts, log in, sign up, and create new posts.

## Tech Stack

- **Next.js**: React framework for server-side rendering and static site generation.
- **React**: JavaScript library for building user interfaces.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Axios**: Promise-based HTTP client for making API requests.
- **Yarn**: Package manager used for managing dependencies.

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

### Running the Application

1. **Start the development server**:

   ```bash
   yarn dev
   ```

   The application will start and be available at `http://localhost:3000`.

2. **Build for production**: To create an optimized production build, run:

   ```bash
   yarn build
   ```

   After building, you can start the production server with:

   ```bash
   yarn start
   ```

## Environment Variables

Ensure you have the following environment variables configured in a `.env.local` file:

- `NEXT_PUBLIC_API_URL`: Base URL for the API server.

## API Integration

- **Login**: Use `/api/login` to authenticate and obtain a JWT token.
- **Signup**: Use `/api/signup` to create a new user.
- **Posts**: Use `/api/v1/posts/all` to retrieve all posts and `/api/v1/posts/new` to create new posts.

## Pages

- **Homepage (`/`)**: Lists all blog posts.
- **Login (`/login`)**: Allows users to log in.
- **Signup (`/signup`)**: Allows users to sign up.
- **Dashboard (`/dashboard`)**: Private route where logged-in users can create new posts and view their own posts.

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add new feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Create a new Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

```

