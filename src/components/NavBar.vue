<template>
    <div class="navbar top-0 z-10 sticky text-primary-content">
        <div class="flex-none ml-3">
            <button class="btn btn-circle bg-primary" @click="onClicked">
                <svg v-if="!showXIcon" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
                    viewBox="0 0 24 24" stroke="currentColor" style="fill: #fff;">
                    <path
                        d="M 2 5 L 2 7 L 22 7 L 22 5 L 2 5 z M 2 11 L 2 13 L 22 13 L 22 11 L 2 11 z M 2 17 L 2 19 L 22 19 L 22 17 L 2 17 z">
                    </path>
                </svg>
                <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </div>
        <div class="flex-auto ml-2">
            <router-link to="/">
                <button class="btn btn-ghost modal-button normal-case rounded-full bg-base-100 drop-shadow text-xl">
                    <p class="text-secondary">greenhouse.</p>
                </button>
            </router-link>
        </div>
        <div class="flex-auto justify-end mr-3">
            <label for="about-modal" class="btn btn-ghost bg-secondary rounded-full drop-shadow">
                <p class="text-primary-content">about.</p>
            </label>
        </div>
        <AboutModal></AboutModal>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import AboutModal from './AboutModal.vue';

@Component({ components: { AboutModal } })
export default class NavBar extends Vue {
    showXIcon = false;

    onClicked(e: any) {
        this.showXIcon = !this.showXIcon;
        this.$emit('clicked');
    }

}
</script>

<style scoped>
</style>