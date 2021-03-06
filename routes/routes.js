const express = require('express');
const router = express.Router();
const mysqConnection = require('../db/db.js');


//POST Registro
router.post('/usuario_nuevo', (req,res)=>{
    const {Nombre, Apellido, Edad, Peso, Correo_electronico, Contraseña} = req.body;

    let Usuario = [Nombre, Apellido, Edad, Peso, Correo_electronico, Contraseña];
    let NuevoUsuario = 'INSERT INTO Usuario (Nombre, Apellido, Edad, Peso, Correo_electronico, Contraseña) VALUES(?, ?, ?, ?, ?, ?)';
    mysqConnection.query(NuevoUsuario, Usuario, (err, results, fields)=>{
        if(err){
            return console.error(err.message)
        }
        res.json({message: 'Usuario creado correctamente UwU'})
    })
})

//GET Usuario
router.get('/usuario', (req,res)=>{
    const { id_Usuario } = req.params;
    mysqConnection.query('SELECT * FROM Usuario WHERE id=?', [id], (err, rows, fields)=>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    })
})

//Get valor
router.get('/valor', (req,res)=>{
    mysqConnection.query('SELECT Valor_Nutricional FROM  Receta', (err, rows, fields)=>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    })
})

//Get receta 
router.get('/receta', (req,res)=>{
    res.header('Access-Control-Allow-Origin', '*');
    mysqConnection.query('SELECT id_Receta, Nombre_Receta, Ingredientes, Pasos, Imagen FROM  Receta', (err, rows, fields)=>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    })
})

//Get rutina
router.get('/ejercicio', (req,res)=>{
    mysqConnection.query('SELECT Tipo_rutina, Zona_enfocada, Tiempo_Aprox FROM  Rutina' , (err, rows, fields)=>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    })
})

module.exports = router;