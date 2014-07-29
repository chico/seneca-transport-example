
## Beanstalk seneca transport example

### Install and run beanstalk

#### OSX

```
$ brew install beanstalkd
$ beanstalkd
```

#### Other environments

See http://kr.github.io/beanstalkd/download.html

### Setup

```
$ (cd ../salestax-plugin && npm install)
$ npm install
```

### Start service

```
$ node service
```

### Run client example

```
$ node client
```
