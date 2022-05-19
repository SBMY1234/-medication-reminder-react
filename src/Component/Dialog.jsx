import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Autocomplete from '@mui/material/Autocomplete';
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import allMedical from '../Service/ListMedical'


export const FormDialog = () => {
console.log("allMedical= ", allMedical);
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen}>
                הוסף תרופה
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>שם התרופה</DialogTitle>
                <DialogContent>
                    <form onSubmit={(e) => addNewUMadicines(e)}>

                        <Autocomplete
                            // className='myautocomplate'
                            disablePortal
                            id="medicalName"
                            options={allMedical}
                            sx={{ width: 300 }}
                            renderInput={(params) => <TextField {...params} label="" />}
                        />
                        <h4>אנא סמן את זמן המדויק שעליך ליטול את התרופה</h4>
                        <FormGroup>
                            <div>
                                <FormControlLabel control={<Checkbox />} label="בוקר" />
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
                            <div>
                                <FormControlLabel control={<Checkbox />} label="צהריים" />
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
                            <div>
                                <FormControlLabel control={<Checkbox />} label="ערב" />
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
                        <div className='selectDayInline'>
                            <FormGroup>
                                <FormControlLabel control={<Checkbox value={"ראשון"} />} label="ראשון" />
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
                    <Button onClick={handleClose}>אישור</Button>

                    <Button onClick={handleClose}>ביטול</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
export default FormDialog;