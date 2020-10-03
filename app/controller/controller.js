const db = require('../model/list.model');

exports.create = (req, res) => {
    const {todo, done} = req.body;
    db.create({ todo, done })
        .then(data => { 
            res.json(data)
        })
        .catch(err => {
            res.status(500).send(err)
        })
}

exports.findByDone = (req, res) => {
    db.find({done: true})
        .then(data => {
            res.json(data)
        })
        .catch(err => [
            res.status(500).send(err)
        ])
}

exports.findByNotDone = (req, res) => {
    db.find({done: false})
        .then(data => {
            res.json(data)
        })
        .catch(err => {
            res.status(500).send(err)
        })
}

exports.findOne = (req, res) => {
    const id = req.params.id
    db.findById(id)
        .then(data => {
            res.json(data)
        })
        .catch(err => {
            res.send(err)
        })
}

exports.update = (req, res) => {
    const { todo, done } = req.body
    const id = req.params.id;
    db.findByIdAndUpdate(id, {todo, done})
        .then(() => {
            res.send({
                message: 'Update complete'
            })
        })
        .catch(err => {
            res.status(500).send(err)
        })
}

exports.delete = (req, res) => {
    const id = req.params.id;
    db.findByIdAndDelete(id)
        .then(() => {
            res.json({
                message: 'Delete complete'
            })
        })
        .catch(err => {
            res.status(500).send(err)
        })
}

exports.deleteAll = (req, res) => {
    db.deleteMany()
        .then(() => {
            res.json({
                message: 'Delete complete all'
            })
        })
        .catch(err => {
            res.status(500).send(err)
        })
}