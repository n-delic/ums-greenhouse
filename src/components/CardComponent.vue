<template>
  <div class="card bg-base-100 shadow-xl">
    <div v-if="!control && !graph" class="card-body justify-center items-center">
      <div class="pt-5 w-full border-t-4" :style="{'border-color': color}"></div>
      <div class="w-fit h-24">
        <VueSvgGauge :start-angle="-90" :end-angle="90" :value="value" :min="info.minVal" :max="info.maxVal" :innerRadius="70" :separatorStep="0"
          gauge-color="#000" :scale-interval="0.1" class="relative">
           <p class="absolute bottom-0 text-md" :class="info.mqttName=='TEMP' ? 'left-16' : 'left-20'">{{value + info.unit}}</p>
          </VueSvgGauge>
      </div>
      <h1 class="card-title">{{ info.name }}</h1>
    </div>

    <div v-if="control && !graph" class="card-body justify-center items-center">
      <div class="pt-5 w-full border-t-4" ::style="{'border-color': color}"></div>
      <h1>{{value == 1 ? 'RUNNING' : 'NOT RUNNING'}}</h1>
      <input type="checkbox" class="toggle" :checked="value" @input="updateControl"/>
      <h1 class="card-title">{{ info.name.toString() }}</h1>
    </div>


     <div v-if="graph" class="card-body justify-center items-center">
      <GraphComponent :sensorInfo="info"></GraphComponent>
    </div>
  </div>

 
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import Sensor from '@/types/Sensor';
import { createMessage } from '@/utils/MessageUtils';
import { generateColor } from '@/utils/ColorUtils';
import GraphComponent from '@/components/GraphComponent.vue';

@Component({components:{GraphComponent}})
export default class CardComponent extends Vue {
  @Prop() readonly info!: Sensor;
  @Prop(Number) value!: number;
  @Prop(Boolean) readonly control!: boolean;
  @Prop(Boolean) readonly graph!: boolean;

  color = '';

  updateControl(e: any) {
    this.value = this.value === 0 ? 1 : 0;
    const status = e.target.checked;
    const message = createMessage(this.info,status);
    this.$emit('controlUpdate',message);
  }

  @Watch('value')
  updateColor() {
    this.color = generateColor(this.info,this.value);
    console.log(this.color);
    
  }
}
</script>

<style lang="scss" scoped>
</style>
