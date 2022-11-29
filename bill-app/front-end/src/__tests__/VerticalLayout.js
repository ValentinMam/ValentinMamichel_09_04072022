/* eslint-disable no-undef */
/**
 * @jest-environment jsdom
 */

//  ESLint :'describe' is not defined
//  ESLint :'test' is not defined
//  ESLint :'expect' is not defined

import { screen } from '@testing-library/dom'
import VerticalLayout from '../views/VerticalLayout'
import { localStorageMock } from '../__mocks__/localStorage.js'

//  je suis connecté en tant qu'employé
describe('Given I am connected as Employee', () => {
  // les icones doivent être affichées
  test('Then Icons should be rendered', () => {
    Object.defineProperty(window, 'localStorage', { value: localStorageMock })
    const user = JSON.stringify({
      type: 'Employee',
    })
    window.localStorage.setItem('user', user)
    const html = VerticalLayout(120)
    document.body.innerHTML = html
    expect(screen.getByTestId('icon-window')).toBeTruthy()
    expect(screen.getByTestId('icon-mail')).toBeTruthy()
  })
})
