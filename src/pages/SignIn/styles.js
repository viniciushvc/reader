import styled from 'styled-components'
import { card, background, border, color } from '../../styles/theme'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 72px);
  background-color: ${background};
`

export const Form = styled.form`
  width: 400px;
  background: ${card};
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  hr {
    margin: 20px 0;
    border: none;
    border-bottom: 1px solid ${border};
    width: 100%;
  }
  a {
    font-size: 16;
    font-weight: bold;
    color: ${color};
    text-decoration: none;
  }
`
