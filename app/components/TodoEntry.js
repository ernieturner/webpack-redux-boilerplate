import React from 'react';

class TodoEntry extends React.Component {
    constructor(props, context){
        super(props, context);
        this.state = {
            todoText: ""
        };
    }

    onTextChange(evt){
        this.setState({
            todoText: event.target.value
        });
    }

    addTodo(){
        if(this.state.todoText === ""){
            return;
        }
        this.props.addTodo(this.state.todoText);
        this.setState({
            todoText: ""
        });
    }

    render() {
        return (
            <div className="todo-entry">
                <input type="text" onChange={this.onTextChange.bind(this)} value={this.state.todoText}/>
                <button onClick={this.addTodo.bind(this)}><i className="fa fa-plus-circle"/>Add Todos</button>
            </div>
        );
    }
}

TodoEntry.propTypes = {
    addTodo: React.PropTypes.func.isRequired
};

module.exports = TodoEntry;