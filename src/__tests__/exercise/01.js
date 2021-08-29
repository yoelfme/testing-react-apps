// simple test with ReactDOM
// http://localhost:3000/counter

import * as React from 'react'
import ReactDOM from 'react-dom'
import Counter from '../../components/counter'

beforeEach(() => {
  document.body.innerHTML = ''
})

test('counter increments and decrements when the buttons are clicked', () => {
  // 🐨 create a div to render your component to (💰 document.createElement)
  const div = document.createElement('div')
  
  document.body.append(div)

  ReactDOM.render(<Counter />, div)
  
  const [decrement, increment] = div.querySelectorAll('button')
  const message = div.firstChild.querySelector('div')

  expect(message.textContent).toBe('Current count: 0')
  
  const incrementClick = new MouseEvent('click', {
    bubbles: true,
    cancelable: true,
    button: 0 
  })
  
  increment.dispatchEvent(incrementClick)
  expect(message.textContent).toBe('Current count: 1')

  const decrementClick = new MouseEvent('click', {
    bubbles: true,
    cancelable: true,
    button: 0 
  })

  decrement.dispatchEvent(decrementClick)
  expect(message.textContent).toBe('Current count: 0')
})

/* eslint no-unused-vars:0 */
