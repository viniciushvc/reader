import { createGlobalStyle } from 'styled-components'

import { primaryBackground, primaryColor } from './theme'

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

html,body
 {
  background-color: ${primaryBackground};
  color: ${primaryColor};
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  height: 100%;
}

#root {
  height: 100%;
}

.selected-route {
  color: #28a745!important;
}

.selected-bottom-navigation {
  border-bottom: 1px solid #28a745
}
`

export default GlobalStyles
