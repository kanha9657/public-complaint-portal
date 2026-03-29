
The Public Complaint Portal is a web application designed to allow users to submit complaints and for administrators to manage those complaints. The application consists of a client-side interface built with HTML, CSS, and JavaScript, and a server-side application using Node.js and Express, with a MySQL database for data storage.

## Features
- User login and registration
- Admin login for managing complaints
- Form for users to submit complaints
- View complaint details
- Admin functionalities to view and manage all complaints

## Project Structure
```
public-complaint-portal
├── client
│   ├── public
│   │   ├── index.html
│   │   ├── user-login.html
│   │   ├── admin-login.html
│   │   ├── submit-complaint.html
│   │   └── complaint-details.html
│   ├── src
│   │   ├── css
│   │   │   └── styles.css
│   │   ├── js
│   │   │   ├── app.js
│   │   │   ├── auth.js
│   │   │   ├── admin.js
│   │   │   └── api.js
│   │   └── components
│   │       ├── header.html
│   │       └── footer.html
│   └── package.json
├── server
│   ├── src
│   │   ├── index.js
│   │   ├── config
│   │   │   └── db.js
│   │   ├── routes
│   │   │   ├── auth.js
│   │   │   ├── complaints.js
│   │   │   └── admin.js
│   │   ├── controllers
│   │   │   ├── authController.js
│   │   │   ├── complaintController.js
│   │   │   └── adminController.js
│   │   ├── models
│   │   │   ├── userModel.js
│   │   │   └── complaintModel.js
│   │   ├── middleware
│   │   │   └── authMiddleware.js
│   │   └── utils
│   │       └── validators.js
│   ├── package.json
│   └── .env.example
├── db
│   ├── schema.sql
│   └── seed.sql
├── docker-compose.yml
├── Dockerfile
├── .gitignore
└── README.md
```

## Getting Started

### Prerequisites
- Node.js
- MySQL
- Docker (optional)

### Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   cd public-complaint-portal
   ```

2. Set up the database:
   - Create a MySQL database and run the SQL commands in `db/schema.sql` to create the necessary tables.
   - Optionally, run `db/seed.sql` to seed the database with initial data.

3. Install server dependencies:
   ```
   cd server
   npm install
   ```

4. Install client dependencies:
   ```
   cd client
   npm install
   ```

5. Configure environment variables:
   - Copy `.env.example` to `.env` in the `server` directory and fill in the required values.

### Running the Application
- Start the server:
  ```
  cd server
  npm start
  ```

- Start the client:
  ```
  cd client
  npm start
  ```

### Docker
To run the application using Docker, use the following command:
```
docker-compose up
```
