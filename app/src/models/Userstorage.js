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
    
    static getUserInfo(id){
        const users = this._users;
        const idx = users.id.indexOf(id);
        const usersKeys = Object.keys(users);
        const userInfo = usersKeys.reduce((newUser, info) => {
            newUser[info] = users[info][idx];
            return newUser;
        }, {});

        return userInfo;
    }

    static save(userInfo) {
        const users = this._users;
        users.id.push(userInfo.id);
        users.name.push(userInfo.name);
        users.psword.push(userInfo.psword);
        console.log(users);
        return {success: true}
    }
};

module.exports = Userstorage ;