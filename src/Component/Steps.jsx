import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  direction: 'rtl',
});

const steps = [
  'פרטים אישיים',
  'רשימת תרופות',
  'אישור ושליחה',
];

// export default function MyStepper() {
//   return (
//     //   <div className='stepsCss'>
    
//         // <Box  sx={{ width: '100%' }}>
//         //   <Stepper activeStep={1} alternativeLabel>
//         //     {steps.map((label) => (
//         //       <Step key={label}>
//         //         <StepLabel>{label}</StepLabel>
//         //       </Step>
//         //     ))}
//         //   </Stepper>
//         // </Box>
      

//     // </div>
//   );
// }