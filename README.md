# KafkaJS Demo

## Quickstart
* to start a KafkaJS Producer
```shell
cd producer
node producer.js
```
* to start a KafkaJS Consumer
```shell
cd  consumer
node consumer.js
```

## Docker Image
Go to consumer folder and do the below, similar step to be repeated for producer
```
docker build . -t username/kafkajs-consumer

docker tag username/kafkajs-consumer quay.io/username/kafkajs-consumer

docker push quay.io/username/kafkajs-consumer 
```

Note: For ARM64 M1, use the `docker build` command below instead
```
# ARM64
docker buildx build --platform linux/amd64 . -t username/kafkajs-consumer
```

# References
https://kafka.js.org/docs/getting-started