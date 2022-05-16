FROM node:17-alpine

WORKDIR /app

COPY package.json ./

COPY yarn.lock ./ 

COPY tsconfig.json ./

RUN yarn 

COPY . . 


ENV PORT=3002

EXPOSE 3002 

CMD ["yarn", "start"]  