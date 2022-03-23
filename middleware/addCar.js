// create car data
module.exports = {
  addcarGet: (req, res) => {
    res.render('cars/add', {
      title: 'Cars-add',
      heading: 'Cars',
      subHeading: 'List-car',
    })
  },
  addcarPost: (req, res) => {
    res.json(req.body)
  },
}
