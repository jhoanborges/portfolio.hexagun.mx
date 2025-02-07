# Use the official node image
FROM node:22-alpine

# Install Yarn globally
RUN npm install -g yarn

# Set the working directory
WORKDIR /app

# Copy package.json and yarn.lock
COPY package*.json yarn.lock ./

# Install dependencies with Yarn
RUN yarn install

# Copy the rest of the application
COPY . .

# Build the app
RUN yarn build

# Expose the application port
EXPOSE 3000

# Start the app
CMD ["yarn", "start"]
