FROM nginx:alpine
COPY ./snowpack.crt /etc/nginx/conf.d/
COPY ./snowpack.key /etc/nginx/conf.d/
COPY demo/www /usr/share/nginx/html
COPY default.conf /etc/nginx/conf.d/
