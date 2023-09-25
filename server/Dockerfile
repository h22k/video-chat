FROM node:18 AS build
WORKDIR /app
COPY package.json ./
COPY pnpm-lock.yaml ./
RUN npm install -s

COPY . .

CMD ["npm", "run", "start:dev"]
