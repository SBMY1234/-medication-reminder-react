import "./Medical.css";

export const Medical = ({ medic, editMedic, dltMedic }) => {
  return (
    <div className="medicalItem">
      <span className="header">{medic.medicName}</span>
      <div className="date">
        <span className="dateLabel">תאריך עדכון אחרון:</span>
        <span>{medic.lastUpdate}</span>
      </div>
      <div className="actionBtns">
        <button className="actionBtn" onClick={() => editMedic(medic.id)}>
          עריכה
        </button>
        <button className="actionBtn" onClick={() => dltMedic(medic.id)}>
          הסרה
        </button>
      </div>
    </div>
  );
};
