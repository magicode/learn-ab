
const fs = require("fs");
const path = require("path");

var data = fs.readFileSync(path.join(__dirname,'word-1.txt'),'utf8'); 

var list =
    (data || '').split(/[\n\r]#/g).map(function(item) {
        var lines = item.trim().split(/[\n\r]+/g);
        var obj = {};
        obj.word = lines[0];
        obj.wordImage = lines[1];
        return obj.word && obj.wordImage && obj;
    }).filter(function(item) {
        return item;
    });
    
list.forEach(function(item){
    let file = path.join(__dirname, 'words-images',item.wordImage);
    if(!fs.existsSync(file))
        console.log("file not found:",file);
});
