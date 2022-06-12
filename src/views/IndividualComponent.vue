<template>
<div class="flex h-screen items-center justify-center">
    <div class="grid justify-center items-center gap-2 m-5 grid-cols-4 ">
        <h1 class="col-span-4 m-1 font-sans text-2xl font-bold">{{ currSensorInfo.name }}</h1>
        <CardComponent :info="currSensorInfo" :value="value" class="col-span-4"></CardComponent>
        <CardComponent :info="currSensorInfo" graph class="col-span-4"></CardComponent>
    </div>
</div>
</template>

<script lang="ts">
import Sensor from '@/types/Sensor';
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import CardComponent from '../components/CardComponent.vue';
import { sensorInfo } from '@/utils/Sensors';
import { MqttClient } from 'mqtt/dist/mqtt.min';
import { parseMessage } from '@/utils/MessageUtils';
import { set } from 'vue/types/umd';

@Component({
    components: {
        CardComponent
    }
})
export default class IndividualComponent extends Vue {
    @Prop(MqttClient) readonly mqttClient!: MqttClient;
    title = "";
    currSensorInfo!: Sensor;
    value = 0;

    created() {
        this.title = this.$route.params.component;
        this.currSensorInfo = sensorInfo.find((val) => val.mqttName == this.title) as Sensor;
    }

    mounted() {
        this.mqttClient.on("message", (topic: string, payload: Buffer) => {
            let message = parseMessage(payload.toString());
            if(message.sensor == 'GHUM') {
                message.value = Math.floor(message.value/700);
            }
            this.value = message.sensor == this.currSensorInfo.mqttName ? message.value : this.value;
        });
    }

    destroyed() {
        this.mqttClient.removeAllListeners();
    }
}
</script>

<style scoped>
</style>