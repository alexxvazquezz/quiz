
FROM ubuntu:16.04

MAINTAINER Alejandro Vazquez

RUN apt-get update \
    && apt-get install -y locales \
    && locale-gen en_US.UTF-8

ENV LANG en_US.UTF-8
ENV LANGUAGE en_US:en
ENV LC_ALL en_US.UTF-8

RUN apt-get install -y nginx curl vim git
RUN echo "daemon off;" >> /etc/nginx/nginx.conf

COPY nginx/default /etc/nginx/sites-available/default

EXPOSE 80

CMD server nginx start
