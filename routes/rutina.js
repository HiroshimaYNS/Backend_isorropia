const express = require('express');
const router = express.Router();

const mysqConnection = require('../db/db.js');

//Get Rutina
router.get('/ejercicio/:id_Rutina', (req,res)=>{
    const { id_Rutina } = req.params;
    
    mysqConnection.query('SELECT Tipo_rutina, Zona_enfocada, Tiempo_Aprox FROM  Rutina  WHERE id_Rutina=?',[id_Rutina] , (err, rows, fields)=>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    })
})




module.exports = router;
