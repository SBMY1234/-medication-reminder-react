import { Link , useHistory} from 'react-router-dom';
import './Details.css';


export const Details = ({stepId}) => {
     const history = useHistory();
  //טעות!! צריך להעביר לרשימת תרופות
    const ListMedicalsPage = () => {
        history.push("/ListMedicals")
        
     }
    // const RegistrationPage = () => {
    //     history.push("/Registration")
        
    // }
   
    return <>

  {/* <div id="part1">
    <div>
      <p> דף הבית</p>{" "}
    </div>
    <div>
      <p> התחברות</p>
    </div>
    <div>
      <p> אודות</p>
    </div>
    <div>
      <p> צור קשר</p>
    </div>
  </div> */}
  {/* <div id="part2">
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
  </div> */}
  <div id="part3">
    <div id="first">
      <br />
      <h1 style={{ textAlign: "center" }} className="elementor">
        אנא מלא פרטים אישיים:{" "}
      </h1>
      <div
        className="elementor-element elementor-element-40dedca elementor-button-align-center elementor-widget elementor-widget-form"
        data-id="40dedca"
        data-element_type="widget"
        data-settings='{"step_next_label":"\u05d4\u05d1\u05d0","step_previous_label":"\u05d4\u05e7\u05d5\u05d3\u05dd","button_width":"100","step_type":"number_text","step_icon_shape":"circle"}'
        data-widget_type="form.default"
      >
        <div
          style={{ textAlign: "center" }}
          className="elementor-widget-container"
        >
          <form className="elementor-form" method="post" name="New Form">
            <input type="hidden" name="post_id" defaultValue={1342} />
            <input type="hidden" name="form_id" defaultValue="40dedca" />
            <input type="hidden" name="referer_title" />
            <input type="hidden" name="queried_id" defaultValue={1342} />
            <div
              style={{ textAlign: "center" }}
              className="elementor-form-fields-wrapper elementor-labels-above"
              dir="rtl"
            >
              <div className="flex-container">
                <h4 className="titles">שם:</h4>
                <h4>שם משפחה:</h4>
              </div>
              <div className="flex-container">
                <div className="elementor-field-type-text elementor-field-group elementor-column elementor-field-group-name elementor-col-100">
                  <input
                    size={1}
                    type="text"
                    name="form_fields[name]"
                    id="form-field-name"
                    dir="rtl"
                    className="elementor-field elementor-size-md  elementor-field-textual"
                    placeholder="שם פרטי"
                    required="required"
                    aria-required="true"
                  />
                </div>
                <br />
                <div className="elementor-field-type-text elementor-field-group elementor-column elementor-field-group-name elementor-col-100">
                  <input
                    size={1}
                    type="text"
                    name="form_fields[name]"
                    dir="rtl"
                    className="elementor-field elementor-size-md  elementor-field-textual"
                    placeholder="שם משפחה"
                    required="required"
                    aria-required="true"
                  />
                </div>
              </div>
              <br />
              <h4 id="tel">טלפון לקבלת התראות:</h4>
              <div className="elementor-field-type-tel elementor-field-group elementor-column elementor-field-group-d1a8aa0 elementor-col-100">
                <input
                  size={1}
                  type="tel"
                  name="form_fields[d1a8aa0]"
                  id="form-field-d1a8aa0"
                  className="elementor-field elementor-size-md  elementor-field-textual"
                  placeholder="טלפון/נייד"
                  pattern="[0-9()#&+*-=.]+"
                  title="מותר להשתמש רק במספרים ותווי טלפון (#, -, *, וכו')."
                  required="required"
                  aria-required="true"
                />
              </div>
              <br />
              <h4 id="tel2">טלפון נוסף :</h4>
              <div className="elementor-field-type-tel elementor-field-group elementor-column elementor-field-group-d1a8aa0 elementor-col-100">
                <input
                  size={1}
                  type="tel"
                  name="form_fields[d1a8aa0]"
                  id="form-field-d1a8aa0"
                  className="elementor-field elementor-size-md  elementor-field-textual"
                  placeholder="טלפון נוסף"
                  pattern="[0-9()#&+*-=.]+"
                  title="מותר להשתמש רק במספרים ותווי טלפון (#, -, *, וכו')."
                />
              </div>
              <br />
              <h4 id="mail">מייל :</h4>
              <div className="elementor-field-type-email elementor-field-group elementor-column elementor-field-group-email elementor-col-100 elementor-field-required">
                <input
                  size={1}
                  type="email"
                  name="form_fields[email]"
                  id="form-field-email"
                  className="elementor-field elementor-size-md  elementor-field-textual"
                  placeholder="Email"
                />
                <br />
                <br />
                <br />
                <div className="elementor-field-group elementor-column elementor-field-type-submit elementor-col-100 e-form__buttons">
                  <br />
                  <br />
                </div>
                <div id="last">
                  <h4>קופת חולים:</h4>
                  <div>
                    <input
                      type="radio"
                      id="leumit"
                      name="drone"
                      defaultValue="leumit"
                    />
                    <label htmlFor="leumit" className="kupa">
                      לאומית{" "}
                    </label>
                  </div>
                  <br />
                  <div>
                    <input
                      type="radio"
                      id="meuchedet"
                      name="drone"
                      defaultValue="meuchedet"
                    />
                    <label htmlFor="meuchedet" className="kupa">
                      מאוחדת
                    </label>
                  </div>
                  <br />
                  <div>
                    <input
                      type="radio"
                      id="macabi"
                      name="drone"
                      defaultValue="macabi"
                    />
                    <label htmlFor="macabi" className="kupa">
                      מכבי
                    </label>
                  </div>
                  <br />
                  <div>
                    <input
                      type="radio"
                      id="klalit"
                      name="drone"
                      defaultValue="klalit"
                    />
                    <label htmlFor="klalit" className="kupa">
                      כללית{" "}
                    </label>
                  </div>
                </div>
                <br />
                <br />
                <br />
                <h3>פרטי איש קשר נוסף:</h3>
                <div
                  style={{ textAlign: "center" }}
                  className="elementor-form-fields-wrapper elementor-labels-above"
                  dir="rtl"
                >
                  <div className="flex-container">
                    <h4 className="titles">שם:</h4>
                    <h4>שם משפחה:</h4>
                  </div>
                  <div className="flex-container">
                    <div className="elementor-field-type-text elementor-field-group elementor-column elementor-field-group-name elementor-col-100">
                      <input
                        size={1}
                        type="text"
                        name="form_fields[name]"
                        id="form-field-name"
                        dir="rtl"
                        className="elementor-field elementor-size-md  elementor-field-textual"
                        placeholder="שם פרטי"
                        required="required"
                        aria-required="true"
                      />
                    </div>
                    <br />
                    <div className="elementor-field-type-text elementor-field-group elementor-column elementor-field-group-name elementor-col-100">
                      <input
                        size={1}
                        type="text"
                        name="form_fields[name]"
                        dir="rtl"
                        className="elementor-field elementor-size-md  elementor-field-textual"
                        placeholder="שם משפחה"
                        required="required"
                        aria-required="true"
                      />
                    </div>
                  </div>
                  <br />
                  <h4 id="tel3">טלפון:</h4>
                  <div className="elementor-field-type-tel elementor-field-group elementor-column elementor-field-group-d1a8aa0 elementor-col-100">
                    <input
                      size={1}
                      type="tel"
                      name="form_fields[d1a8aa0]"
                      id="form-field-d1a8aa0"
                      className="elementor-field elementor-size-md  elementor-field-textual"
                      placeholder="טלפון/נייד"
                      pattern="[0-9()#&+*-=.]+"
                      title="מותר להשתמש רק במספרים ותווי טלפון (#, -, *, וכו')."
                    />
                  </div>
                  <br />
                  <br />
                  <br />
                  <br />
                  <div className="elementor-field-group elementor-column elementor-field-type-submit elementor-col-100 e-form__buttons">
                    <button
                      type="submit"
                      className="elementor-button elementor-size-md"
                    >
                      <span>
                        {/*  <span class=" elementor-button-icon">
                <i class="fa fa-location-arrow" aria-hidden="true"></i> </span>*/}
                        <span className="elementor-button-text" onClick={ListMedicalsPage}>המשך</span>


                      </span>
                    </button>


                    <br />
                    <br />
                    <br />
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  </>
}
export default Details;
