// testing with context and a custom render method
// http://localhost:3000/easy-button

import * as React from 'react'
import {render as rtlRender, screen} from '@testing-library/react'
import {ThemeProvider} from '../../components/theme'
import EasyButton from '../../components/easy-button'

// const renderWithTheme = (ui, {initialTheme = 'light', ...options} = {}) => {
//   const Wrapper = ({ children }) => (
//     <ThemeProvider initialTheme={initialTheme}>{children}</ThemeProvider>
//   )

//   return rtlRender(ui, { wrapper: Wrapper, ...options})
// }


test('renders with the light styles for the light theme', () => {
  renderWithTheme(<EasyButton>Easy</EasyButton>)

  const button = screen.getByRole('button', {name: /easy/i})
  expect(button).toHaveStyle(`
    background-color: white;
    color: black;
  `)
})


test('renders with the light styles for the dark theme', () => {
  renderWithTheme(<EasyButton>Easy</EasyButton>, { initialTheme: 'dark' })
  const button = screen.getByRole('button', {name: /easy/i})
  expect(button).toHaveStyle(`
    background-color: black;
    color: white;
  `)
})

/* eslint no-unused-vars:0 */
