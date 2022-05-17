import { Link } from 'react-router-dom';
import { useState } from "react"
import'./Login.css';
// import { EnterUser } from "../thank/Registration";
 //כניסה
//אם המשתמש אכן קיים במערכת אז הוא יעבור לרשימת המוצרים



    export const  Login= ({history}) => {

// //אתחול מאפייני האובייקט בסטייט בערכים התחלתיים
      const [errors, setErrors] = useState(
         {
             PasswordError: "",
             EmailError: ""
         })

//          //שומר את ערכי השדות 
         const [myUser, setMyUser] = useState()

     //מייל
    const validateEmail = (event) => {
        event.preventDefault();
         if (!event.target.value) {
                 setErrors({ ...errors, EmailError: "שדה זה חובה" });
                }
         else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(event.target.value)) {
                    setErrors({ ...errors, EmailError: 'כתובנת האמייל לא תקינה' });
                }
                else {
                    setErrors({ ...errors, EmailError: "Correct!!" });
                    setMyUser({ ...myUser, EmailUser: event.target.value })
                }

                    
    // //שולחת את הנתנים שקיבל לשרת
    // const loginf= async(e) =>{
    //     e.preventDefault();
    //   //מכניס לתוכו את הנתונים בשביל לשלוח לשרת
    //     let eUser={
    //         mail: e.target.mail.value,
    //         Password: e.target.pass.value
    //     }

    //     console.log(eUser);
    // //שולח את הנתונים לשרת
    //     let checkUser= await EnterUser(eUser);
    //     //  בוlet checkUser= await EnterUser(eUser);דק אם הנתונים שהlet checkUser= await EnterUser(eUser);וא מכניס קיימים בשרת        
    //     //  if(checkUser!=undefined && checkUser.name=="User is not found!!")
    //     if(checkUser!=undefined && checkUser.name=="product not found")
    //     history.push("/Harshama")
    //       else
    //       history.push("/")
    //   }
        
            }
     return<>
    <form onSubmit={(e)=>addNewUser(e)}>
        <h1 class ="help">!שלום</h1>
        <h2 class ="help2">נא להקיש כתובת מייל וסיסמה להתחברות</h2>
        <div>
        <input type="email" placeholder=":כתובת מייל" id="mail" onChange={(e)=>validateEmail(e)}></input>
        <small style={{ color: "red" }}>{errors.EmailError}</small>
        </div>
        <div>
        <input type="password" placeholder="סיסמה:" id="pass"></input>
        </div>
        <br></br>
        <p class ="forgatKod" href="">שכחתי סיסמה</p>
         <div>
        <input type="submit" class="cancelbtn" value="אישור" />
        </div>
    </form>
   
           </>
}