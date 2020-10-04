import { Module, VuexModule, Mutation, Action } from "vuex-module-decorators";
import { Item } from '@/store/todo.interface';
import { $axios } from '@/utils/api';
import { AxiosResponse } from 'axios';

@Module({namespaced: true, name: 'todo', stateFactory: true})
export default class TodoItem extends VuexModule {
    todoList: Item[] = [];

    // Todo Add
    @Mutation
    addItem(item: Item) {
        this.todoList.push(item);
    }

    // Todo change state
    @Mutation
    changeStatus({id, status}: {id: number, status: 'active' | 'clear'}) {
        this.todoList[id].status = status;
    }

    // Todo remove
    @Mutation
    removeItem(id: number) {
        this.todoList.splice(id, 1);
    }

    @Mutation
    setTodoList(todoList: Item[]) {
        this.todoList = todoList;
    }

    @Action({ rawError: true })
    async initData() {
        const response: AxiosResponse<{todoList: Item[]}> = await $axios.get('/data.json');
        this.setTodoList(response.data.todoList)
        //this.context.commit('setTodoList', response.data.todoList);
    }

    get allTodoList() {
        return this.todoList;
    }

    get activeTodoList() {
        return this.todoList.filter((item: Item) => item.status === 'active');
    }

    get clearTodoList() {
        return this.todoList.filter((item: Item) => item.status === 'clear');
    }
}