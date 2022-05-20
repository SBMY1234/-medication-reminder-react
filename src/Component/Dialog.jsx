import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Autocomplete from "@mui/material/Autocomplete";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import allMedical from "../Service/ListMedical";
import "./AddMedical.css";

export const FormDialog = ({
  isDialogOpen,
  saveChanges,
  clsDialog,
  currentName,
  options
}) => {
  const [open, setOpen] = React.useState(isDialogOpen);
  const [selection, setSelection] = React.useState(currentName);
  React.useEffect(() => {
    setOpen(isDialogOpen);
    console.log("isDialogOpen", isDialogOpen);
  }, [isDialogOpen]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClickClose = () => {
    setOpen(false);
    clsDialog();
  };
  const handleSaveChanges = () => {
    setOpen(false);
    saveChanges({ name: selection, frequencyDays: [] });
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        הוסף תרופה
      </Button>
      <Dialog fullWidth open={open} onClose={clsDialog}>
        <DialogTitle>שם התרופה</DialogTitle>
        <DialogContent>
          <form onSubmit={(e) => addNewUMadicines(e)}>
            <Autocomplete
              // className='myautocomplate'
              disablePortal
              id="medicalName"
              options={options}
              defaultValue={selection}
            //   value={selection}
              onChange={(e, mySelection) => {
                console.log("selection", mySelection);
                setSelection(mySelection);
              }}
              sx={{ width: 300 }}
              renderInput={(params) => <TextField {...params} label="" />}
            />
            <h4>אנא סמן את זמן המדויק שעליך ליטול את התרופה</h4>
            <FormGroup>
              <div className="timeWrapperDiv">
                <FormControlLabel
                  className="labelTime"
                  control={<Checkbox />}
                  label="בוקר"
                />
                <TextField
                  id="timeMorning"
                  label=""
                  type="time"
                  disabled
                  //defaultValue="07:30"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  inputProps={{
                    step: 300, // 5 min
                  }}
                  xs={{ width: 150 }}
                />
              </div>
              <div className="timeWrapperDiv">
                <FormControlLabel
                  className="labelTime"
                  control={<Checkbox />}
                  label="צהריים"
                />
                <TextField
                  id="timeNoon"
                  label=""
                  type="time"
                  disabled
                  //defaultValue="07:30"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  inputProps={{
                    step: 300, // 5 min
                  }}
                  sx={{ width: 150 }}
                />
              </div>
              <div className="timeWrapperDiv">
                <FormControlLabel
                  className="labelTime"
                  control={<Checkbox />}
                  label="ערב"
                />
                <TextField
                  id="timeEvening"
                  label=""
                  type="time"
                  disabled
                  //defaultValue="07:30"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  inputProps={{
                    step: 300, // 5 min
                  }}
                  sx={{ width: 150 }}
                />
              </div>
            </FormGroup>

            <h4>בחר יום</h4>
            <div className="selectDayInline">
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox value={"ראשון"} />}
                  label="ראשון"
                />
                <FormControlLabel control={<Checkbox />} label="שני" />
                <FormControlLabel control={<Checkbox />} label="שלישי" />
                <FormControlLabel control={<Checkbox />} label="רביעי" />
                <FormControlLabel control={<Checkbox />} label="חמישי" />
                <FormControlLabel control={<Checkbox />} label="שישי" />
                <FormControlLabel control={<Checkbox />} label="שבת" />
              </FormGroup>
            </div>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSaveChanges}>אישור</Button>

          <Button onClick={handleClickClose}>ביטול</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
export default FormDialog;
