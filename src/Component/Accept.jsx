import { useState, useEffect } from "react";

import "./Accept.css";

export const Accept = () => {
  const [flag, setFlag] = useState(true);
  const [ok, setOk] = useState(false);

  const [userFirstName, setuserFirst] = useState("");
  const [userLastName, setuserLast] = useState("");
  const [userTel, setuserTel] = useState("");
 
 useEffect(() => {  
   console.log("get datailssss");
   const personData = JSON.parse(localStorage.getItem('personData'));
   setuserFirst(personData.newFirstName);
   setuserLast(personData.newLastName);
   setuserTel(personData.newTel);
   console.log(userFirstName, userLastName);
 }) 

  function handleSubmit() {

    setFlag(false);

    componentDidMount();
  };

  function componentDidMount() {
    
    // const cron = "*/15 * * * *"
  //  const url = `https://localhost:44394/api/SendMassage/${userFirstName}/${userLastName}/${userTel}/${cron}`;
    const url = `https://localhost:44394/api/SendMassage/${userFirstName}/${userLastName}/${userTel}`;

    fetch(url)
   
        .then(response => response.json());
        console.log(url);
        // .then(data =>console.log( data.total)&& this.setState({ totalReactPackages: data.total }),
        // );
}
  return (
    <>
      <div id="part2">
        <div id="btn--">
          <button type="button" className="btn--">
            1
          </button>
          <p className="pratim--" id="details--">
            {" "}
            פרטים אישיים
          </p>
        </div>
        <div className="line--">-----</div>
        <div id="btn2--">
          <button type="button" className="btn2--">
            2
          </button>
          <p className="pratim--" id="list--">
            {" "}
            רשימת תרופות
          </p>
        </div>
        <div className="line--" id="line2--">
          -----
        </div>
        <div id="btn3--">
          <button type="button" className="btn3--">
            3
          </button>
          <p className="pratim--" id="okey--">
            {" "}
            אישור ושליחה
          </p>
        </div>
      </div>
      {flag && (
        <div id="part3--">
          <h1>אישור</h1>
    
          <form onSubmit={handleSubmit} className="check">
            <input
              value={ok}
              onChange={() => setOk(true)}
              type="checkbox"
              id="vehicle3"
              name="vehicle3"
              defaultValue="Boat"
            />
            <label htmlFor="vehicle3">
              הרייני מאשר/ת קבלת התראות למספר הפלאפון:{userTel}
            </label>
  <br/>
  <br/><br /><br />
            <button
              disabled={!ok}
              type="submit"
              className="elementor-button elementor-size-md"
            >
              <span>
                <span className=" elementor-button-icon">
                  <i className="fa fa-location-arrow" aria-hidden="true" />{" "}
                </span>
                <span className="elementor-button-text">שליחה</span>
              </span>
            </button>
          </form>
        </div>
      )}

      {!flag && (
        <div id="part3--">
          <h1>הנתונים נשמרו בהצלחה</h1>
    
          <img
            className="image"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCZ1KYiMnuf8T5FWVYjRrKaqw22Z1IXhlUajubVwVg3W8s5Ag2EYv3&usqp=CAU"
          />
       
          <p className="by">מהיום התזכורות עלינו</p>
          <p className="by">רק בריאות!</p>
          <h4>תרופון</h4>
        </div>
      )}
    </>
  );
};
export default Accept;
