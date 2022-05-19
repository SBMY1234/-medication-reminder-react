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


        <div id="part3">
            <h1>הנתונים נשמרו בהצלחה</h1>
            <br />
            <img
                className="image"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0RKXXuUEjR-T_o96VZHkQYOvbhDNI5pLmhO7JmdRm6IWcbCdr_RMSqaQxsceBhnSrWb8&usqp=CAU"
            />
            <br />
            <br />
            <p className="by">מהיום התזכורות עלינו</p>
            <p className="by">רק בריאות!</p>
            <h4>תרופון</h4>
        </div>
    </>
}
export default Accept;