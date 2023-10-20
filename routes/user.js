const express = require('express')
const router = express.Router();
const User = require('../models/userSchema')

router.route('/create').post(async (req, res) => {
    try {
        const { name } = req.body
        const user = await new User({ name }).save()
        return res.status(201).json({
            message: "User created succesfully",
            user
        })

    } catch (error) {
        return res.status(500).json({
            message: "Some error occured"
        })
    }
})

module.exports = router;