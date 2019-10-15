import styled from 'styled-components'
import {
  secondaryBackground,
  primaryBackground,
  primaryBorder,
  primaryColor,
} from '../../styles/theme'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 72px);
  background-color: ${primaryBackground};
`

export const Form = styled.form`
  width: 400px;
  background: ${secondaryBackground};
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  hr {
    margin: 20px 0;
    border: none;
    border-bottom: 1px solid ${primaryBorder};
    width: 100%;
  }

  a {
    font-size: 16px;
    font-weight: bold;
    color: ${primaryColor};
    text-decoration: none;
  }
`
