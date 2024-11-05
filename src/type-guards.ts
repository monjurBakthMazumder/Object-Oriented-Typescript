{
    // type guard

    // typeof --> type guard
    type ALphanumeric = number| string

    const add = (param1: ALphanumeric, param2: ALphanumeric) : ALphanumeric =>{
        if(typeof param1 === 'number' && typeof param2 === 'number') {
            return param1 + param2
        }
        else{
            return param1.toLocaleString() + param2.toLocaleString()
        }
    }

    console.log(add(32,54));
    console.log(add(32,"54"));

    type NormalUser = {
        name : string
    }

    type AdminUser = {
        name: string
        roll: "admin"
    }

    const getUser = (user: AdminUser | NormalUser)=>{
        if('roll' in user) {
            console.log(`My name is ${user.name} and my Roll is ${user.roll}`);
        }
        else{
            console.log(`My name is ${user.name}`);
        }
    }
    const normalUser : NormalUser = {
        name: "monjur"
    }
    const adminUser : AdminUser = {
        name: "monjur",
        roll: "admin"
    }

    getUser(normalUser)
    getUser(adminUser)






    //
}