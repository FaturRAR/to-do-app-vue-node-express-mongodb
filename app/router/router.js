const todo = require('../controller/controller'),
router = require('express').Router();

    router.post('/', todo.create)

    router.get('/', todo.findAll)

    router.get('/done', todo.findByDone)

    router.get('/notdone', todo.findByNotDone)

    router.get('/one/:id', todo.findOne)

    router.put('/:id', todo.update)

    router.delete('/:id', todo.delete)

    router.delete('/', todo.deleteAll)

module.exports = router