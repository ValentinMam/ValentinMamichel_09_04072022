/* eslint-disable no-undef */
/**
 * @jest-environment jsdom
 */

//  ESLint :'describe' is not defined
//  ESLint :'test' is not defined
//  ESLint :'expect' is not defined

import { screen } from '@testing-library/dom'
import LoadingPage from '../views/LoadingPage.js'

//  je suis connecté à l'application en tant qu'employée ou admin
describe('Given I am connected on app (as an Employee or an HR admin)', () => {
  //  lorsque la page de chargement est appelée
  describe('When LoadingPage is called', () => {
    //  devrait être en chargement
    test('Then, it should render Loading...', () => {
      const html = LoadingPage()
      document.body.innerHTML = html
      expect(screen.getAllByText('Loading...')).toBeTruthy()
    })
  })
})
