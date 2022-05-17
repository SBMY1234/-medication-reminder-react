//התרופות
export const Madicines = () => {
//הוספת תרופה
// const addNewUMadicines=async(e)=> {
//     debugger
//         e.preventDefault();
//     let newM ={
//         name:e.target.name.value,
//     }
//     let NewMadicinesList = await addMedicines(newM)
   
//     console.log( NewMadicinesList)
  

return<>
<form onSubmit={(e)=>addNewUMadicines(e)}></form>
<button style={{height:"30px",width:"70px",color:"green"}}>תרופה</button>
</>
}