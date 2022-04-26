const fs = require('fs')
const { Kafka } = require('kafkajs')

const kafka = new Kafka({
    clientId: process.env.KAFKA_CLIENT_ID,
    brokers: [process.env.KAFKA_BOOTSTRAP_SERVERS],
})

const producer = kafka.producer()

const run = async () => {
    // Producing
    await producer.connect()
    await producer.send({
      topic: process.env.KAFKA_TOPIC,
      messages: [
        { value: 'Hello KafkaJS user!' },
      ],
    })
  }

run().catch(console.error)
console.log("done")