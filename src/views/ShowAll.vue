<template>
    <div class="grid h-fit gap-2 m-5 font-sans text-2xl font-bold grid-cols-6 md:grid-rows-7 ">
        <h1 class="col-span-6 m-1">Reading</h1>
        <CardComponent v-for="sensor of sensors" :key="sensor.name" :value="values[sensor.mqttName]" :info="sensor" class="md:col-span-2 col-span-6"></CardComponent>
        <h1 class="col-span-6 m-1">Control</h1>
        <CardComponent v-for="control of controls" :key="control.name" :info="control" control :value="values[control.mqttName]" @controlUpdate="sendToServer" class="md:col-span-3 col-span-6"></CardComponent>
    </div>
</template>

<script lang="ts">
import { parseMessage } from '@/utils/MessageUtils';
import { MqttClient } from 'mqtt/dist/mqtt.min';
import { Component, Prop, Vue } from 'vue-property-decorator';
import CardComponent from '../components/CardComponent.vue';
import { controlInfo } from '@/utils/Controls';
import { sensorInfo } from '@/utils/Sensors';

@Component({ components: { CardComponent }})
export default class ShowAll extends Vue {
    @Prop(MqttClient) readonly mqttClient!: MqttClient;
    controls = controlInfo;
    sensors = sensorInfo;
    values: Record<string,number> = {
        'TEMP': 0,
        'HUM': 0,
        'GHUM': 0,
        'FAN': 0,
        'VAL': 0
    };

    sendToServer(message: string) {
        this.mqttClient.publish('ums/greenhouse/esp',message);
    }

    mounted() {
        this.mqttClient.on("message", (topic: string, payload: Buffer) => {
            let message = parseMessage(payload.toString());
            if(message.sensor == 'GHUM') {
                message.value = Math.floor(message.value / 700);
            }
            this.values[message.sensor] = message.value;
        });

        this.controls.forEach(control=>{
            this.mqttClient.publish("ums/greenhouse/esp",`${control.mqttName}#S`);
        });
    }

    destroyed() {
        this.mqttClient.removeAllListeners();
    }
}
</script>

<style scoped>
</style>