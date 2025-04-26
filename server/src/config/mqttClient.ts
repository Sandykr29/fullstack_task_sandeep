import mqtt from 'mqtt';

export const mqttClient = mqtt.connect(process.env.MQTT_BROKER_URL!);

mqttClient.on('connect', () => {
  console.log('MQTT Connected');
});
