# Patient Service API

## Overview
This is the backend service for managing patient data, built using Express.js and MongoDB. The API allows CRUD operations on patient information and supports file uploads.

## Installation

### Install Dependencies
Run the following command to install the necessary dependencies:

```bash
npm install
```

## Setup Environment

1. Rename the `.example.env` file to `.env`.
2. Set the following environment variables in the `.env` file:
   - **PORT**: Application server port number.
   - **DBPORT**: MongoDB server port number.
   - **DATABASE**: Name of your database.
   - **NODE_ENV**: Set to `development` for debugging or `production` for deployment.

## Running the Application

To run the application, use:
```bash
npm start
```
For development purposes with automatic server restarts, use:
```bash
npm run dev
```

## Documentation

Access API documentation at `/api-docs` after running the server. Swagger UI provides detailed information about available endpoints and how to interact with them.

## Contributing

If you'd like to contribute, please fork the repository and use a feature branch. Pull requests are warmly welcome.

