module.exports = app => {
    const todo = require('../controller/controller'),
    router = require('express').Router();

    router.post('/', todo.create)

    router.get('/', todo.findAll)

    router.get('/test', (req, res) => {
        res.send('siap bang jago')
    })

    router.get('/done', todo.findByDone)

    router.get('/notdone', todo.findByNotDone)

    router.get('/one/:id', todo.findOne)

    router.put('/:id', todo.update)

    router.delete('/:id', todo.delete)

    router.delete('/', todo.deleteAll)

    app.use('/api/', router)
}