const express = require('express');
const router = express.Router();

const Cow = require('../models/cows.js');


router.get('/',async (req, res) => {
  const registros = await Cow.find();
    res.json(registros);
});

router.get('/:id', async (req, res) => {
   let{id} = req.params
   console.log(id)
    let registro = await Cow.findById(id);
    res.json(registro);
});

router.post('/',async (req, res) => {
    const {idSenasa, animal, peso, potrero, dispositivo, nroDispositivo} = req.body;
    const newCow = new Cow({idSenasa, animal, peso, potrero, dispositivo, nroDispositivo});
    await newCow.save();
    res.json({
        status: 'Cow Saved'
    });
});

router.put('/:id',async (req, res) => {
    const {idSenasa, animal, peso, potrero, dispositivo, nroDispositivo} = req.body;
    await Cow.findByIdAndUpdate(req.params.id, {idSenasa, animal, peso, potrero, dispositivo, nroDispositivo});
    res.json({
        status: 'Cow Updated'
    });
});

router.delete('/:id',async (req, res) => {
    await Cow.findByIdAndRemove(req.params.id);
    res.json({
        mensaje: 'Cow Deleted'
    });
});

router.get('/search/:data',async (req, res) => {
 
    const dato = req.params.data;  
    const registros = await Cow.find({$or: [{idSenasa: {'$regex': dato,$options:'i'} }, {animal:{'$regex': dato,$options:'i'}}, 
         {potrero:{'$regex': dato,$options:'i'}}, {dispositivo:{'$regex': dato,$options:'i'}},
          {nroDispositivo: {'$regex': dato,$options:'i'}}]});
    
console.log(registros)
    res.json(registros);
})


module.exports = router;