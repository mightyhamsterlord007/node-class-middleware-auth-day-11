var express = require('express');
var router = express.Router();
var animalController = require('../controllers/animalController');
var  animalMiddleware = require('../utils/animalsMiddleware');

router.get('/', animalMiddleware.makeSound, function(req, res, next) {
    
    animalController.getAnimals({}, function(err, animals) {
        if (err) {
            res.json({
                message: 'Fail',
                error: err
            });
            return;
        }
        res.json({
            message: 'Success',
            data: animals
        });
        return;
    });
});

router.post('/', animalMiddleware.checkIfAnimalNameExist, function(req, res, next) {

    res.send(req.body)
    return;
    // animalController.createAnimal(req.body, function(err, animal) {
    //     if (err) {
    //         res.json({
    //             message: 'Fail',
    //             error: err
    //         });
    //         return;
    //     }
    //     res.json({
    //         message: 'success',
    //         data: animal
    //     });
    //     return;
    // });

});

module.exports = router;