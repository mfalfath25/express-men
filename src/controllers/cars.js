const Car = require('../models/car')
const dummyData = require('../data/dummy')

module.exports = {
  // Get all cars
  getCarList: async (req, res) => {
    const cars = await Car.find()

    res.render('pages/cars', {
      title: 'Cars-list',
      heading: 'Cars',
      subHeading: 'List-car',
      cars,
    })
  },
  // Get add car page
  getAddCar: (req, res) => {
    res.render('pages/cars/addCar', {
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
      message:'Data berhasil disimpan'
    }
    await Car.create(data)
    return res.status(201).redirect('/cars')
  },
  // Get delete car page
  getDeleteCar: async (req, res) => { 
    const { id } = req.params
    const car = await Car.findById(id)

    res.render('pages/cars/deleteCar', {
      title: 'Cars-list',
      heading: 'Cars',
      subHeading: 'List-car',
      car
    })
  },
  // Delete car data by id
  deleteCar: async (req, res) => {
    const { id } = req.params
    await Car.findByIdAndRemove(id)

    return res.status(200).json({ message: 'Data berhasil dihapus' })
  },
  // Get edit car data by id
  getEditCar: async (req, res) => {
    const { id } = req.params// get value from query based on key id
    const car = await Car.findById(id)

    return res.render('pages/cars/editCar', {
      title: 'Cars-list',
      heading: 'Cars',
      subHeading: 'List-car',
      car,
    })
  },
  // Put edit car data by id
  putEditCar: async (req, res) => { 
    const { id } = req.query // get id from param

    const { nama, harga, kategori, rent_start, rent_end } = req.query

    await Car.findByIdAndUpdate(id, {
      nama,
      harga,
      kategori,
      foto: '/assets/images/car-dummy.png',
      rent_start,
      rent_end,
      message:'Data berhasil diperbarui'
    })
    await Car.save()

    return res.status(200).json({message:'Data berhasil diperbarui'})
  }
}
