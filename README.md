# Argent-Bank

> v0.1.0

![Logo of the project](/public/img/argentBankLogo.png)

This codebase contains the code needed to run the react app for Argent Bank

## Getting Started

### Prerequisites

Argent Bank uses the following tech stack:

- [Node.js v12](https://nodejs.org/en/)
- [MongoDB Community Server](https://www.mongodb.com/try/download/community)

Please make sure you have the right versions and download both packages. You can verify this by using the following commands in your terminal:

```bash
# Check Node.js version
node --version

# Check Mongo version
mongo --version
```

## Installation

### Backend

1. Fork this repo: [Project-10-Bank-API](https://github.com/OpenClassrooms-Student-Center/Project-10-Bank-API)
2. Follow these instructions:

```shell
# Create a new directory
mkdir Argent-Bank

# Clone back-end
git clone https://github.com/OpenClassrooms-Student-Center/Project-10-Bank-API

# Move to back-end directory
cd Project-10-Bank-API

# Install dependencies
npm install

# Start local dev server
npm run dev:server

# Populate database with two users
npm run populate-db
```

Your server should now be running at [http://locahost:3001](http://locahost:3001) and you will now have two users in your MongoDB database!

### Frontend

To launch React App you need to follow these instructions :

```shell
# Exit back-end
cd..

# Clone front-end
git clone https://github.com/picyoh/YohannPicot_13_17122021

# Move to front-end directory
cd YohannPicot_13_17122021

# Install dependencies
npm install

# Run react app with backend
npm run runBoth 
```

Your server should now be running at [http://locahost:3000](http://locahost:3000) and you will now see the React app at this address!

## Populated Database Data

Once you run the `populate-db` script, you should have two users in your database:

### Tony Stark

- First Name: `Tony`
- Last Name: `Stark`
- Email: `tony@stark.com`
- Password: `password123`

### Steve Rogers

- First Name: `Steve`,
- Last Name: `Rogers`,
- Email: `steve@rogers.com`,
- Password: `password456`

## API Documentation

To learn more about how the API works, once you have started your local environment, you can visit: [http://localhost:3001/api-docs](http://localhost:3001/api-docs)
