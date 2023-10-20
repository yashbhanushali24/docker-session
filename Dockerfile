FROM node:18
# Create app directory
WORKDIR /usr/src/app
# Install app dependencies
COPY . .
RUN npm install
EXPOSE 8080
CMD [ "node", "app.js" ]