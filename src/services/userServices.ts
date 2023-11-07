import { userType } from '../Types/userTypes'


let usersData: userType[] = [
    { Id: 1, Name: "U1", PhoneNo: "011102222222", Age: 19 },
    { Id: 2, Name: "U2", PhoneNo: "0123123012", Age: 20 },
    { Id: 3, Name: "U3", PhoneNo: "011102ds32422222", Age: 20 }
];


const getAllUsers = () => {
    return new Promise((resolve) => {
        resolve(usersData)
    });
}
const getOneUser = (id: number) => {
    let index = usersData.findIndex(x => x.Id == id);
    if (index != undefined)
        return usersData[index]
    else
        return undefined
}

const addUser = (user: userType) => {
    usersData.push(user)
}


export { getAllUsers, getOneUser, addUser }