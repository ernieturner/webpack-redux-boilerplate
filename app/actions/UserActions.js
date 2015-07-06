const GET_USER = 'GET_USER';

module.exports = {
    getUser(id){
        return {
            type: GET_USER,
            user: {
                id: id,
                name: 'Bob Jones',
                email: 'bjones@example.com',
                userCategory: 'FINANCE',
                lastAccessTime: 1122438292
            }
        };
    }
};