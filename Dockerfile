FROM node:20.10.0

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package.json .
RUN npm install --exact

# Bundle app source
COPY . .

EXPOSE 3000
CMD ["node", "app.js"];