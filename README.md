## Company Info Dashboard
This project was bootstrapped with Create React App.
## Features
Mosaic Layout: Uses a customizable mosaic layout to display panels with company information.
Company Selection: Allows users to dynamically select and display detailed information about companies.
Responsive Design: Optimized for various screen sizes.
Dockerized: Easily deployable as a Docker container with Nginx.
Available Scripts
In the project directory, you can run:

### `npm start`
Runs the app in development mode.
Open http://localhost:3000 to view it in the browser.

The page will reload if you make edits, and you will also see any lint errors in the console.

### `npm test`
Launches the test runner in interactive watch mode.
See more about running tests here.

### `npm run build`
Builds the app for production to the build folder.
It bundles React in production mode and optimizes the build for best performance.

The build is minified, and the filenames include the hashes.
Your app is now ready for deployment! See more details on deployment here.

### `npm run eject`
Note: This is a one-way operation. Once you eject, you can't go back!

If you aren’t satisfied with the default build configuration, you can eject to gain full control. This command removes the single build dependency from your project.

Docker Setup
This project includes a Dockerfile to facilitate containerization and deployment.

Building the Docker Image

### `docker build -t company-info-dashboard `.

Running the Docker Container

### `docker run -p 8080:80 company-info-dashboard`

Docker Compose (Optional)
If you prefer to use Docker Compose, run the following:

### `docker-compose up --build`
