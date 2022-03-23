// auth login checker
module.exports = {
  loginGet: (req, res) => {
    res.render('login', { title: 'Login', statusCode: res.statusCode })
  },
  loginPost: (req, res) => {
    const { email, password } = req.body
    const emailCheck = /^[\w\.\_\-]+@[a-z]+\.[a-z\.]+$/
    const passCheck = /^[\w\d]{6,}$/

    if (!emailCheck.test(email) || !passCheck.test(password)) {
      res.status(401).render('login', {
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
