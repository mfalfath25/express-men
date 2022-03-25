const Car = require('../models/car')
const dummyData = require('../data/dummy')

module.exports = {
  // Get all cars
  getCarList: async (req, res) => {
    const cars = await Car.find()

    res.render('cars', {
      title: 'Cars-list',
      heading: 'Cars',
      subHeading: 'List-car',
      cars,
    })
  },
  // Get add car page
  getAddCar: async (req, res) => {
    res.render('addCar', {
      title: 'Cars-add',
      heading: 'Cars',
      subHeading: 'List-car',
    })
  },
  // Post add car data
  postAddCar: async (req, res) => {
    // return res.json(req.body)
    const { nama, harga, kategori, rent_start, rent_end } = req.body
    const data = {
      nama,
      harga,
      kategori,
      foto: '/assets/images/car-dummy.png',
      rent_start,
      rent_end,
    }

    await Car.create(data)

    return res.status(201).json({ message: 'Data berhasil disimpan' })
  },
}
