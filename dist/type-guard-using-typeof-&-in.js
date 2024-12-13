"use strict";
{
    //Type guard using typeof & in
    // type of --> type guard
    const add = (param1, param2) => {
        if (typeof param1 === "number" && typeof param2 === "number") {
            return param1 + param2;
        }
        else {
            return param1.toString() + param2.toString();
        }
    };
    const result1 = add(2, 4);
    const result2 = add("2", "4");
    const getUser = (user) => {
        if ("role" in user) {
            console.log(`Mt name is ${user.name} and role is ${user.role}`);
        }
        else {
            console.log(`My name is ${user.name}`);
        }
    };
    const normalUser = {
        name: "Monjur",
    };
    const adminUser = {
        name: "Monjur",
        role: "admin",
    };
    getUser(normalUser);
    getUser(adminUser);
    //
}
