var React = require('react');
var Redux = require('redux');
var ReduxReact = require('redux/react');
var UserActions = require('../actions/UserActions');
var AddUser = require('./AddUser');

class UserApp {
    userConnector(state){
        return {
            users: state.users
        };
    }

    render() {
        return (
            <ReduxReact.Connector select={this.userConnector}>
                {this.renderChild}
            </ReduxReact.Connector>
        );
    }

    renderChild({ users, dispatch }) {
        const actions = Redux.bindActionCreators(UserActions, dispatch);
        return (
            <div>
                <AddUser actions={actions} users={users}/>
            </div>
        );
    }
}

module.exports = UserApp;