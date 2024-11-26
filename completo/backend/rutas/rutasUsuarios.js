var ruta = require("express").Router();
var {mostrarUsuarios,nuevoUsuario,borrarUsuario,buscarPorId,editarUsuario,login}=require("../bd/usuariosBD");

ruta.post("/login",async(req,res)=>{
    const usuario = await login(req, req.body.usuario, req.body.password);
    res.json(usuario);
});

ruta.get("/usuarios",async(req, res)=>{
    //res.send("Hola estas en raíz");
    await mostrarUsuarios();
    const usuarios=await mostrarUsuarios();
    //console.log(usuarios);
    res.json(usuarios);
});



ruta.get("/buscarPorId/:id", async(req,res)=>{  
    var usuarioValido = await buscarPorId(req.params.id);
    res.json(usuarioValido);
});

ruta.delete("/borrarUsuario/:id", async (req,res)=>{
    var borrado=await borrarUsuario(req.params.id);
    res.json(borrado);
});

ruta.post("/nuevoUsuario", async(req, res)=>{
    var usuarioValido = await nuevoUsuario(req.body);
    res.json(usuarioValido);
});

ruta.delete("/editarUsuario/:id", async (req, res) => {
    var resultado = await editarUsuario(req.params.id, req.body);
    res.json(resultado);
});

ruta.get("/buscar", async (req, res) => {
    const { query } = req.query; 
    const usuarios = await mostrarUsuarios();
    
    
    const resultados = usuarios.filter(usuario => 
        usuario.nombre.toLowerCase().includes(query.toLowerCase())
    );

    res.json(resultados);
});

module.exports=ruta;