var user={
    firstName:"praven",
    lastName:"jats",
    role:"admin",
    password:12345,
    islogin:true
};

console.log(user.firstName);
console.log(user["lastName"]);

user.password=87654;
console.log(user.password);

console.table(user);