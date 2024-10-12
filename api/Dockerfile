# Use a base image that supports multiple architectures
FROM node:20

# Set the working directory
WORKDIR /app

# Install Aglio globally
RUN npm install -g aglio@latest

# Set the entrypoint for the container
ENTRYPOINT ["aglio"]