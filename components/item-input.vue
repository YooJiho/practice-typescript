<template>
    <div class="form-group">
        <input type="text" 
                    v-model="title"
                    class="form-control"  
                    placeholder="할일을 입력해주세오."
                    @keyup.enter="addItem"
                    >
    </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'
import { todoStore } from '@/store';

@Component
export default class ItemInput extends Vue {
    title: string = '';
    addItem() {
        todoStore.addItem({
            id: todoStore.todoList.length,
            title: this.title,
            status: 'active'
        })
    }
}
</script>
