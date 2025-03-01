import axios from "axios";

export function handelSubmit(username:FormDataEntryValue,password:FormDataEntryValue){
 axios.post("https://biometric.http.vsensetech.in/admin/login",{
        username,
        password
     })
     .then((data)=>{
        console.log(data) 
        return true
        
     })
     .catch(()=>{
        console.log("There was in error")
        return false
     })
   
}