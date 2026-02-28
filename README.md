Software Integration Exercise 1

This project is a small NodeJS application that connects to a PostgreSQL database. It uses three environments (dev, release, prod) and loads the correct `.env` file depending on the value of `NODE_ENV`. The app includes a simple CRUD for users.

## Project Structure

my-app/
  config/
    config.js
  db/
    index.js
  models/
    userModel.js
  services/
    userService.js
  routes/
    userRoutes.js
  server.js
  .env.dev
  .env.release
  .env.prod
  package.json

## Requirements

- NodeJS
- PostgreSQL
- Postman or similar tool
- Git

## Installation

Run this inside the project folder:

npm install

## Environment Files

There are three environment files:

.env.dev  
.env.release  
.env.prod  

Each file contains:

PG_HOST=localhost  
PG_USER=postgres  
PG_PASSWORD=yourpassword  
PG_DATABASE=myapp_dev (or myapp_release / myapp_prod)  
PG_PORT=5432  

Replace `yourpassword` with your PostgreSQL password.

## PostgreSQL Setup

Create three databases in pgAdmin:

- myapp_dev
- myapp_release
- myapp_prod

Inside each database, create the users table:

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100)
);

## Running the App

Set the environment and start the server.

Development:

$env:NODE_ENV="dev"  
node server.js

Release:

$env:NODE_ENV="release"  
node server.js

Production:

$env:NODE_ENV="prod"  
node server.js

The server runs on port 3000.

## Testing the API (Postman)

Get all users:

GET http://localhost:3000/users

Add a user:

POST http://localhost:3000/users

Body (raw JSON):

{
  "name": "TestUser"
}

## Git Flow

The project uses four branches:

- main
- dev
- release
- prod

Basic workflow:

1. Work on dev
2. Merge dev into release
3. Merge release into prod

Commands:

git checkout dev  
git add .  
git commit -m "work"  
git push origin dev  

Merge:

git checkout release  
git merge dev  
git push origin release  

Then:

git checkout prod  
git merge release  
git push origin prod  

## Notes

This project is for the Software Integration Exercise 1 assignment. It focuses on clean structure, working environments, CRUD, and correct Git branching.
