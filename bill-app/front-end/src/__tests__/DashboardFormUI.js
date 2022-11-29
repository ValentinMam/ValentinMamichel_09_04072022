/* eslint-disable no-undef */
/**
 * @jest-environment jsdom
 */

//  ESLint :'describe' is not defined
//  ESLint :'test' is not defined
//  ESLint :'expect' is not defined

import { screen } from '@testing-library/dom'
import DashboardFormUI from '../views/DashboardFormUI.js'
import { formatDate } from '../app/format.js'

const bill = {
  id: '47qAXb6fIm2zOKkLzMro',
  vat: '80',
  fileUrl:
    'https://test.storage.tld/v0/b/billable-677b6.a…f-1.jpg?alt=media&token=c1640e12-a24b-4b11-ae52-529112e9602a',
  status: 'accepted',
  type: 'Hôtel et logement',
  commentAdmin: 'ok',
  commentary: 'séminaire billed',
  name: 'encore',
  fileName: 'preview-facture-free-201801-pdf-1.jpg',
  date: '2004-04-04',
  amount: 400,
  email: 'a@a',
  pct: 20,
}

// facture acceptée
const billAccepted = {
  ...bill,
  status: 'accepted',
}

// facture en attente
const billPending = {
  ...bill,
  status: 'pending',
}

// facture refusée
const billrefused = {
  ...bill,
  status: 'refused',
}

// je suis connecté en tant qu'admin et je suis sur la page des factures
describe('Given I am connected as an Admin and I am on Dashboard Page', () => {
  // lorsque les données de facturation sont transmises au tableau de bord
  describe('When bill data is passed to DashboardUI', () => {
    // ces informations doivent se mettre dans la page
    test('Then, it should them in the page', () => {
      const html = DashboardFormUI(bill)
      document.body.innerHTML = html
      // vérification de la présence des données de facturation (const bill : vat, type...)
      expect(screen.getByText(bill.vat)).toBeTruthy()
      expect(screen.getByText(bill.type)).toBeTruthy()
      expect(screen.getByText(bill.commentary)).toBeTruthy()
      expect(screen.getByText(bill.name)).toBeTruthy()
      expect(screen.getByText(bill.fileName)).toBeTruthy()
      expect(screen.getByText(formatDate(bill.date))).toBeTruthy()
      expect(screen.getByText(bill.amount.toString())).toBeTruthy()
      expect(screen.getByText(bill.pct.toString())).toBeTruthy()
    })
  })
  // lorsque les factures en attente sont transmises au tableau de bord
  describe('When pending bill is passed to DashboardUI', () => {
    // devrait montrer le bouton et la zone de texte
    test('Then, it should show button and textArea', () => {
      const html = DashboardFormUI(billPending)
      document.body.innerHTML = html
      expect(screen.getByText('Accepter')).toBeTruthy()
      expect(screen.getByText('Refuser')).toBeTruthy()
      expect(screen.getByTestId('commentary2')).toBeTruthy()
    })
  })
  // lorsque les factures acceptées sont transmises au tableau de bord
  describe('When accepted bill is passed to DashboardUI', () => {
    // devrait montrer le commentaire de l'administrateur
    test('Then, it should show admin commentary', () => {
      const html = DashboardFormUI(billAccepted)
      document.body.innerHTML = html
      expect(screen.getByText(bill.commentAdmin)).toBeTruthy()
    })
  })
  // lorsque les factures refusées sont transmises au tableau de bord
  describe('When refused bill is passed to DashboardUI', () => {
    // devrait montrer le commentaire de l'administrateur
    test('Then, it should show admin commentary', () => {
      const html = DashboardFormUI(billrefused)
      document.body.innerHTML = html
      expect(screen.getByText(bill.commentAdmin)).toBeTruthy()
    })
  })
})
