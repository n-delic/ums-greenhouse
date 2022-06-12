<template>  
    <apex-chart class="graph" type="area" :options="options" :series="series"></apex-chart>
</template>

<script lang="ts">
import Sensor from '@/types/Sensor';
import {Vue,Component,Prop} from 'vue-property-decorator';

@Component
export default class GraphComponent extends Vue {
    @Prop(Sensor) sensorInfo!: Sensor;
    series: any; 
    options: any;
    
    created() {
    this.series =  [{
        name: this.sensorInfo.name,
        data: []
    }];
    this.options = {
        chart: {
            id: `${this.sensorInfo.mqttName}-chart`
        },
        xaxis: {
            categories: []
        }
    };
    }

    async mounted() {
        let request = await fetch(`https://gh.nakii.tech/${this.sensorInfo.mqttName}/7`);
        let data = await request.json();
        data.forEach((thing: any) => {
            this.series[0].data.push(thing.value); 
            this.options.xaxis.categories.push(thing.date);
        });
    }
}
</script>

<style scoped>
.graph {
    width: 900px;
}

@media only screen and (max-width: 600px)  {
    .graph {
        width: 100vw;
    }
}
</style>