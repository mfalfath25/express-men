const checkForm = (email, password) => {
  const emailCheck = /^[\w\.\_\-]+@[a-z]+\.[a-z\.]+$/
  const passCheck = /^[\w\d]{8,}$/
  if (email.match(emailCheck) != null && password.match(passCheck) != null) {
    return true
  } else {
    return false
  }
}

module.exports = {
  checkForm,
}
