class User{
    constructor(name,email){
        this.email=email;
        this.name=name;
    }

    courseList=[];
   
    getInfo(){
        return(`name is ${this.name} and email is ${this.email}`);   
    }
     
    //setter
    
    enrollCourse(name){
        this.courseList.push(name)
    }
   
    //getter
     getCourseList(){
        return this.courseList;
     }
};

module.exports = User;