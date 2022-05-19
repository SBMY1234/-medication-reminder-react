import './Accept.css';

export const Accept = () => {

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
<h1>אישור</h1>
<br />
<br />
<form className="check">
  <input
    type="checkbox"
    id="vehicle3"
    name="vehicle3"
    defaultValue="Boat"
  />
  <label htmlFor="vehicle3">
    הרייני מאשר/ת קבלת התראות למספר הפלאפון:0555555555
  </label>
  <br />
  <br />
  <br />
  <button type="submit" className="elementor-button elementor-size-md">
    <span>
      <span className=" elementor-button-icon">
        <i className="fa fa-location-arrow" aria-hidden="true" />{" "}
      </span>
      <span className="elementor-button-text">שליחה</span>
    </span>
  </button>
</form>

</div>
</>
}
export default Accept;