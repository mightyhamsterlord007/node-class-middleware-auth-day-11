module.exports = {
    makeSound: function(req, res, next) {
        console.log('HELLO CLASSSSSS');
        next();
    },
    checkIfAnimalNameExist: function(req, res, next) {
        console.log('Animal Middleware');
        console.log('---------------')
        console.log(req.body)
        next();
    }
}