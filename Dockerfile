# Step 1: Use an official Node.js runtime as a parent image
FROM node:18-alpine as build

# Step 2: Set the working directory inside the container
WORKDIR /app

# Step 3: Copy package.json and package-lock.json (or yarn.lock) to the container
COPY package*.json ./

# Step 4: Install the project dependencies inside the container
RUN npm install

# Step 5: Copy the rest of the application code to the container
COPY . .

# Step 6: Build the React application for production
RUN npm run build

# Step 7: Use a lightweight HTTP server to serve the production build
# Use the 'serve' package, which will serve the static files from the 'build' directory
FROM nginx:alpine

# Step 8: Copy the build directory to the nginx HTML directory
COPY --from=build /app/build /usr/share/nginx/html

# Step 9: Expose port 80 to make the app accessible outside the container
EXPOSE 80

# Step 10: Run the Nginx server when the container starts
CMD ["nginx", "-g", "daemon off;"]

# Step 10: command to run the app
CMD npm start