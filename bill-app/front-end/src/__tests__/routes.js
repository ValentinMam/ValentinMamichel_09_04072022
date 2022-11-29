/* eslint-disable no-undef */
/**
 * @jest-environment jsdom
 */

//  ESLint :'describe' is not defined
//  ESLint :'test' is not defined
//  ESLint :'expect' is not defined

import { screen } from '@testing-library/dom'
import { ROUTES, ROUTES_PATH } from '../constants/routes'

const data = []
const loading = false
const error = null

// je suis connecté et je suis sur une page de l'application
describe('Given I am connected and I am on some page of the app', () => {
  // lorsque je navigue vers la page de connexion
  describe('When I navigate to Login page', () => {
    // la page de connexion doit être affichée
    test('Then, it should render Login page', () => {
      const pathname = ROUTES_PATH.Login
      const html = ROUTES({
        pathname,
        data,
        loading,
        error,
      })
      document.body.innerHTML = html
      expect(screen.getAllByText('Administration')).toBeTruthy()
    })
  })
  // lorsque je navigue vers la page factures
  describe('When I navigate to Bills page', () => {
    // la page factures doit être affichée
    test('Then, it should render Bills page', () => {
      const pathname = ROUTES_PATH.Bills
      const html = ROUTES({
        pathname,
        data,
        loading,
        error,
      })
      document.body.innerHTML = html
      expect(screen.getAllByText('Mes notes de frais')).toBeTruthy()
    })
  })
  // lorsque je navigue vers la page Nouvelle facture
  describe('When I navigate to NewBill page', () => {
    // la page Nouvelle facture doit être affichée
    test('Then, it should render NewBill page', () => {
      const pathname = ROUTES_PATH.NewBill
      const html = ROUTES({
        pathname,
        data,
        loading,
        error,
      })
      document.body.innerHTML = html
      expect(screen.getAllByText('Envoyer une note de frais')).toBeTruthy()
    })
  })
  // lorsque je navigue sur le tableau de bord
  describe('When I navigate to Dashboard', () => {
    // le tableau de bord doit être affiché
    test('Then, it should render Dashboard page', () => {
      const pathname = ROUTES_PATH.Dashboard
      const html = ROUTES({
        pathname,
        data,
        loading,
        error,
      })
      document.body.innerHTML = html
      expect(screen.getAllByText('Validations')).toBeTruthy()
    })
  })
  // lorsque je navigue sur toutes autres pages que login, bills, newbill, dashboard
  describe('When I navigate to anywhere else other than Login, Bills, NewBill, Dashboard', () => {
    // la page de connexion doit être affichée
    test('Then, it should render Loginpage', () => {
      const pathname = '/anywhere-else'
      const html = ROUTES({
        pathname,
        data,
        loading,
        error,
      })
      document.body.innerHTML = html
      expect(screen.getAllByText('Administration')).toBeTruthy()
    })
  })
})
