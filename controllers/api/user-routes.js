const router = require("express").Router();
const bcrypt = require("bcrypt");
const { User } = require('../../models');

// http://localhost:3001/api/user
router.post('/', async (req, res) => {

try {
const dbUserData = await User.create({
username: req.body.username, 
password: req.body.password,

})

req.session.save(() => {
    req.session.loggedIn = true;

    res.status(200).json(dbUserData);
  });

} catch (err) {
    res.status(500).json(err)

}

}) 
// http://localhost:3001/api/user/login
router.post('/login', async (req, res) => {

    try {
    const dbUserData = await User.findOne({
        where:{
            username: req.body.username
        }
    })

    if (!dbUserData) { 

        res.status(400).json({
            message: "Login Failed"
        });
        return 

    }
    const validPassword =  await dbUserData.checkPassword(req.body.password);
    // ref. class example 19, user modles/user routes.
    if (!validPassword) {

        res.status(400).json({
            message: "Login Failed"
        });
        return
        
    }

    } catch (err) {
        res.status(500).json(err)
    
    }
    
    })
module.exports(router);