# Use a official Node.js as a parent image
FROM node:18

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (or yarn-shrinkwrap.json)
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of your application's code
COPY . .

# Build your NestJS application
RUN yarn run build

# Expose the port the app runs on
EXPOSE 3000

# Run the app when the container launches
CMD ["yarn", "run", "start:prod"]