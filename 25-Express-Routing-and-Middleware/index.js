const express = require('express');
const app = express();
const port = 3000;
const routes = require("./routes");

const logger = (req, res, next) => {
    console.log("this is logger");
    next()
}
app.use(logger);
async function main(){
    try{
            app.use(express.json())
            app.use(routes)
            
            app.listen(port,() => {
                console.log("Server is listening on port",port)
            })
    }
    catch(error){
        console.log("main:",error)
    }
    
}

main();