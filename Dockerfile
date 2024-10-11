FROM node:lts-alpine3.20
WORKDIR /app
ENV GOOGLE_CLOUD_BUILD_LOGS_OPTION=CLOUD_LOGGING_ONLY
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["node", "index.js"]
