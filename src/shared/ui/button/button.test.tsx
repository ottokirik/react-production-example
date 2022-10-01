import { render, screen } from '@testing-library/react'
import { Button, ThemeButton } from './button'

describe('Button', () => {
  test('button with text "create"', () => {
    render(<Button>create</Button>)

    const button = screen.getByRole('button', { name: /create/i })
    expect(button).toBeInTheDocument()
  })

  test('button has className "clear"', () => {
    render(<Button theme={ThemeButton.CLEAR}>create</Button>)

    const button = screen.getByRole('button', { name: /create/i })
    expect(button).toHaveClass(ThemeButton.CLEAR)
  })
})
