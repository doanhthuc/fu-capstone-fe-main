import {nanoid} from "nanoid";

export interface TodosInterface {
  todos: any;
  addTodo: any;
  clearAllTodo: any;
}

const todosStore = (set, get) => ({
  // Variables
  todos: [],

  addTodo: todosAdd =>
    set(state => {
      todosAdd.split(",").map(x => {
        state.todos.push({
          id: nanoid(),
          todo: x.trim(),
          completed: false,
        });
      });
      return state.todos;
    }),

  clearAllTodo: () => set(state => (state.todos = [])),
});

export {todosStore};
