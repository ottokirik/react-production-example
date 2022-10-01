import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderWithTranslation } from 'shared/lib/tests/render-with-translation'
import { SideBar } from './side-bar'

describe('SideBar', () => {
  test('side bar render', () => {
    renderWithTranslation(<SideBar />)
    const sideBar = screen.getByTestId('side-bar')
    expect(sideBar).toBeInTheDocument()
  })

  test('toggle side bar', async () => {
    renderWithTranslation(<SideBar />)
    const user = userEvent.setup()
    const toggleButton = screen.getByTestId('toggle-side-bar')
    const sideBar = screen.getByTestId('side-bar')

    await user.click(toggleButton)
    expect(sideBar).not.toHaveClass('opened')

    await user.click(toggleButton)
    expect(sideBar).toHaveClass('opened')
  })
})
