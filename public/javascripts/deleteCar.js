const deleteCar = (id) => {
  fetch(`/cars/${id}`, {
    method: 'DELETE',
  }).then((res) => {
    return res.json()
  })
}
