"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addUser = exports.getOneUser = exports.getAllUsers = void 0;
let usersData = [
    { Id: 1, Name: "Galal", PhoneNo: "011102222222", Age: 19 },
    { Id: 2, Name: "Boules", PhoneNo: "0123123012", Age: 20 },
    { Id: 3, Name: "thomas", PhoneNo: "011102ds32422222", Age: 20 }
];
const getAllUsers = () => {
    return usersData;
};
exports.getAllUsers = getAllUsers;
const getOneUser = (id) => {
    let index = usersData.findIndex(x => x.Id == id);
    if (index != undefined)
        return usersData[index];
    else
        return undefined;
};
exports.getOneUser = getOneUser;
const addUser = (user) => {
    usersData.push(user);
};
exports.addUser = addUser;
