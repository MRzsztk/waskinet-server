const News = require('../models/News');

module.exports = {
    async index(req, res, next) {
        try {
            console.log('fetching news')
            const newsy = await News.find()
            res.json(newsy)
        } catch (error) {
            res.status(404).json(error)
        }
    },
    async show(req, res, next) {
        try {
            const news = await News.findOne({ _id: req.params.id })
            res.json(news)
        } catch (error) {
            res.status(404).json(error)
        }
    },
    async store(req, res, next) {
        try {
            const { title, tags, content } = req.body;
            console.log(title)
            const result = await News.create({ title: title, tags: tags, content: content })
            if (!result) {
                return res.status(404).json({
                    message: 'Error saving your text',
                })
            }
            const news = await News.findOne({ _id: result._id })
            return res.status(200).json(news)

        } catch (error) {
            console.log(error)
        }
    },
    async destroy(req, res, next) {
        const _id = req.params.id
        try {
            const result = await News.deleteOne({ _id: _id })
            if (result.deletedCount === 1) {
                return res.status(200).json({ message: "Text deleted." })
            }
        } catch (error) {
            return res.status(404).json(error)
        }
    }
}