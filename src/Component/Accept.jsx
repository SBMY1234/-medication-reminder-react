import { useState } from "react";
import "./Accept.css";

export const Accept = () => {
  const [flag, setFlag] = useState(true);
  const [ok, setOk] = useState(false);
  function handleSubmit() {

    setFlag(false);

    componentDidMount();
  };

  function componentDidMount() {
    // Simple GET request using fetch
    fetch('https://localhost:44394/api/SendMassage')
        .then(response => response.json());
        
        // .then(data =>console.log( data.total)&& this.setState({ totalReactPackages: data.total }),
        // );
}
  return (
    <>
      <div id="part2">
        <div id="btn">
          <button type="button" className="btn">
            1
          </button>
          <p className="pratim" id="details">
            {" "}
            פרטים אישיים
          </p>
        </div>
        <div className="line">-------</div>
        <div id="btn2">
          <button type="button" className="btn2">
            2
          </button>
          <p className="pratim" id="list">
            {" "}
            רשימת תרופות
          </p>
        </div>
        <div className="line" id="line2">
          -------
        </div>
        <div id="btn3">
          <button type="button" className="btn3">
            3
          </button>
          <p className="pratim" id="okey">
            {" "}
            אישור ושליחה
          </p>
        </div>
      </div>
      {flag && (
        <div id="part3">
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
              הרייני מאשר/ת קבלת התראות למספר הפלאפון:0555555555
            </label>
  <br/>
  <br/>
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
        <div id="part4">
          <h1>הנתונים נשמרו בהצלחה</h1>
    
          <img
            className="image"
            src=""
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
