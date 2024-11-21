# Use the official Node.js image as a base
FROM node:16

# Set the working directory inside the container to /app
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies specified in package.json
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Expose the port the application will run on
EXPOSE 3003

# Command to run the application
CMD ["npm", "start"]
