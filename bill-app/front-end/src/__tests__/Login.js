/* eslint-disable no-undef */
/**
 * @jest-environment jsdom
 */

//  ESLint :'describe' is not defined
//  ESLint :'test' is not defined
//  ESLint :'expect' is not defined
//  ESLint :'jest' is not defined

import LoginUI from '../views/LoginUI'
import Login from '../containers/Login.js'
import { ROUTES } from '../constants/routes'
import { fireEvent, screen } from '@testing-library/dom'

// je suis un utilisateur sur la page de connexion
describe('Given that I am a user on login page', () => {
  // je ne remplis pas les champs requis et je clique sur le bouton de connexion
  describe('When I do not fill fields and I click on employee button Login In', () => {
    // je dois rester sur la page de connexion
    test('Then It should renders Login page', () => {
      document.body.innerHTML = LoginUI()
      const inputEmailUser = screen.getByTestId('employee-email-input')
      expect(inputEmailUser.value).toBe('')

      const inputPasswordUser = screen.getByTestId('employee-password-input')
      expect(inputPasswordUser.value).toBe('')

      const form = screen.getByTestId('form-employee')

      const handleSubmit = jest.fn((e) => {
        return e.preventDefault()
      })

      form.addEventListener('submit', handleSubmit)
      fireEvent.submit(form)
      expect(screen.getByTestId('form-employee')).toBeTruthy()
    })
  })

  // je remplis les champs requis avec des données invalides et je clique sur le bouton de connexion en tant qu'employé
  describe('When I do fill fields in incorrect format and I click on employee button Login In', () => {
    // je dois rester sur la page de connexion
    test('Then It should renders Login page', () => {
      document.body.innerHTML = LoginUI()
      const inputEmailUser = screen.getByTestId('employee-email-input')
      fireEvent.change(inputEmailUser, { target: { value: 'pasunemail' } })
      expect(inputEmailUser.value).toBe('pasunemail')

      const inputPasswordUser = screen.getByTestId('employee-password-input')
      fireEvent.change(inputPasswordUser, { target: { value: 'azerty' } })
      expect(inputPasswordUser.value).toBe('azerty')

      const form = screen.getByTestId('form-employee')
      const handleSubmit = jest.fn((e) => {
        return e.preventDefault()
      })

      form.addEventListener('submit', handleSubmit)
      fireEvent.submit(form)
      expect(screen.getByTestId('form-employee')).toBeTruthy()
    })
  })
  // je remplis les champs requis avec des données valides et je clique sur le bouton de connexion en tant qu'employé
  describe('When I do fill fields in correct format and I click on employee button Login In', () => {
    //je dois etre identifié en tant qu'employé
    test('Then I should be identified as an Employee in app', () => {
      document.body.innerHTML = LoginUI()
      const inputData = {
        email: 'johndoe@email.com',
        password: 'azerty',
      }

      const inputEmailUser = screen.getByTestId('employee-email-input')
      fireEvent.change(inputEmailUser, { target: { value: inputData.email } })
      expect(inputEmailUser.value).toBe(inputData.email)

      const inputPasswordUser = screen.getByTestId('employee-password-input')
      fireEvent.change(inputPasswordUser, {
        target: { value: inputData.password },
      })
      expect(inputPasswordUser.value).toBe(inputData.password)

      const form = screen.getByTestId('form-employee')

      //  localStorage doit être rempli avec des données de formulaire
      Object.defineProperty(window, 'localStorage', {
        value: {
          getItem: jest.fn(() => {
            return null
          }),
          setItem: jest.fn(() => {
            return null
          }),
        },
        writable: true,
      })

      // simulation de la navigation
      const onNavigate = (pathname) => {
        document.body.innerHTML = ROUTES({ pathname })
      }

      let PREVIOUS_LOCATION = ''

      const store = jest.fn()

      const login = new Login({
        document,
        localStorage: window.localStorage,
        onNavigate,
        PREVIOUS_LOCATION,
        store,
      })

      const handleSubmit = jest.fn(login.handleSubmitEmployee)
      login.login = jest.fn().mockResolvedValue({})
      form.addEventListener('submit', handleSubmit)
      fireEvent.submit(form)
      expect(handleSubmit).toHaveBeenCalled()
      expect(window.localStorage.setItem).toHaveBeenCalled()
      expect(window.localStorage.setItem).toHaveBeenCalledWith(
        'user',
        JSON.stringify({
          type: 'Employee',
          email: inputData.email,
          password: inputData.password,
          status: 'connected',
        })
      )
    })
    // doit afficher la page des factures
    test('It should renders Bills page', () => {
      expect(screen.getAllByText('Mes notes de frais')).toBeTruthy()
    })
  })
})
// je suis un utilisateur sur la page de connexion
describe('Given that I am a user on login page', () => {
  //je ne remplis pas les champs et je clique sur le bouton admin "se connecter"
  describe('When I do not fill fields and I click on admin button Login In', () => {
    // je dois rester sur la page de connexion
    test('Then It should renders Login page', () => {
      document.body.innerHTML = LoginUI()

      const inputEmailUser = screen.getByTestId('admin-email-input')
      expect(inputEmailUser.value).toBe('')

      const inputPasswordUser = screen.getByTestId('admin-password-input')
      expect(inputPasswordUser.value).toBe('')

      const form = screen.getByTestId('form-admin')
      const handleSubmit = jest.fn((e) => {
        return e.preventDefault()
      })

      form.addEventListener('submit', handleSubmit)
      fireEvent.submit(form)
      expect(screen.getByTestId('form-admin')).toBeTruthy()
    })
  })

  //je remplis les champs dans des données invalides et je clique sur le bouton admin "se connecter"
  describe('When I do fill fields in incorrect format and I click on admin button Login In', () => {
    // je dois rester sur la page de connexion
    test('Then it should renders Login page', () => {
      document.body.innerHTML = LoginUI()

      const inputEmailUser = screen.getByTestId('admin-email-input')
      fireEvent.change(inputEmailUser, { target: { value: 'pasunemail' } })
      expect(inputEmailUser.value).toBe('pasunemail')

      const inputPasswordUser = screen.getByTestId('admin-password-input')
      fireEvent.change(inputPasswordUser, { target: { value: 'azerty' } })
      expect(inputPasswordUser.value).toBe('azerty')

      const form = screen.getByTestId('form-admin')
      const handleSubmit = jest.fn((e) => {
        return e.preventDefault()
      })

      form.addEventListener('submit', handleSubmit)
      fireEvent.submit(form)
      expect(screen.getByTestId('form-admin')).toBeTruthy()
    })
  })
  //je remplis les champs dans des données valides et je clique sur le bouton admin "se connecter"
  describe('When I do fill fields in correct format and I click on admin button Login In', () => {
    //je dois etre identifié en tant qu'admin
    test('Then I should be identified as an HR admin in app', () => {
      document.body.innerHTML = LoginUI()
      const inputData = {
        type: 'Admin',
        email: 'johndoe@email.com',
        password: 'azerty',
        status: 'connected',
      }

      const inputEmailUser = screen.getByTestId('admin-email-input')
      fireEvent.change(inputEmailUser, { target: { value: inputData.email } })
      expect(inputEmailUser.value).toBe(inputData.email)

      const inputPasswordUser = screen.getByTestId('admin-password-input')
      fireEvent.change(inputPasswordUser, {
        target: { value: inputData.password },
      })
      expect(inputPasswordUser.value).toBe(inputData.password)

      const form = screen.getByTestId('form-admin')

      //  localStorage doit être rempli avec des données de formulaire
      Object.defineProperty(window, 'localStorage', {
        value: {
          getItem: jest.fn(() => {
            return null
          }),
          setItem: jest.fn(() => {
            return null
          }),
        },
        writable: true,
      })

      // simulation de la navigation
      const onNavigate = (pathname) => {
        document.body.innerHTML = ROUTES({ pathname })
      }

      let PREVIOUS_LOCATION = ''

      const store = jest.fn()

      const login = new Login({
        document,
        localStorage: window.localStorage,
        onNavigate,
        PREVIOUS_LOCATION,
        store,
      })

      const handleSubmit = jest.fn(login.handleSubmitAdmin)
      login.login = jest.fn().mockResolvedValue({})
      form.addEventListener('submit', handleSubmit)
      fireEvent.submit(form)
      expect(handleSubmit).toHaveBeenCalled()
      expect(window.localStorage.setItem).toHaveBeenCalled()
      expect(window.localStorage.setItem).toHaveBeenCalledWith(
        'user',
        JSON.stringify({
          type: 'Admin',
          email: inputData.email,
          password: inputData.password,
          status: 'connected',
        })
      )
    })

    test('It should renders HR dashboard page', () => {
      // doit afficher la page du tableau de bord admin
      expect(screen.queryByText('Validations')).toBeTruthy()
    })
  })
})
