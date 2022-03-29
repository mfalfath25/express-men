// auth login checker
module.exports = {
  // get login page
  loginGet: (req, res) => {
    res.render('pages/login', { title: 'Login', statusCode: res.statusCode })
  },
  // post login data
  loginPost: (req, res) => {
    const { email, password } = req.body
    const emailCheck = /^[\w\.\_\-]+@[a-z]+\.[a-z\.]+$/
    const passCheck = /^[\w\d]{6,}$/

    if (!emailCheck.test(email) || !passCheck.test(password)) {
      res.status(401).render('pages/login', {
        title: 'Login',
        statusCode: res.statusCode,
        error:
          'Masukkan username dan password yang benar. Perhatikan penggunaan huruf kapital.',
      })
    } else {
      res.status(200).redirect('/dashboard')
    }
  },
}
