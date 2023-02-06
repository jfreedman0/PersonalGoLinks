Based on https://iafisher.com/blog/2020/10/golinks

## Prerequisites

* Alias docker to podman

## Old steps

docker build -t personalgolinks_web server

docker run -p 5000:5000 -d --restart=always localhost/personalgolinks_web

## New steps using compose

podman-compose up --build -d --force-recreate

docker system prune