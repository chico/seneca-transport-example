
## Kafka seneca transport example

### Install kafka

#### OSX

See https://gist.github.com/ekampf/8349429

#### Other environments

See http://kafka.apache.org/07/quickstart.html

### Start zookeeper

```
$ (cd /usr/local/kafka && bin/zookeeper-server-start.sh config/zookeeper.properties)
```

### Set host.name to localhost in config/server.properties

```
(cd /usr/local/kafka && sed -i '' -e 's/#host.name=localhost/host.name=localhost/g' config/server.properties)
```

### Start kafka

```
$ (cd /usr/local/kafka && bin/kafka-server-start.sh config/server.properties)
```

### Setup

```
$ (cd ../salestax-plugin && npm install)
$ npm install
```

### Create a request topic

```
$ (cd /usr/local/kafka && bin/kafka-topics.sh --create --zookeeper localhost:2181 --replication-factor 1 --partitions 3 --topic request)
```

### Create a reponse topic

```
$ (cd /usr/local/kafka && bin/kafka-topics.sh --create --zookeeper localhost:2181 --replication-factor 1 --partitions 3 --topic response)
```

### Initialize broker and topics configuration

```
$ node config
```

### Start service

```
$ node service
```

### Run client example

```
$ node client
```
