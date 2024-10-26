//create an app with following roles
// admin - gets fulll access
//sub admin-gets access to create/delete course
//testperp -gets access to create/delete course
//user -gets access to consume content

var user= "testperp";

switch(user){
    case "admin":
        console.log("you get full access")
        break;
    
    
    case "testperp":
        console.log("teast perp is enterd");
        break;

        case "subadmin":
        console.log("gets access to create course")
        break;

    default:
        console.log("ntg ")
        break;
}