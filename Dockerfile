FROM node:14-alpine
WORKDIR /app
COPY package.json /app/
COPY package-lock.json /app/
RUN npm ci
COPY . .
EXPOSE 3000
ENTRYPOINT [ "npm", "start" ]