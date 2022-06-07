<template>
    <la-cartesian :data="values">
        <la-line prop="value"></la-line>
    </la-cartesian>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Cartesian, Line } from 'laue/ts';

@Component({components:{Cartesian,Line}})
export default class GraphChart extends Vue {
    values = [
      { value: 10 },
      { value: 20 },
      { value: 30 },
      { value: 20 }
    ];


}
</script>

<style scoped>

</style>