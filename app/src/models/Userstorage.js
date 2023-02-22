"uss strict";

class Userstorage {
    static _users = {
        id: ["park", "박", "준형"],
        psword: ["123", "1234", "12345"],
        name: ["박준형", "준형", "형"],
    };

    static getUsers(...fields) {
        const users = this._users;
        const newUsers = fields.reduce((newUsers,field) => {
            if (users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;            
        }, {});
        return newUsers; 
    }
    
};

module.exports = Userstorage ;