const express = require('express');
const router = express.Router();
const User = require('./models/User');
const bcrypt = require('bcrypt');
const passport = require('passport')
const AuthController = require('./controllers/authController');
const NewsController = require("./controllers/newsController");
const MessageController = require("./controllers/messageController");

router.post("/login", AuthController.index);
router.get("/newsy", NewsController.index);
router.post("/newsy/create", passport.authenticate('jwt', { session: false }), NewsController.store);
//router.put("/newsy/update/:id", passport.authenticate('jwt', { session: false }), NewsController.update);
router.delete("/newsy/delete/:id", passport.authenticate('jwt', { session: false }), NewsController.destroy);
router.post("/messages", MessageController.store);
router.get("/messages", passport.authenticate('jwt', { session: false }), MessageController.index);
module.exports = router;