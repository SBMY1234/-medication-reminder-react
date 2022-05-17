//קבלת כל התרופות
//פניה לשרת בapi אני סתם המצאתי פה ניתוב של שרת
// let myUrl='http://localhost:4002/'
// //קבלת כל המןצרים
// export const getAllMedicines=async()=>{
//     // מכניס לתוך משתנה את הנתונים שמקבל מהשרת אני סתם המצאתי פה שם
//     let allMedicines = await axios.get(`${myUrl}/Medicines`)
//     console.log(allMedicines.data);
//     //מחזיר תנתונים שקיבל מהשרת
//     return allMedicines.data;
// }

// //קבלת מוצר ע"י קוד
// export const getMedicinesById=async(id)=>{
//     console.log(id)
//       // מכניס לתוך משתנה את הנתונים שמקבל מהשרת אני סתם המצאתי פה שם
//     let addMed = await axios.get(`${myUrl}Medicines/${id}`)
    
//     return addMed.data;
// }
// //הוספת תרופה חדשה
// export const addMedicines=async(Medicine)=>{
//       // מכניס לתוך משתנה את הנתונים שמקבל מהשרת אני סתם המצאתי פה שם
//     let addMed =await axios.post(`${myUrl}Medicines/`,Medicine)
//     return addMed.data;
// }