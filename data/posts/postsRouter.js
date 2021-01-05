
const express = require('express');
const Posts = require('../db');
const router = express.Router();
// const { json } = require('express');

router.get('/', (req, res) => {
    Posts.find()
    .then(posts => {
       res.json(posts)
    })
    .catch(error => {
        console.log(error)
        res.status(500).json({
            error: "The posts information could not be retrieved"
        })
    })
})

router.get('/:id', (req, res) => {
    const id = req.params.id;
    Posts.findById(id)
    .then(post => {
        if (!post) {
            res.status(404).json({
                message: "The post with the specified ID does not exist."
            })
        } else {
            res.json(post)
        }
    })
    .catch(error => {
        console.log(error)
        res.status(500).json({
            error: "The post information could not be retrieved."
        })
    })
})

//find post comments
router.get('/:id/comments', (req, res) => {
    const id = req.params.id;
    Posts.findPostComments(id)
    .then(comments => {
        if (!comments) {
            res.status(404).json({
                message: "The post with the specified ID does not exist."
            })
        } else {
            res.status(200).json(comments)
        }
    })
    .catch(error => {
        console.log(error)
        res.status(500).json({
            error: "The comments information could not be retrieved."
        })
    })
})


module.exports = router;
