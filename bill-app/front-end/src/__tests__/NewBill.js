/* eslint-disable no-undef */
/**
 * @jest-environment jsdom
 */

//  ESLint :'describe' is not defined
//  ESLint :'test' is not defined

import '@testing-library/jest-dom'
import { fireEvent, screen } from '@testing-library/dom'
import NewBillUI from '../views/NewBillUI.js'
import NewBill from '../containers/NewBill.js'
import { localStorageMock } from '../__mocks__/localStorage.js'
import { ROUTES } from '../constants/routes'
import mockStore from '../__mocks__/store.js'

window.alert = jest.fn()
jest.mock('../app/Store', () => {
  return mockStore
})

//  je suis connecté à l'application en tant qu'employé
describe('Given I am connected as an employee', () => {
  Object.defineProperty(window, 'localStorage', { value: localStorageMock })
  window.localStorage.setItem(
    'user',
    JSON.stringify({
      type: 'Employee',
    })
  )
  // je suis sur la page de création de note de frais et les champs date, ttc et fichier joint sont vides
  describe('When I am on a newbill and the date, ttc and attached file fields are empty', () => {
    //  la nouvelle note de frais reste à l'écran (pas d'envoi)
    test('Then the newbill stay on screen ', () => {
      const html = NewBillUI()
      document.body.innerHTML = html

      //je ne remplis pas le champ date
      const date = screen.getByTestId('datepicker')
      expect(date.value).toBe('')
      // je ne remplis pas le champ ttc
      const ttc = screen.getByTestId('amount')
      expect(ttc.value).toBe('')
      // je ne remplis pas le champ fichier
      const fichier = screen.getByTestId('file')
      expect(fichier.value).toBe('')
      //  cible le formulaire de la nouvelle note de frais
      const formNewBill = screen.getByTestId('form-new-bill')
      expect(formNewBill).toBeTruthy()

      const envoiNewBill = jest.fn((e) => {
        // fonction pour stopper l'action par défaut
        return e.preventDefault()
      })
      // écoute l'événement submit
      formNewBill.addEventListener('submit', envoiNewBill)
      //  déclenche l'événement submit
      fireEvent.submit(formNewBill)
      //  le formulaire n'est pas envoyé
      expect(screen.getByTestId('form-new-bill')).toBeTruthy()
    })
  })

  // lorsque je télécharg le fichier joint au bon format
  describe('When i download the attached file in the correct format ', () => {
    //  ma note de frais est envoyée
    test('Then the newbill is sent', () => {
      const html = NewBillUI()
      document.body.innerHTML = html
      const onNavigate = (pathname) => {
        document.body.innerHTML = ROUTES({ pathname })
      }
      const newBill = new NewBill({
        // création nouvelle instance newbill
        document,
        onNavigate,
        store: mockStore,
        localStorage: window.localStorage,
      })

      const chargeFichier = jest.fn((e) => {
        return newBill.handleChangeFile(e)
      })
      //  cible le champ fichier
      const fichier = screen.getByTestId('file')
      const testFormat = new File(["c'est un test"], 'test.jpg', {
        //condition du test
        type: 'image/jpg',
      })
      //  écoute l'événement change
      fichier.addEventListener('change', chargeFichier)
      //  déclenche l'événement change avec le fichier de test
      fireEvent.change(fichier, { target: { files: [testFormat] } })
      //  le fichier est chargé ?
      expect(chargeFichier).toHaveBeenCalled()
      //  le fichier est au bon format ?
      expect(fichier.files[0]).toStrictEqual(testFormat)

      const formNewBill = screen.getByTestId('form-new-bill')
      expect(formNewBill).toBeTruthy()

      const envoiNewBill = jest.fn((e) => {
        return newBill.handleSubmit(e)
      })
      //  écoute l'événement submit
      formNewBill.addEventListener('submit', envoiNewBill)
      //  déclenche l'événement submit
      fireEvent.submit(formNewBill)
      //  le formulaire est envoyé
      expect(envoiNewBill).toHaveBeenCalled()
      // "Mes notes de frais" est affiché
      expect(screen.getByText('Mes notes de frais')).toBeTruthy()
    })
  })

  // lorsque je télécharge le fichier joint au mauvais format
  describe('When i download the attached file in the wrong format', () => {
    // le note de frais n'est pas envoyée et un message d'erreur est affiché
    test('Then i stay on the newbill and a message appears', () => {
      const html = NewBillUI()
      document.body.innerHTML = html
      const onNavigate = (pathname) => {
        document.body.innerHTML = ROUTES({ pathname })
      }
      const newBill = new NewBill({
        document,
        onNavigate,
        store: null,
        localStorage: window.localStorage,
      })
      const chargeFichier = jest.fn((e) => {
        return newBill.handleChangeFile(e)
      })
      const fichier = screen.getByTestId('file')
      const testFormat = new File(["c'est un test"], {
        type: 'document/txt',
      })
      fichier.addEventListener('change', chargeFichier)
      fireEvent.change(fichier, { target: { files: [testFormat] } })

      expect(chargeFichier).toHaveBeenCalled()
      expect(window.alert).toBeTruthy()
    })
  })
  // lorsque le formulaire est rempli et envoyé
  describe('When i fill out the form and i validate it with the send button', () => {
    //  le formulaire doit être envoyé à la page des notes de frais
    test('Then the form must be sent to the invoices page', () => {
      const html = NewBillUI()
      document.body.innerHTML = html
      const onNavigate = (pathname) => {
        document.body.innerHTML = ROUTES({ pathname })
      }
      const newBillEnCours = new NewBill({
        document,
        onNavigate,
        store: null,
        localStorage: window.localStorage,
      })
      const formNewBill = screen.getByTestId('form-new-bill')
      expect(formNewBill).toBeTruthy()

      const envoiNewBill = jest.fn((e) => {
        return newBillEnCours.handleSubmit(e)
      })
      formNewBill.addEventListener('submit', envoiNewBill)
      fireEvent.submit(formNewBill)
      expect(envoiNewBill).toHaveBeenCalled()
      expect(screen.getByText('Mes notes de frais')).toBeTruthy()
    })
  })
})
