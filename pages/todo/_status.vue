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
import {todoStore} from '@/store';

@Component({
    components: {
        Item,
    }
})
export default class TodoList extends Vue {
    renderList: any[] = [];

    created() {
        this.initRenderList(this.$route.params.status);
    }

    initRenderList(status: string) {
        if (!status) {
            this.renderList = todoStore.allTodoList;
        } else if (status === "active") {
            this.renderList = todoStore.activeTodoList;
        } else if (status === "clear") {
            this.renderList = todoStore.clearTodoList;
        }
    }

    @Watch('$route.params.status', {immediate: true})
    routeUpdate(newValue: string) {
        this.initRenderList(newValue);
    }
    
    @Watch('$store.state.todo.todoList', {immediate: true, deep: true})
    routeUpdate2() {
        this.initRenderList(this.$route.params.status);
    }
}
</script>