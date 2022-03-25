module.exports = (layoutName) => (req, res, next) => {
  res.locals.layout = layoutName
  next()
}
