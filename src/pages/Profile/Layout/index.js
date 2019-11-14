import React from 'react'
import { ThemeConsumer } from 'styled-components'

export default function Layout() {
  const colors = [
    { type: 'light', title: 'Claro' },
    { type: 'dark', title: 'Escuro' },
    { type: 'sepia', title: 'Sépia' },
  ]

  const fonts = [
    { type: 'inherit', title: 'Padrão' },
    { type: 'roboto', title: 'Roboto' },
    { type: 'merriweather', title: 'Merriweather' },
    { type: 'robotoSlab', title: 'Roboto Slab' },
    { type: 'notoSerif', title: 'Noto Serif' },
  ]

  const sizes = [
    { type: 'small', title: 'Pequeno' },
    { type: 'medium', title: 'Médio' },
    { type: 'large', title: 'Grande' },
  ]

  return (
    <ThemeConsumer>
      {theme => (
        <>
          <h1>Tema</h1>

          {colors.map(color => (
            <p
              key={color.type}
              onClick={() => theme.setTheme({ ...theme, mode: color.type })}
            >
              {color.title}
            </p>
          ))}

          <h1>Fonte</h1>

          {fonts.map(font => (
            <p
              key={font.type}
              onClick={() => theme.setTheme({ ...theme, font: font.type })}
            >
              {font.title}
            </p>
          ))}

          <h1>Interface</h1>
          {sizes.map(size => (
            <p
              key={size.type}
              onClick={() => theme.setTheme({ ...theme, size: size.type })}
            >
              {size.title}
            </p>
          ))}
        </>
      )}
    </ThemeConsumer>
  )
}
