function loadModule( path ){
      
    const fs = require('fs')
    const fileContent = fs.readFileSync(path).toString();

    console.log(fileContent)
}