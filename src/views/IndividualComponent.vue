<template>
    <div class="grid justify-items-center gap-2 m-5 font-sans text-2xl font-bold grid-cols-4 ">
        <h1 class="col-span-4 m-1">{{ currSensorInfo.name }}</h1>
        <CardComponent :info="currSensorInfo" :value="value" class="md:col-span-2 col-span-4"></CardComponent>
        <CardComponent :info="currSensorInfo" graph class="md:col-span-2 col-span-4"></CardComponent>
    </div>
</template>

<script lang="ts">
import Sensor from '@/types/Sensor';
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import CardComponent from '../components/CardComponent.vue';
import { sensorInfo } from '@/utils/Sensors';
import { MqttClient } from 'mqtt/dist/mqtt.min';
import { parseMessage } from '@/utils/MessageUtils';

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