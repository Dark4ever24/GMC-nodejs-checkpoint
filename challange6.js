const fs = require("fs");
const path = require("path");

module.exports =  (dir , extention , cb ) => {

    extention = `.${extention}`
fs.readdir(dir,(err , list)=> {
    if (err) return cb (err);
    const filter = list.filter(file => {
        return path.extname(file) === extention ;
    })



    return cb(null , filter);

}

)

}