# Define from what image we want to build from
FROM node:12.16.2

# Provides metadata regarding the Dockerfile
LABEL version="1.0"
LABEL description="Docker image for final project "
# LABEL maintainer = "skapoo22@uic.edu"

# Sets the working directory for application in container
WORKDIR /app

# Which files would we like to copy into the construction of the image
COPY . /app

# Install dependencies 
RUN npm install

# Port
EXPOSE 3001

# What commands we would like to run once 
CMD ["npm", "start"]