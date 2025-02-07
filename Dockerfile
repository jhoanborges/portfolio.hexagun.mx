# Use the official Node.js Alpine image
FROM node:22-alpine

# Set working directory
WORKDIR /app

# Copy package.json and yarn.lock
COPY package*.json yarn.lock ./

# Install dependencies
RUN yarn install --frozen-lockfile

# Copy the rest of the application
COPY . .

# Set environment variable for port
ENV PORT=3000

# Build the app for production
RUN yarn build

# Expose the app on the port specified by the $PORT environment variable
EXPOSE $PORT

# Start the app in production mode
CMD ["yarn", "preview"]