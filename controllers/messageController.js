const Message = require('../models/Message');

module.exports = {
    async index(req, res, next) {
        try {
            console.log('fetching messages')
            const messages = await Message.find()
            res.json(messages)
        } catch (error) {
            res.status(404).json(error)
        }
    },
    async show(req, res, next) {
        try {
            const message = await Message.findOne({ _id: req.params.id })
            res.json(message)
        } catch (error) {
            res.status(404).json(error)
        }
    },
    async store(req, res, next) {
        try {
            const { email, message } = req.body;
            const result = await Message.create({ email: email, message: message })
            if (!result) {
                return res.status(404).json({
                    message: 'Error sending message.',
                })
            }
            return res.status(200).json({ sent: 'Your message has been sent.'})
        } catch (error) {
            console.log(error)
        }
    },
    async destroy(req, res, next) {
        const _id = req.params.id
        try {
            const result = await Message.deleteOne({ _id: _id })
            if (result.deletedCount === 1) {
                return res.status(200).json({ sent: "Message deleted." })
            }
        } catch (error) {
            return res.status(404).json(error)
        }
    }
}