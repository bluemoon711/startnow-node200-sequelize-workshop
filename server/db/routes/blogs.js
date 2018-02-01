const express = require('express');
const router = express.Router();
const blog = require('../models/blog');
const author = require('../models/author');
const db = require('../models');

router.get('/', (req, res) => {
    db.Blog
        .findAll()
        .then(blogs => {
            res.status(200).json(blogs);
        })
        .catch(err => res.send(err));
});

router.get('/featured', (req, res) => {
 db.Blog.findAll({where: { featured: true }})
            .then(blogs => {
                if (blogs) res.status(200).json(blogs);
                else res.status(404).send()
            })
            .catch(err => res.send(err));
});

router.post('/', (req, res) => {
    req.body.authorId = req.query.authorId;

    db.Blog
        .create(req.body)
        .then(newBlog => {
            res.status(201).json(newBlog);
        });

});

router.get('/:id', (req, res) => {
    var id = req.params.id;
    db.Blog.findById(id)
        .then( (doc) => {
            if (!doc) {return res.status(404).end();}
            return res.status(200).json(doc);
         })
         .catch(err => res.send(err));
});

router.put('/:id', (req, res) => {

    db.Blog.update(req.body, {where: { id: req.params.id }})
        .then(blog => res.status(204).json(blog));
});

router.delete('/:id', (req, res) => {
    var id = req.params.id;
    db.Blog.destroy({where: {id: id}})
        .then(doc => {
            if (!doc) { return res.status(404).end();}
            return res.status(200).end();
        })
        .catch(err => res.send(err));
});

module.exports = router;