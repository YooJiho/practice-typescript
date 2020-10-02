<template>
    <div class="form-group">
        <input type="text" 
                    class="form-control"  
                    placeholder="할일을 입력해주세오."
                    @keyup.enter="addItem"
                    >
    </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'

@Component
export default class ItemInput extends Vue {
    
    addItem() {
        
    }
}
</script>

<style>

</style>