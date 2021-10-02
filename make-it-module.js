const mymodule = require ('./challange6');

const dir = process.argv[2]
const extention = process.argv[3];

mymodule(dir , extention , (err,filtredlist)=>{
    if (err)  return console.log("error!")

    filtredlist.forEach(file =>{
console.log(file);
    })
}) 
