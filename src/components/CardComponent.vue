<template>
  <div class="card bg-base-100 shadow-xl">
    <div v-if="!control && !graph" class="card-body justify-center items-center">
      <div class="pt-5 w-full border-t-4 border-red-300"></div>
      <div class="w-fit h-24">
        <VueSvgGauge :start-angle="-90" :end-angle="90" :value="value" :min="info.minVal" :max="info.maxVal" :innerRadius="70" :separatorStep="0"
          gauge-color="#000" :scale-interval="0.1" class="relative">
           <p class="absolute bottom-0 text-md" :class="info.mqttName=='TEMP' ? 'left-16' : 'left-20'">{{value + info.unit}}</p>
          </VueSvgGauge>
      </div>
      <h1 class="card-title">{{ info.name }}</h1>
    </div>

    <div v-if="control && !graph" class="card-body justify-center items-center">
      <div class="pt-5 w-full border-t-4 border-red-300"></div>
      <h1>{{value == 1 ? 'RUNNING' : 'NOT RUNNING'}}</h1>
      <input type="checkbox" class="toggle" />
      <h1 class="card-title">{{ info.name.toString() }}</h1>
    </div>


     <div v-if="graph" class="card-body justify-center items-center">
      <h1>I ko smo mi?</h1>
      <GraphChart></GraphChart>
    </div>
  </div>

 
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Sensor from '@/types/Sensor';
import GraphChart from './GraphChart.vue';

@Component({components:{GraphChart}})
export default class CardComponent extends Vue {
  @Prop() readonly info!: Sensor;
  @Prop(Number) readonly value!: number;
  @Prop(Boolean) readonly control!: boolean;
   @Prop(Boolean) readonly graph!: boolean;
}
</script>

<style lang="scss" scoped>
</style>