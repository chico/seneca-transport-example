
This example shows you how to use redis as seneca's transport mechanism.

## Install and run redis

### OSX

$ brew install redis
$ redis-server

### Other environments

See http://redis.io/download

## Setup

$ (cd ../salestax-plugin && npm install)
$ npm install

## Start service

$ node service

## Run client example

$ node client
