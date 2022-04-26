# KafkaJS Demo


## Quickstart
This Docker compose file will start a Zookeeper, Kafka Broker, a KafkaJS producer and a consumer

1. Bring up Kafka and Zookeper
```
docker-compose up -d kafka zookeeper
```

2. Create a Kafka topic named "testTopic"
```
docker exec -it kafka_container_name bash

cd /opt/bitnami/kafka/bin/

./kafka-topics.sh --create --topic testTopic --bootstrap-server localhost:9092

# validation
./kafka-topics.sh --describe --topic testTopic--bootstrap-server localhost:9092
```

3. bring up the rest of the services 

```shell
docker-compose up -d
```

4. Verify the logs of KafkaJS producer and consumer

---


## Build Docker Image
Go to consumer folder and do the below. Repeat similar steps for producer
```
cd consumer
docker build . -t username/kafkajs-consumer
```

Note: For ARM64 M1, use the `docker build` command below instead
```
# ARM64
docker buildx build --platform linux/amd64 . -t username/kafkajs-consumer
```

---


# References
https://kafka.js.org/docs/getting-started