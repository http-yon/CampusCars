import express from "express";
import databaseConection from "../config/config.js";

class Server {

    constructor(){
        this.app = express()
        this.port = process.env.PORTXLR8

        //path


        //middlewares
        this.middlewares()
        //routes
        this.routes()
        //database
        this.dbCnx()
    }

    async dbCnx(){   
        await databaseConection()
    }

    middlewares(){
        this.app.use(express.json())
    }


    routes(){
    }

    listener(){
        this.app.listen(this.port,()=>{
            console.log("SERVER RUNNING");
        })
    }
}


export default Server
