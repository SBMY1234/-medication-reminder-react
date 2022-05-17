import { Link } from 'react-router-dom';
import { useState } from "react";
//  import { AddUser } from "../thanks/ThankUser";

 //הרשמה

// export const  Registration= ({history}) => {
    export const  Registration= () => {

// //אתחול מאפייני האובייקט בסטייט בערכים התחלתיים
      const [errors, setErrors] = useState(
         {
             PasswordError: "",
             EmailError: ""
         })

//          //שומר את ערכי השדות 
         const [myUser, setMyUser] = useState(
  
       
    )
    
     //מייל
    const validateEmail = (event) => {
        event.preventDefault();
         if (!event.target.value) {
                 setErrors({ ...errors, EmailError: "שדה זה חובה" });
                }
         else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(event.target.value)) {
                    setErrors({ ...errors, EmailError: 'כתובנת האמייל לא תקינה' });
                }
        
            }
           
//             // //נותנת אפשרות שיראו את הטקסט
//         const addNewUser=async(e)=> {
//             debugger
//                 e.preventDefault();
//             let newUser ={
//                 mail:e.target.mail.value,
//                 password:e.target.pass.value,
    
//             }
//             let NuserList = await AddUser(newUser)
           
//             console.log(NuserList)
//             //אחרי הרשמה מעביר לדף מוצרים
//             history.push('/ListProduct');
//         }
    

   
     return<>
    <form onSubmit={(e)=>addNewUser(e)}>
    {/* <form onSubmit={(e)}> */}
        <h1>שלום </h1>
        <h2>ברוך הבא</h2>
        <h3>נא להקיש כתובת מייל וסיסמה</h3>
        <div>
        <input type="email" placeholder="כתובת דוא'ל" id="mail" onChange={(e)=>validateEmail(e)}></input>
        <small style={{ color: "red" }}>{errors.EmailError}</small>
        </div>
        <div>
        <input type="password" placeholder="סיסמא" id="pass" ></input>
        </div>
        <br></br>
         <div>
        <input type="submit" value="אישור" style={{height:"30px",width:"70px",color:"green"}}/>
        </div>
    </form>
   
           </>
}