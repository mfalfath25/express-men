const Car = require('../models/car')

module.exports = {
  getCarList: async (req, res) => {
    const cars = await Car.find()

    res.render('pages/dashboard', {
      title: 'Dashboard',
      heading: 'DASHBOARD',
      subHeading: 'Dashboard',
      cars,
    })
  },
}
