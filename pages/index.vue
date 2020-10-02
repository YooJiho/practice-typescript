<template>
    <div>
        <Item />
    </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import Item from '@/components/item.vue'

@Component({
    components: {
        Item,
    }
})
export default class Home extends Vue {
    
}
</script>

<style>
 body {
     width: 1080px;
     margin:100px auto;
 }
</style>