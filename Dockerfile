FROM node:18 as development

WORKDIR /app
COPY package*.json ./
RUN npm install -g @nestjs/cli && npm install
COPY . .
EXPOSE 3000

# override it with diff compose files
CMD ["npm", "run" , "start:dev"]



FROM node:18 as production

WORKDIR /app
COPY package*.json ./
RUN npm install -g @nestjs/cli && npm install --only=production
COPY . .
EXPOSE 3000

# override it with diff compose files
CMD ["npm", "run" , "start:dev"]
