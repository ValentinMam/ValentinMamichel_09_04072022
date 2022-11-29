/* eslint-disable no-undef */
/**
 * @jest-environment jsdom
 */

//  ESLint :'describe' is not defined
//  ESLint :'test' is not defined
//  ESLint :'expect' is not defined

import '@testing-library/jest-dom'
import { fireEvent, screen, waitFor } from '@testing-library/dom'
import BillsUI from '../views/BillsUI.js'
import Bills from '../containers/Bills.js'
import { bills } from '../fixtures/bills.js'
import { ROUTES, ROUTES_PATH } from '../constants/routes.js'
import { localStorageMock } from '../__mocks__/localStorage.js'
import mockStore from '../__mocks__/store'
import router from '../app/Router.js'
jest.mock('../app/Store', () => {
  return mockStore
})

// je suis connecté en tant qu'employé
describe('Given I am connected as an employee', () => {
  Object.defineProperty(window, 'localStorage', { value: localStorageMock })
  window.localStorage.setItem(
    'user',
    JSON.stringify({
      type: 'Employee',
    })
  )

  // je suis sur la page facture
  describe('When I am on Bills Page', () => {
    // icone de la note en vertical doit être en surbrillance
    test('Then bill icon in vertical layout should be highlighted', async () => {
      const root = document.createElement('div')
      root.setAttribute('id', 'root')
      document.body.append(root)
      router()
      //  fichier container/Bills.js
      window.onNavigate(ROUTES_PATH.Bills)
      await waitFor(() => {
        return screen.getByTestId('icon-window')
      })
      const windowIcon = screen.getByTestId('icon-window')
      expect(windowIcon).toHaveClass('active-icon')
    })

    // les factures doivent être triées par date de la plus récente à la plus ancienne
    test('Then bills should be ordered from earliest to latest', () => {
      //  fichier views/BillsUI.js
      document.body.innerHTML = BillsUI({ data: bills })
      //  regex date
      const dates = screen
        .getAllByText(
          /^(19|20)\d\d[- /.](0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])$/i
        )
        .map((a) => {
          return a.innerHTML
        })
      const antiChrono = (a, b) => {
        return a < b ? 1 : -1
      }
      // tirer les dates
      const datesSorted = [...dates].sort(antiChrono)
      //  les dates doivent etre égales aux dates triées
      expect(dates).toEqual(datesSorted)
    })
  })

  // je clique sur le bouton nouvelle facture
  describe("When i click the button 'Nouvelle note de frais'", () => {
    // la nouvelle facture doit être créée
    test('Then newbill appears', () => {
      const onNavigate = (pathname) => {
        document.body.innerHTML = ROUTES({ pathname })
      }
      const billsPage = new Bills({
        document,
        onNavigate,
        store: null,
        bills: bills,
        localStorage: window.localStorage,
      })
      const OuvertureNewBill = jest.fn(billsPage.handleClickNewBill)
      // cible le bouton newbill
      const btnNewBill = screen.getByTestId('btn-new-bill')
      // écoute de l'événement click
      btnNewBill.addEventListener('click', OuvertureNewBill)
      // déclenche l'événement click
      fireEvent.click(btnNewBill)
      //   la page newbill doit être affichée
      expect(OuvertureNewBill).toHaveBeenCalled()
      expect(screen.getByText('Envoyer une note de frais')).toBeTruthy()
    })
  })

  // je suis sur la page facture et je clique sur l'icone oeil
  describe('When I am on Bills Page and i click on the eye icon', () => {
    // la modal doit être affichée
    test('Then the receipt that ha been uploaded appears', () => {
      const html = BillsUI({ data: bills })
      $.fn.modal = jest.fn()
      document.body.innerHTML = html
      const onNavigate = (pathname) => {
        document.body.innerHTML = ROUTES({ pathname })
      }
      const store = null
      const billsView = new Bills({
        document,
        onNavigate,
        store,
        localStorage: window.localStorage,
      })
      const clickIconeOeil = jest.fn(billsView.handleClickIconEye)
      //  cible l'icone oeil
      const iconeOeil = screen.getAllByTestId('icon-eye')[0]
      //   ecoute de l'événement click
      iconeOeil.addEventListener('click', clickIconeOeil(iconeOeil))
      //   déclenche l'événement click
      fireEvent.click(iconeOeil)
      expect(screen.getByText('Justificatif')).toBeTruthy()
    })
  })

  // ERROR 404 and 500
  // ERROR 404 = page not found, ressources not found
  // ERROR 500 = Internal Server Error

  // une erreur survient sur l'API
  describe('When an error occurs on API', () => {
    beforeEach(() => {
      jest.spyOn(mockStore, 'bills')
      Object.defineProperty(window, 'localStorage', {
        value: localStorageMock,
      })
      window.localStorage.setItem(
        'user',
        JSON.stringify({
          type: 'Employee',
          email: 'a@a',
        })
      )
      const root = document.createElement('div')
      root.setAttribute('id', 'root')
      document.body.appendChild(root)
      router()
    })

    // je récupère les factures et une erreur 404 survient
    test('Then i fetch the invoices in the api and it fails with a 404 error', async () => {
      mockStore.bills.mockImplementationOnce(() => {
        return {
          list: () => {
            return Promise.reject(new Error('Erreur 404'))
          },
        }
      })
      window.onNavigate(ROUTES_PATH.Bills)
      await new Promise(process.nextTick)
      const message = screen.getByText(/Erreur 404/)
      expect(message).toBeTruthy()
    })

    // je récupère les factures et une erreur 500 survient
    test('Then i fetch the invoices in the api and it fails with a 500 error', async () => {
      mockStore.bills.mockImplementationOnce(() => {
        return {
          list: () => {
            return Promise.reject(new Error('Erreur 500'))
          },
        }
      })
      window.onNavigate(ROUTES_PATH.Bills)
      await new Promise(process.nextTick)
      const message = screen.getByText(/Erreur 500/)
      expect(message).toBeTruthy()
    })
  })
})
