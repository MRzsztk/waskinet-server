const Service = require('../models/Service');

module.exports = {
    async index(req, res, next) {
        try {
            console.log('fetching prices')
            const uslugi = await Service.find()
            res.json(uslugi)
        } catch (error) {
            res.status(404).json(error)
        }
    },
    async store(req, res, next) {
        try {
            const { category, subcategory, service, price, unit } = req.body;
            console.log(service)
            const result = await Service.create({ category: category, subcategory: subcategory, service: service, price: price, unit: unit })
            if (!result) {
                return res.status(404).json({
                    message: 'Error saving service data.',
                })
            }
            const usluga = await Service.findOne({ _id: result._id })
            return res.status(200).json(usluga)

        } catch (error) {
            console.log(error)
        }
    },
    async update(req, res, next) {
      try {
          const { category, subcategory, service, price, unit } = req.body;
          console.log(service)
          const result = await Service.update({ category: category, subcategory: subcategory, service: service, price: price, unit: unit })
          if (!result) {
              return res.status(404).json({
                  message: 'Error saving service data.',
              })
          }
          // const usluga = await Service.findOne({ _id: result._id })
          // return res.status(200).json(usluga)

      } catch (error) {
          console.log(error)
      }
  },
    async destroy(req, res, next) {
        const _id = req.params.id
        try {
            const result = await Service.deleteOne({ _id: _id })
            if (result.deletedCount === 1) {
                return res.status(200).json({ message: "Service deleted." })
            }
        } catch (error) {
            return res.status(404).json(error)
        }
    }
}