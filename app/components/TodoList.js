var React = require('react');

class TodoList extends React.Component{

    constructor(props, context){
        super(props, context);
    }

    removeTodo(todoText){
        this.props.removeTodo(todoText);
    }

    render() {
        return (
            <ul className="todo-list">
                {this.props.todos.map((todoName, index) =>{
                    return <li key={index}>{todoName} <i className="fa fa-times" onClick={this.removeTodo.bind(this, todoName)}/></li>;
                })}
            </ul>
        );
    }
}

TodoList.propTypes = {
    todos: React.PropTypes.array.isRequired,
    removeTodo: React.PropTypes.func.isRequired
};

module.exports = TodoList;