var React = require('react');
var TodoApp = require('./TodoApp');
var UserApp = require('./UserApp');
var Redux = require('redux');
var Provider = require('react-redux').Provider;
var reducers = require('../reducers');

const reducer = Redux.combineReducers(reducers);
const store = Redux.createStore(reducer);

class App {
    render() {
        return (
            <Provider store={store}>
                {() =>
                        <div>
                            <TodoApp />
                            <UserApp />
                        </div>
                }
            </Provider>
        );
    }
}

module.exports = App;