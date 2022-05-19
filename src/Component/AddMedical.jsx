

import * as React from 'react';

import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'

import './AddMedical.css';



//התרופות
export const AddMedical = () => {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    //הוספת תרופה
    // const addNewUMadicines=async(e)=> {
    //     debugger
    //         e.preventDefault();
    //     let newM ={
    //         name:e.target.name.value,
    //     }
    //     let NewMadicinesList = await addMedicines(newM)

    //     console.log( NewMadicinesList)
    const allMedical = [
        "אקמול", "דקסמול", "נורופן"
    ]

    return <>

        <div>
            <Button variant="outlined" onClick={handleClickOpen}>
                פתיחת דיאלוג
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>הוספת תרופה</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To subscribe to this website, please enter your email address here. We
                        will send updates occasionally.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Email Address"
                        type="email"
                        fullWidth
                        variant="standard"
                    />

                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>ביטול</Button>
                    <Button onClick={handleClose}>שמירה</Button>
                </DialogActions>
            </Dialog>
        </div>

        <form onSubmit={(e) => addNewUMadicines(e)}>

            <Autocomplete
                className='myautocomplate'
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
                        sx={{ width: 150 }}
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
    </>
}
export default AddMedical;