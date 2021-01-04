
const express = require('express');
const Posts = require('../db');
const router = express.Router();
const { json } = require('express');

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


module.exports = router;
