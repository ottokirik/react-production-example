import { render, screen } from '@testing-library/react'
import { Button, ButtonTheme } from './button'

describe('Button', () => {
  test('button with text "create"', () => {
    render(<Button>create</Button>)

    const button = screen.getByRole('button', { name: /create/i })
    expect(button).toBeInTheDocument()
  })

  test('button has className "clear"', () => {
    render(<Button theme={ButtonTheme.CLEAR}>create</Button>)

    const button = screen.getByRole('button', { name: /create/i })
    expect(button).toHaveClass(ButtonTheme.CLEAR)
  })
})
