/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
// ESLint : '$' is not defined
// ESLint : 'e' is defined but never used

import { ROUTES_PATH } from '../constants/routes.js'

export default class Logout {
  constructor({ document, onNavigate, localStorage }) {
    this.document = document
    this.onNavigate = onNavigate
    this.localStorage = localStorage
    $('#layout-disconnect').click(this.handleClick)
  }

  handleClick = (e) => {
    this.localStorage.clear()
    this.onNavigate(ROUTES_PATH.Login)
  }
}
