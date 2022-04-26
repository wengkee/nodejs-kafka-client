const fs = require('fs')
const { Kafka } = require('kafkajs')

const kafka = new Kafka({
    clientId: process.env.KAFKA_CLIENT_ID,
    brokers: [process.env.KAFKA_BOOTSTRAP_SERVERS],
})

const consumer = kafka.consumer({ groupId: process.env.KAFKA_GROUP_ID })

const run = async () => {

    // Consuming
    await consumer.connect()
    await consumer.subscribe({ topic: process.env.KAFKA_TOPIC, fromBeginning: true })

    await consumer.run({
      eachMessage: async ({ topic, partition, message }) => {
        console.log({
          partition,
          offset: message.offset,
          value: message.value.toString(),
        })
      },
    })
  }

run().catch(console.error)
console.log("done")