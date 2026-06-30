FROM node:20-alpine

WORKDIR /app

# Install deps separately so layer is cached
COPY package.json ./
RUN npm install

# Source is mounted at runtime (dev mode), but copy here for build target
COPY . .

EXPOSE 4321

CMD ["npm", "run", "dev"]
