import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`

html {
  box-sizing: border-box;
  -ms-overflow-style: scrollbar;
}

*,
*::before,
*::after {
  box-sizing: inherit;
  padding: 0;
  margin: 0;
  outline: 0;
}

body,
html {
  background-color: #eee;
  color: #333;
  font-family: 'Roboto Slab', sans-serif;
  height: 100%;
  width: 100%;
}

.container {
  max-width: 1366px !important;
  margin: auto;
}
`

export default GlobalStyles
