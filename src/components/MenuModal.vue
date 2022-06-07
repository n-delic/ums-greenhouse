<template>
    <div>
        <input type="checkbox" id="menu-modal" class="modal-toggle">
        <div class="modal">
            <div class="modal-box"> 
                <label for="menu-modal"
                    class="btn btn-sm btn-circle absolute right-2 top-2">x</label>
                <MenuComponent class="bg-transparent"></MenuComponent>
            </div>
        </div>
</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import MenuComponent from './MenuComponent.vue';
@Component({ components: { MenuComponent } })
export default class MenuModal extends Vue {

}
</script>

<style scoped>
</style>