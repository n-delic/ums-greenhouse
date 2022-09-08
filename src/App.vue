<template>
  <div id="app" data-theme="lofi">
    <NavBar @clicked="isClicked = !isClicked" :isMobile="isMobile" :connected="client.connected"></NavBar>

    <div class="flex lg:h-screen justify-center items-center">
      <div class="flex-shrink">
        <MenuComponent class="ease-in-out transition-all duration-300"
          :class="isClicked && !isMobile ? 'w-full opacity-100' : 'w-0 opacity-0'"></MenuComponent>
        <MenuModal></MenuModal>
      </div>
      <div class="flex-1 flex-grow ">
        <router-view :key="$route.path" :mqttClient="client" />
      </div>
    </div>


  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { MqttClient } from 'mqtt/dist/mqtt.min';
import { connect as mqttConnect } from 'mqtt/dist/mqtt.min';
import CardComponent from './components/CardComponent.vue';
import MenuComponent from './components/MenuComponent.vue';
import NavBar from './components/NavBar.vue';
import MenuModal from './components/MenuModal.vue';

@Component({
  components: {
    CardComponent,
    MenuComponent,
    NavBar,
    MenuModal
  }
})
export default class App extends Vue {
  client: MqttClient = mqttConnect("wss://test.mosquitto.org:8081/");
  isClicked = false;
  isMobile = false;

  mounted() {
      this.client.subscribe("ums/greenhouse/web");
    window.addEventListener('resize', this.checkMobile);
  }
  beforeDestroy() {
    this.client.unsubscribe("ums/greenhouse/web");
    window.removeEventListener('resize', this.checkMobile);
  }

  checkMobile() {
    if (window.innerWidth < 768) {
      this.isMobile = true;
    } else {
      this.isMobile = false;
    }
  }
}

</script>

<style>
</style>
