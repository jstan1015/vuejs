# dockerfile

# stage 1
FROM node:16.13-alpine3.14 as build
WORKDIR /app
COPY package.json .
RUN npm install --only=production
RUN npm ci --loglevel verbose --only=production
COPY . .
RUN npm run build

# # stage 2
FROM nginx:1.16.0-alpine
COPY --from=build /app/dist /var/www/frontend
# below line must add for NGINX routing
COPY --from=build /app/dist /var/www/frontend
COPY ./config/nginx.conf /etc/nginx/conf.d
EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]