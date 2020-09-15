const express = require('express');
const router = express.Router();
const User = require('./models/User');
const bcrypt = require('bcrypt');
const passport = require('passport')
const AuthController = require('./controllers/authController');
const NewsController = require("./controllers/newsController");
const MessageController = require("./controllers/messageController");
const ServiceController = require("./controllers/serviceController");

router.post("/login", AuthController.index);
router.get("/newsy", NewsController.index);
router.post("/newsy/create", passport.authenticate('jwt', { session: false }), NewsController.store);
router.delete("/newsy/delete/:id", passport.authenticate('jwt', { session: false }), NewsController.destroy);
router.post("/messages", MessageController.store);
router.get("/messages", passport.authenticate('jwt', { session: false }), MessageController.index);
router.delete("/messages/delete/:id", passport.authenticate('jwt', { session: false }), MessageController.destroy);
router.get("/uslugi", ServiceController.index);
router.post("/uslugi/create", passport.authenticate('jwt', { session: false }), ServiceController.store);
router.delete("/uslugi/delete/:id", passport.authenticate('jwt', { session: false }), ServiceController.destroy);
module.exports = router;