const fs = require('fs');

const path = require('path');


const dir = process.argv[2];

const extention = `.${process.argv[3]}`;


fs.readdir(dir , (list)=>{
    list.forEach(file => {
        if(path.extname(file) === extention){
            console.log(file)
        }

    })
})






