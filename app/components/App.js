var React = require('react');
var TodoApp = require('./TodoApp');
var UserApp = require('./UserApp');
var Redux = require('redux');
var Provider = require('redux/react').Provider;
var reducers = require('../reducers');

const store = Redux.createStore(reducers);

class App {
    render() {
        return (
            <Provider store={store}>
                {() => {
                    return (
                        <div>
                            <TodoApp />
                            <UserApp />
                        </div>
                    );
                }
                }
            </Provider>
        );
    }
}

module.exports = App;