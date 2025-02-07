# Use the official node image (already includes yarn)
FROM node:22-alpine

# Set the working directory
WORKDIR /app

# Copy package.json, yarn.lock, and package.json files
COPY package*.json yarn.lock ./

# Install dependencies with Yarn
RUN yarn install

# Copy the rest of the application
COPY . .

# Build the app
RUN yarn build

# Expose the application port
EXPOSE 8080

# Start the app
CMD ["yarn", "start"]
