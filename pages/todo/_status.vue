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
import { Component, Vue, Watch } from 'vue-property-decorator';
import Item from '@/components/item.vue';
import {mapGetters} from 'vuex';
import {todoStore} from '@/store';

@Component({
    components: {
        Item,
    }
})
export default class TodoList extends Vue {
    renderList: any[] = [];

    create() {
        this.renderList = todoStore.allTodoList;
    }

    @Watch('$route.params.status', {immediate: true})
    routeUpdate(newValue: string) {
        if (!newValue) {
            this.renderList = todoStore.allTodoList;
        } else if (newValue === "active") {
            this.renderList = todoStore.activeTodoList;
        } else if (newValue === "clear") {
            this.renderList = todoStore.clearTodoList;
        }
    }
}
</script>