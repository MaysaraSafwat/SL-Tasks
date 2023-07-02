type User={
  email:string,
  password:string,
}


export const userLogin =(data:User):boolean=>{
    const hardcodedEmail = "user@admin.com";
    const hardcodedPassword = "password123";
  
    if (data.email === hardcodedEmail && data.password === hardcodedPassword) {
      console.log("Login successful");
      return true
    } else {
      console.log("Invalid credentials");
      return false;
    }
}
