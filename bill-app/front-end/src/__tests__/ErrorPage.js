/* eslint-disable no-undef */
/**
 * @jest-environment jsdom
 */

//  ESLint :'describe' is not defined
//  ESLint :'test' is not defined
//  ESLint :'expect' is not defined

import { screen } from '@testing-library/dom'
import ErrorPage from '../views/ErrorPage.js'

// je suis connecté sur l'application en tant qu'employée ou admin
describe('Given I am connected on app (as an Employee or an HR admin)', () => {
  // la page d'erreur est appelée sans erreur dans sa signature
  describe('When ErrorPage is called without and error in its signature', () => {
    // devrait retourner la page d'erreur sans message d'erreur
    test('Then, it should render ErrorPage with no error message', () => {
      const html = ErrorPage()
      document.body.innerHTML = html
      expect(screen.getAllByText('Erreur')).toBeTruthy()
      expect(screen.getByTestId('error-message').innerHTML.trim().length).toBe(
        0
      )
    })
  })
  // la page d'erreur est appelée avec une erreur dans sa signature
  describe('When ErrorPage is called with error message in its signature', () => {
    // devrait retourner la page d'erreur avec un message d'erreur
    test('Then, it should render ErrorPage with its error message', () => {
      const error = 'Erreur de connexion internet'
      const html = ErrorPage(error)
      document.body.innerHTML = html
      expect(screen.getAllByText(error)).toBeTruthy()
    })
  })
})
