const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Recensione = require('../models/recensioni.js');

router.get('/', (req, res, next) => {
    Recensione.find()
        .exec()
        .then(elems => {
            console.log(elems);

            if(elems.length >= 0 ) {
                res.status(200).json(elems);
            } else {
                res.status(404).json({messaggio: 'Nessun elemento trovato'});
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({error: err});
        })
});

router.post('/', (req, res, next) => {
    const recensione = new Recensione({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        rating: req.body.rating,
    });

    recensione.save().then(result => {
        console.log(result);

        res.status(200).json({
            message: 'Handling POST requests to /recensioni',
            recensione: result,
        });
    }).catch(error => console.log(error));

    
});

router.get('/:recensioneId', (req, res, next) => {
    const id = req.params.recensioneId;

    Recensione.findById(id)
        .exec()
        .then(elem => {
            console.log('From database ' + elem);
            if(elem) {
                res.status(200).json(elem);
            } else {
                res.status(404).json({message: 'Recensione non trovata'});
            }
            
        })
        .catch(err => console.log(err));
});

router.delete('/:recensioneId', (req, res, next) => {
    const id = req.params.recensioneId;

    Recensione.deleteOne({_id: id})
        .exec()
        .then(result => {
            res.status(200).json(result);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({error: err})
        })
});

module.exports = router;

