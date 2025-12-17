FROM node:lts-alpine
WORKDIR /usr

COPY ./ .

RUN ls -la

RUN npm install
RUN npm run build

EXPOSE 3000
# This run the server at default port 3000
CMD ["npm", "run", "start"]