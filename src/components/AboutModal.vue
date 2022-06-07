<template>
    <div>
        <input type="checkbox" id="about-modal" class="modal-toggle" />
        <div class="modal">
            <div class="modal-box">
                <h3 class="font-bold text-primary text-xl">greenhouse.</h3>
                <p class="py-4 text-primary">This project is made by Muharem Muharemovic and Nahid Delic.</p>
                <div class="modal-action">
                    <label for="about-modal" class="btn">Exit</label>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class AboutModal extends Vue {
}

</script>

<style scoped>
</style>