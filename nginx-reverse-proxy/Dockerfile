FROM nginx:1.16.0-alpine
COPY ./config/nginx.conf /etc/nginx/conf.d
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]