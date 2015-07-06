module.exports = {
    createReducer(initialState, handlers) {
        return (state, action) => {
            if(!state){
                state = initialState;
            }
            var constantParts = action.type.split("_"),
                handlerName = "handle" + (constantParts.map((part) => {
                    return part.charAt(0).toUpperCase() + part.toLowerCase().slice(1);
                }).join(""));

            if(handlers[handlerName]){
                return handlers[handlerName](state, action);
            }
            return state;
        };
    }
};