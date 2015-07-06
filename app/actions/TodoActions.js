const ADD_TODO = 'ADD_TODO';
const REMOVE_TODO = 'REMOVE_TODO';

module.exports = {
    addTodo(text){
        return {
            type: ADD_TODO,
            text
        };
    },

    removeTodo(text){
        return {
            type: REMOVE_TODO,
            text
        };
    }
};