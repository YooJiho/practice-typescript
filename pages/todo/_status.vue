<template>
    <div>
        <Item v-for="item in renderList"  
                :key="item.id" 
                :id="item.id"  
                :title="item.title" 
                :status="item.status" 
                />
    </div>
</template>

<script lang="ts">
import {Component, Vue, Watch} from 'vue-property-decorator';
import Item from '@/components/item.vue'

@Component({
    components: {
        Item,
    }
})
export default class TodoList extends Vue {
    data: any[] = [
        { id : 0, title : 'test', status : 'active'},
        { id : 1, title : 'test1', status : 'active'},
        { id : 2, title : 'test2', status : 'clear'},
    ]

    renderList: any[] = this.data;

    @Watch('$route.params.status')
    routeUpdate(newValue: string) {
        console.log('test'+newValue)
        if (!newValue) {
            this.renderList = this.data;
        } else if (newValue === "active" || newValue === "clear") {
            this.renderList = this.data.slice().filter((item: any) => {
                return item.status === newValue;
            })
        }
    }
}
</script>

<style>
 body {
     width: 1080px;
     margin:100px auto;
 }
</style>