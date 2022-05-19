
import './ListMedicals.css';
export const ListMedicals = () => {




    return <>
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
  <div id="part3">
    <h1>רשימת התרופות של ישראל ישראלי:</h1>
    <canvas id="myCanvas" className="rec"></canvas>
    <button type="button" className="btn4">
      הוסף תרופה
    </button>
    <div className="box">
      <h1 className="acamol">אקמול</h1>
      <h1 className="date">תאריך עדכון אחרון:</h1>
      <h1 className="date2">15/05/2022</h1>
      <button type="button" className="btn5">
        עריכה
      </button>
    </div>
    <canvas className="rec2"></canvas>
    <div className="box">
      <h1 className="acamol" id="decsamol">
        דקסמול
      </h1>
      <h1 className="date" id="lastDate">
        תאריך עדכון אחרון:
      </h1>
      <h1 className="date2" id="lastDate2">
        15/05/2022
      </h1>
      <button type="button" className="btn5" id="update">
        עריכה
      </button>
    </div>
    <canvas className="rec2" id="reco"></canvas>
  </div>

  </>

}
export default ListMedicals;