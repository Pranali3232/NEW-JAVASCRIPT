const now= new Date()
const year = now.getFullYear() 
const month = now.getMonth() + 1 
const date = now.getDate() 
const hours = now.getHours() 
const minutes = now.getMinutes()
console.log(`${year}/${month}/${date} ${hours}:${minutes}`)//YYYY-MM-DD HH:mm
console.log(`${date}/${month}/${year} ${hours}:${minutes}`)//DD-MM-YYYY HH:mm
console.log(`${date}/${year}/${month} ${hours}:${minutes}`)//DD/MM/YYYY HH:mm

