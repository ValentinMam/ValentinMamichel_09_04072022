/* eslint-disable no-undef */
/**
 * @jest-environment jsdom
 */

//  ESLint :'describe' is not defined
//  ESLint :'test' is not defined
//  ESLint :'expect' is not defined

import { screen } from '@testing-library/dom'
import Actions from '../views/Actions.js'
import '@testing-library/jest-dom/extend-expect'

//  je suis connecté en tant qu'employée
describe('Given I am connected as an Employee', () => {
  //  je suis sur la page des factures et il y a des factures
  describe('When I am on Bills page and there are bills', () => {
    //  devrait retourner l'icone oeil
    test('Then, it should render icon eye', () => {
      const html = Actions()
      document.body.innerHTML = html
      expect(screen.getByTestId('icon-eye')).toBeTruthy()
    })
  })
  //  je suis sur la page des factures et il y a des factures avec l'URL du fichier
  describe('When I am on Bills page and there are bills with url for file', () => {
    //  devrait me retourner le detail du justificatif
    test('Then, it should save given url in data-bill-url custom attribute', () => {
      const url = '/fake_url'
      const html = Actions(url)
      document.body.innerHTML = html
      expect(screen.getByTestId('icon-eye')).toHaveAttribute(
        'data-bill-url',
        url
      )
    })
  })
})
