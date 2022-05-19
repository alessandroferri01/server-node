const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling GET requests to /recensioni'
    });
});

router.post('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling POST requests to /recensioni'
    });
});

router.get('/:recensioneId', (req, res, next) => {
    const id = req.params.recensioneId;

    if (id === 'special') {
        res.status(200).json({
            message: 'Recensione speciale',
            id: id
        })
    } else {
        res.status(200).json({
            message: 'Recensione con id',
            id: id
        })
    }
});

router.patch('/:recensioneId', (req, res, next) => {
    res.status(200).json({
        message: 'Recensione modificata',
    });
});

module.exports = router;

