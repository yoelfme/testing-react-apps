// form testing
// http://localhost:3000/login

import * as React from 'react'
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Login from '../../components/login'
import faker from 'faker'

const buildLoginForm = (defaultValues) => {
  return {
    username: faker.internet.userName(),
    password: faker.internet.password(),
    ...defaultValues
  }
}

test('submitting the form calls onSubmit with username and password', () => {
  const handleSubmit = jest.fn()

  render(<Login onSubmit={handleSubmit} />)

  const {username, password} = buildLoginForm({ password: 'different-password'})

  userEvent.type(screen.getByLabelText(/username/i), username)
  userEvent.type(screen.getByLabelText(/password/i), password)
  userEvent.click(screen.getByRole('button', { name: /submit/i}))

  expect(handleSubmit).toHaveBeenCalledWith({ username, password })
  expect(handleSubmit).toHaveBeenCalledTimes(1)
  
  screen.debug()
})

/*
eslint
  no-unused-vars: "off",
*/
