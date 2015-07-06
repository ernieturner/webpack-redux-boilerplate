var React = require('react');
var _ = require('lodash');

class AddUser extends React.Component {
    getUser(){
        this.props.actions.getUser(Math.floor(Math.random() * 15 + 1));
    }

    getUserDetails(user){
        var results = [];

        _.each(this.props.users, (user) => {
            results.push(
                <li key={user.id}>
                    <span>{user.id + ":"}</span>
                    <span>{user.name + " (" + user.userCategory + ") "}</span>
                    <span>{user.email}</span>
                </li>
            );
        });

        return results;
    }

    render() {
        return (
            <div>
                <div className="todo-entry">
                    <button onClick={this.getUser.bind(this)}><i className="fa fa-plus-circle"/>Get User</button>
                </div>
                <ul>
                    {this.getUserDetails()}
                </ul>
            </div>
        );
    }
}

AddUser.propTypes = {
    actions: React.PropTypes.object.isRequired,
    users: React.PropTypes.object.isRequired
};

module.exports = AddUser;
