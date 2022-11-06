/* eslint-disable no-undef */
/**
 * @jest-environment jsdom
 */

//  ESLint :'describe' is not defined
//  ESLint :'test' is not defined
//  ESLint :'NewBill' is defined but never used !!!
//  ESLint :'screen' is defined but never used !!!

import { screen } from '@testing-library/dom'
import NewBillUI from '../views/NewBillUI.js'
import NewBill from '../containers/NewBill.js'

describe('Given I am connected as an employee', () => {
  describe('When I am on NewBill Page', () => {
    test('Then ...', () => {
      const html = NewBillUI()
      document.body.innerHTML = html
      // to-do write assertion
    })
  })
})
