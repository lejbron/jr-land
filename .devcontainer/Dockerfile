FROM node:24-alpine

ENV SHELL=/bin/sh

WORKDIR /app

RUN chown -R node:node /app
USER node

# Install deps separately so layer is cached
COPY --chown=node:node package.json ./
RUN npm install

# Source is mounted at runtime (dev mode), but copy here for build target
COPY --chown=node:node . .

EXPOSE 4321

CMD ["npm", "run", "dev"]
