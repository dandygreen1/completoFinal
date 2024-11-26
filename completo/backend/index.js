const express = require("express");
const session = require("express-session");
const cors = require("cors");
const usuariosRutas=require("./rutas/rutasUsuarios");
const productosRutas=require("./rutas/rutasProductos");
const ventasRutas=require("./rutas/rutasVentas");

require("dotenv").config();


const app=express();
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors());
app.use(session({
    secret:"Skrillex",
    resave:true,
    saveUninitialized:true,
    cookie:{secure:true}
}));
/*app.use(session({
    secret:process.env.SESSION_SECRETO,
    resave:true,
    saveUninitialized:true
}));*/

app.use("/",usuariosRutas, productosRutas, ventasRutas);


var port=process.env.PORT || 3000;    

app.listen(port,()=>{
    console.log("HOLA MY NAME IS GUSTAMBO, BUT YOU CAN CALL ME ROTOPLAS, SERVIDOR EN http://localhost:"+port);
});