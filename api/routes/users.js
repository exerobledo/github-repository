'use strict';
var express = require('express');
var router = express.Router();
const user = [
    { username: "exequiel", lastname: "robledo", id: 1 },
    { username: "exequiel", lastname: "robledo", id: 2 },
    { username: "exequiel", lastname: "robledo", id: 3 },
    { username: "exequiel", lastname: "robledo", id: 4 },
    { username: "exequiel", lastname: "robledo", id: 5 },
];

/* GET users listing. */
router.get( (req, res) => {
    try {
        console.log("req: ", req.body)
        //const user.includes()
        if (!user) return res.status(204).json({

            message: "No se encontraron users",
            data: {},
            error: null,
        })

        res.status(200).json({
            message: "Esta llegando bien",
            data: { user},
            error: null
            
        });
    } catch (err) {
        res.status(400).json({
            message: "Algo sucedio",
            data: { user },
            error: err.message
});
    }
});

const editUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findByPk(id);
        if (!user) return res.status(404).json({ message: 'User with that ID not found.' });
        user.username = req.body.username;
        user.lastname = req.body.lastname;
        user.id = req.body.id;
       const userUpdated = await user.save();
        res.status(200).json({
            message: `User ${userUpdated.id} was updated succesfully`,
            data: { userUpdated },
            error: null
        });
    } catch (err) {
        res.status(500).json({
            message: 'Not found',
            data: {},
            error: err.message
        });
    }
};

module.exports = router;