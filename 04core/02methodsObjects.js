var user={
    firstName:"praven",
    lastName:"jats",
    role:"admin",
    password:12345,
    islogin:true,
    courseList:[],
  buycoure:function(coursename){
    this.courseList.push(coursename);
  },
  getcount:function(){
       return ` ${this.firstName} is enorlled in ${this.courseList.length} corses`;
  },
  infomation:function(){
         return `
         first name :${this.firstName}
         ${this.lastName}
         ${this.password}
         `
  }
};


user.buycoure("web development ");
user.buycoure("cyber security ");
console.log(user.courseList);
console.log(user.getcount());
console.log(user.infomation());

