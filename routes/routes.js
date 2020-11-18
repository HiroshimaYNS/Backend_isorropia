const express = require('express');
const router = express.Router();

const mysqConnection = require('../db/db.js');


//GET Recetas
router.get('/recetas/:Nombre_Receta', (req,res)=>{
    const { Nombre_Receta } = req.params;

    mysqConnection.query('SELECT Nombre_Receta, Ingredientes, Pasos, Imagen FROM  Receta  WHERE Nombre_Receta = ?',[Nombre_Receta], (err, rows, fields)=>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    })
})


//GET Valor nutricional
router.get('/valor', (req,res)=>{
    mysqConnection.query('SELECT Valor_Nutricional FROM  Receta', (err, rows, fields)=>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    })
})



//POST Registro
router.post('/usuario', (req,res)=>{
    const {Nombre, Apellido, Edad, Peso, Correo_electronico, Contraseña} = req.body;

    let Usuario = [Nombre, Apellido, Edad, Peso, Correo_electronico, Contraseña];

    let NuevoUsuario = 'INSERT INTO Usuario (Nombre, Apellido, Edad, Peso, Correo_electronico, Contraseña) VALUES(?, ?, ?, ?, ?, ?)';
    mysqConnection.query(NuevoUsuario, Usuario, (err, results, fields)=>{
        if(err){
            return console.error(err.message)
        }
        res.json({message: 'Usuario ya existente UwU'})
    })
})


//Intento de barra buscadora recetas



module.exports = router;