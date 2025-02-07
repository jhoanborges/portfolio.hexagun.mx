# Use the official node image
FROM node:22-alpine

# Set the working directory
WORKDIR /app

# Copy package.json, yarn.lock, and package.json files
COPY package*.json yarn.lock ./

# Install dependencies with Yarn
RUN yarn install

# Copy the rest of the application
COPY . .

# Set environment variable for port
ENV PORT=3000

# Build the app for production
RUN yarn build

# Expose the app on port 8080 (Cloud Run's expected port)
EXPOSE 3000
# Ensure the React app runs on port 8080
CMD ["sh", "-c", "PORT=3000 yarn start"]
