import './HomePage.css';
import pic1 from '../assas/picture.png';
import { Link } from 'react-router-dom';

//דף הבית
export const HomePage=()=>{
    return<>
 <div>
    <img src={pic1} class="bg-img" ></img>

    <div class="container">
         <div class="topnav"> 
          <Link to="/HomePage" class="topnava">דף הבית</Link>
          <Link to="/Login" class="topnava">התחברות</Link>
          <Link to="/Home" class="topnava">אודות</Link>
          <Link to="/Home" class="topnava">צור קשר</Link>

        </div> 
        </div> </div> 
       <div class="text">
            <p>
                <b>תרופון</b>
            </p>
        </div>
        <br></br><br></br>
        <div class="text1">
            <p>
                כי חשוב
            </p>
        </div>
        <br></br><br></br><br></br>
        <div class="text1">
            <p>
                לקחת בזמן
            </p>
        </div>
        <br></br><br></br>
        <br></br><br></br><br></br>
        <div class="text2">
            <p>
                הנתונים שלך, התזכורות שלנו
            </p>
        </div>
        <div>
            <button class="button1">התחברות</button>
        </div>
        <div>
            <button class="button2">הרשמה</button>
        </div>
     
     
    </>
}
export default HomePage;