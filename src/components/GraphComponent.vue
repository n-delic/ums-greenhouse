<template>
  <div>
      <apex-chart width="380" type="line" :options="options" :series="series"></apex-chart>
  </div>
</template>

<script lang="ts">
import {Vue,Component,Prop} from 'vue-property-decorator';

@Component
export default class GraphComponent extends Vue {
    @Prop(String) type!: string;
    series: any = [{
        name: `Temperature`,
        data: []
    }];
    options: any = {
        chart: {
            id: `${this.type}-chart`
        },
        xaxis: {
            categories: []
        }
    };

    async mounted() {
        let request = await fetch(`http://localhost:3000/${this.type}/7`);
        let data = await request.json();
        data.forEach((thing: any) => {
            this.series[0].data.push(thing.temperature); 
            this.options.xaxis.categories.push(thing.date);
        });
    }
}
</script>

<style>

</style>