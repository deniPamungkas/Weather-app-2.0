const textInputConfig = [{
    id:1,
    name:"Username",
    type:"text",
    placeholder:"Username",
    errorMessege:"Username should be 3-16 characters and shouldn't have any special character!",
    pattern:"^[A-Za-z0-9]{3,16}$",
    required:true
},{
    id:2,
    name:"Email",
    type:"email",
    placeholder:"Email",
    errorMessege:"",
    required:true
},{
    id:3,
    name:"Birthday",
    type:"date",
    placeholder:"Birthday",
    errorMessege:"",
    required:true

},{
    id:4,
    name:"Password",
    type:"password",
    placeholder:"Password",
    errorMessege:"Password should have min.8 characters and should include uppercase, lowercase, and special character!",
    pattern:"^(?=[A-Za-z0-9@#$%^&+!=]+$)^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+!=])(?=.{8,}).*$",
    required:true
},{
    id:5,
    name:"ConfirmPassword",
    type:"password",
    placeholder:"Confirm Password",
    errorMessege:"Password is not syncronous",
    required:true
},]

export default textInputConfig