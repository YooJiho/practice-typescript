import { Module, VuexModule, Mutation } from "vuex-module-decorators";
import { Item } from '@/store/todo.interface';

@Module({namespaced: true, name: 'todo', stateFactory: true})
export default class TodoItem extends VuexModule {
    todoList: Item[] = [
        { id : 0, title : 'test', status : 'active'},
        { id : 1, title : 'test1', status : 'active'},
        { id : 2, title : 'test2', status : 'clear'},
    ];

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