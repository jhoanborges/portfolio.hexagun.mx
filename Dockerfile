# Use the official node image
FROM node:22-alpine

# Set the working directory
WORKDIR /app

# Copy package.json, yarn.lock files
COPY package*.json yarn.lock ./

# Install dependencies with Yarn
RUN yarn install

# Copy the rest of the application
COPY . .

# Set environment variable for port (Cloud Run expects the container to listen on $PORT)
ENV PORT=3000

# Build the app for production
RUN yarn build

# Expose the app on port 3000 (Cloud Run's expected port)
EXPOSE 3000

# Start the React app, it will automatically listen on the $PORT environment variable
CMD ["yarn", "start"]
