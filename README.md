# KafkaJS Demo


## Quickstart
This Docker compose file will start a Zookeeper, Kafka Broker, a KafkaJS producer and a consumer
```shell
docker-compose up -d
```


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