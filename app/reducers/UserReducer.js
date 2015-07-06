var Util = require('../utils/Util');

const initialState = {};

module.exports = Util.createReducer(initialState, {
    handleGetUser(state, action){
        var userID = action.user.id;
        if(state[userID]){
            return state;
        }
        var updatedState = {...state};
        updatedState[userID] = action.user;
        return updatedState;
    }
});