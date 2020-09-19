module.exports = app => {
    const todo = require('../controller/controller');

    app.post('/api/', todo.create)

    app.get('/api/', todo.findAll)

    app.get('/api/test', (req, res) => {
        res.send('siap bang jago')
    })

    app.get('/api/done', todo.findByDone)

    app.get('/api/notdone', todo.findByNotDone)

    app.get('/api/one/:id', todo.findOne)

    app.put('/api/:id', todo.update)

    app.delete('/api/:id', todo.delete)

    app.delete('/api', todo.deleteAll)
}