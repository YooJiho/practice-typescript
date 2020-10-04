import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import TodoItem from '@/store/todo'

let todoStore: TodoItem

function initialiseStores(store: Store<any>): void {
    todoStore = getModule(TodoItem, store)
}

export { initialiseStores, todoStore }