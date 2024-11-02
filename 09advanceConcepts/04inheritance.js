class User{
    constructor(name,email){
        this.email=email;
        this.name=name;
    }
    courseList=[];
    getInfo(){
        return(`name is ${this.name} and email is ${this.email}`);   
    }
    enrollCourse(name){
        this.courseList.push(name)
    }
    getCourseList(){
        return this.courseList;
     }
     login(){
        return ("logged in ");
     }
};

module.exports = User;

class sub extends User{

    getAdminInfo(){
        return "is a admin";
    }
};

const ext= new sub();
console.log(ext.getAdminInfo());
console.log(ext.login());