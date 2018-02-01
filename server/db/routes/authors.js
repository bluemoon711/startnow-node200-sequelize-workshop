const express = require('express');
const router = express.Router();
const db = require('../models');

router.get('/', (req, res) => {
    db.Author.findAll()
        .then(authors => {
            res.status(200).json(authors);
        })
        .catch(err => res.send(err));
});


router.get('/:id', (req, res) => {
    var id = req.params.id;
    db.Author.findById(id)
        .then( (doc) => {
            if (!doc) {return res.status(404).end();}
            return res.status(200).json(doc);
         })
         .catch(err => res.send(err));
});

router.get('/:id/blogs', (req, res) => {
    var id = req.params.id;
    db.Blog.findAll({where: {authorId: id}})
        .then( (doc) => {
            if (!doc) {return res.status(404).end();}
            return res.status(200).json(doc);
         })
         .catch(err => res.send(err));
});

router.post('/', (req, res) => {
    db.Author.create(req.body)
        .then(doc => {
          res.status(201).json(doc)
        })
        .catch(err => res.send(err));     
});

router.put('/:id', (req, res) => {
    db.Author.update(req.body, {where: {id: req.params.id}})
        .then(author => {
            res.status(204).json(author);
        })
        .catch(err => res.send(err));
});

router.delete('/:id', (req, res) => {
    var id = req.params.id;
    db.Author.destroy({where: {id: id}})
        .then(doc => {
            if (!doc) { return res.status(404).end();}
            return res.status(200).end();
        })
        .catch(err => res.send(err));
});

module.exports = router;