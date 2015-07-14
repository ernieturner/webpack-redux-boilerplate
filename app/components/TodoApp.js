var React = require('react');
var Redux = require('redux');
var ReduxReact = require('react-redux');
var TodoEntry = require('./TodoEntry');
var TodoList = require('./TodoList');
var TodoActions = require('../actions/TodoActions');

class TodoApp {
    todoConnector(state){
        return {
            todos: state.todos
        };
    }

    render() {
        return (
            <ReduxReact.Connector select={this.todoConnector}>
                {this.renderChild}
            </ReduxReact.Connector>
        );
    }

    renderChild({ todos, dispatch }) {
        const actions = Redux.bindActionCreators(TodoActions, dispatch);

        return (
            <div>
                <TodoEntry addTodo={actions.addTodo}/>
                <TodoList todos={todos} removeTodo={actions.removeTodo}/>
            </div>
        );
    }
}

module.exports = TodoApp;