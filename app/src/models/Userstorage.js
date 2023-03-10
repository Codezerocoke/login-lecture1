"uss strict";

const fs = require("fs").promises;

class Userstorage {
    static _getUserInfo(data,id) {
        const users = JSON.parse(data);
        const idx = users.id.indexOf(id);
        const usersKeys = Object.keys(users); //[id, psword, name]
        const userInfo = usersKeys.reduce((newUser, info) => {
            newUser[info] = users[info][idx];
            return newUser;
        }, {});
        
        return userInfo;
    }
 
    static getUsers(...fields) {
        // const users = this._users;
        const newUsers = fields.reduce((newUsers,field) => {
            if (users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;            
        }, {});
        return newUsers; 
    }
    
static getUserInfo(id){
    return fs
    .readFile("./src/databases/users.json")
    .then((data) => {
        return this._getUserInfo(data,id);
    })
    .catch(console.error);
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