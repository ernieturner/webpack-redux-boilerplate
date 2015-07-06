var Util = require('../utils/Util');

const initialState = [];

module.exports = Util.createReducer(initialState, {
    handleAddTodo(state, action){
        return [action.text, ...state];
    },

    handleRemoveTodo(state, action){
        return state.filter(todo =>
            todo !== action.text
        );
    }
});