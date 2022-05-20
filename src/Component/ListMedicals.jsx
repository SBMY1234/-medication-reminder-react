import Dialog from "./Dialog";
import "./ListMedicals.css";
import { Medical } from "./Medical";
import savedMedicals from "../Service/savedMedicals";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

export const ListMedicals = () => {
  const history = useHistory();
  const [userMedicals, setUserMedicals] = useState([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [currentMedic, setCurrentMedic] = useState("");
  useEffect(() => {
    console.log("use effect");
    setUserMedicals(savedMedicals);
  }, []);
  function dltFunc(medicId) {
    console.log("**************");
    setUserMedicals(userMedicals.filter((medic) => medic.id !== medicId));
  }
  function clsDialog() {
    console.log("8888888888888888888888888");
    setIsDialogOpen(false);
  }
  function openDialog() {
    setIsDialogOpen(true);
  }
  function editFunc(medicId) {
    setCurrentMedic(
      userMedicals.find((medic) => medic.id === medicId).medicName
    );
    openDialog();
  }
  function saveChangesFunc(med) {
    console.log("meddddddddddddddd", med.name);
    setUserMedicals([
      ...userMedicals,
      {
        medicName: med.name,
        frequencyDays: med.frequencyDays,
        lastUpdate: Date.now(),
      },
    ]);
    clsDialog();
  }

  return (
    <>
      {/* <div id="part2">
        <div id="btn">
          <button type="button" className="btn">
            1
          </button>
          <p className="pratim" id="details">
            {"פרטים אישיים "}
          </p>
        </div>
        <div className="line">-------</div>
        <div id="btn2">
          <button type="button" className="btn2">
            2
          </button>
          <p className="pratim" id="list">
            {"רשימת תרופות "}
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
            {" אישור ושליחה"}
          </p>
        </div>
      </div> */}
      <div className="medicList" id="part3">
        <h1>רשימת התרופות של שמואל שמואלי:</h1>
        {/* <canvas id="myCanvas" className="rec"></canvas> */}
        {/* <button type="button" className="btn4">
        // הוסף תרופה
      </button> */}
        <Dialog
          isDialogOpen={isDialogOpen}
          saveChanges={(med) => saveChangesFunc(med)}
          clsDialog={clsDialog}
          currentName={currentMedic}
          options={userMedicals.map((medic) => medic.medicName)}
        />
        <div className="medicalsContainer">
          {userMedicals?.map((medic) => (
            <Medical
              key={medic.id}
              medic={medic}
              editMedic={editFunc}
              dltMedic={dltFunc}
            />
          ))}
        </div>
        <button className="continueBtn" onClick={() => history.push("/Accept")}>
          אישור
        </button>
      </div>
    </>
  );
};
export default ListMedicals;
