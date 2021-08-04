const fs = require('fs');
const hub = require('./index.js');
//Mettez ce que vous voulez en bas à la place de "Example"
hub('Example').then(img => {

    fs.writeFile(`./cc.png`, img, () => {
        console.log("J'ai fini !")
    });

})
