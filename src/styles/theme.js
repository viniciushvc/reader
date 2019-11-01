import style from 'styled-theming'

/**
 * COLOR
 */
export const primaryBackground = style('mode', {
  light: '#eee',
  dark: '#23272A',
  sepia: '#f5eddd',
})

export const secondaryBackground = style('mode', {
  light: '#fff',
  dark: '#2C2F33',
  sepia: '#f5e5c6',
})

export const primaryColor = style('mode', {
  light: '#333',
  dark: '#eee',
})

export const secondaryColor = style('mode', {
  light: '#333',
  dark: '#eee',
})

export const primaryBorder = style('mode', {
  light: '#ddd',
  dark: '#444',
})

export const secondaryBorder = style('mode', {
  light: '#ddd',
  dark: '#444',
})

/**
 * FONT FAMILY
 */
export const defaultFont = style('font', {
  default: 'inherit',
  roboto: 'Roboto, sans-serif',
  montserrat: 'Montserrat, sans-serif',
  robotoSlab: 'Roboto Slab, serif',
  notoSerif: 'Noto Serif, serif',
})

/**
 * FONT SIZE
 */
export const fontSize = style('size', {
  small: '16px',
  medium: '20px',
  large: '24px',
})
