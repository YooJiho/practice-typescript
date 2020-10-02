<template>
    <div class="input-group mb-3">
        <div class="input-group-prepend">
            <div class="input-group-text">
            <input type="checkbox" 
                        aria-label="Checkbox for following text input" 
                        @change="changeStatus"
                        :checked="status === 'clear'"
                        >
            </div>
        </div>
        <input type="text" 
                    class="form-control" 
                    aria-label="Text input with checkbox" 
                    :value="title"
                    >
        <div class="input-group-append">
            <button class="btn btn-outline-secondary" type="button"  @click="removeItem">삭제</button>
        </div>
    </div>
</template>

<script lang="ts">
import {Component, Vue, Prop} from 'vue-property-decorator'

@Component
export default class Item extends Vue {
    @Prop() readonly id!: string;
    @Prop() readonly title!: string;
    @Prop() readonly status!: 'active' | 'clear';

    changeStatus() {

    }

    removeItem()  {

    }
}
</script>

<style>

</style>