const res = require('express/lib/response')

// const deleteCar = (id) => {
//   fetch(`/cars/${id}`, {
//     method: 'DELETE',
//   }).then((res) => {
//     return res.render('pages/cars', { id })
//   })
// }

const deleteCar = (id) => {
  fetch(`/cars/${id}`, {
    method: 'DELETE',
  })
    .then((res) => {
      return res.render('pages/cars', { id })
    })
    .then(() => {
      setTimeout(() => {
        window.location.reload()
      }),
        1000
      res.redirect('/cars')
    })
}
