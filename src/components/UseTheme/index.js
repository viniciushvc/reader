import React from 'react'
import { ThemeConsumer } from 'styled-components'
import { FiMoon, FiSun } from 'react-icons/fi'

import { Toggle } from './styles'

export default function UseTheme() {
  const dark = (
    <span>
      <FiSun size="20px" />
    </span>
  )

  const light = (
    <span>
      <FiMoon size="20px" />
    </span>
  )

  return (
    <ThemeConsumer>
      {theme => (
        <Toggle
          variant="primary"
          onClick={e =>
            theme.setTheme(
              theme.mode === 'dark'
                ? { ...theme, mode: 'light' }
                : { ...theme, mode: 'dark' },
            )
          }
        >
          {theme.mode === 'dark' ? dark : light}
        </Toggle>
      )}
    </ThemeConsumer>
  )
}
