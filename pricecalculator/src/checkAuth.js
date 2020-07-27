import cookie from 'cookie'

export const checkAuth = () => {
  const cookies = cookie.parse(document.cookie)
  const loggedIn = cookies["loggedIn"] ? true : false
  return loggedIn
}

export const logOut = () => {
  document.cookie = "loggedIn=;"
}