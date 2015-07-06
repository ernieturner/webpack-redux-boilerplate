var Util = require('../utils/Util');
var _ = require('lodash');

const initialState = {};

module.exports = Util.createReducer(initialState, {
    handleGetUser(state, action){
        var userID = action.user.id;
        if(state[userID]){
            return state;
        }
        var updatedState = _.extend({}, state);
        updatedState[userID] = action.user;
        return updatedState;
    }
});