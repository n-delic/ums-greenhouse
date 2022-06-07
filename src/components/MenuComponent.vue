<template>
<div class="card shadow-xl">
    <ul class="menu card-body bg-base-100 w-56 p-2 rounded-box">
  <li class="menu-title">
    <span>Sensors</span>
  </li>
  <li v-for="sensor of sensors" :key="sensor.name">
    <router-link :to="'/read/'+sensor.mqttName">{{sensor.name}}</router-link>
  </li>
</ul>
</div>
</template>

<script lang="ts">
    import {Component,Vue}from 'vue-property-decorator';
    import { sensorInfo } from '@/utils/Sensors';
    @Component({})
    export default class MenuComponent extends Vue {
        sensors = sensorInfo;
    }
</script>

<style lang="scss" scoped>

</style>