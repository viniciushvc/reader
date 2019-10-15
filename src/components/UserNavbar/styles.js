import styled from 'styled-components'
import { secondaryBackground } from '../../styles/theme'

export const Container = styled.nav`
  display: flex;
  align-items: center;
  background-color: ${secondaryBackground};
  padding: 10px 40px;
  width: 100%;

  .search {
    display: flex;
    align-items: center;
    width: 350px;
    padding: 5px;
    border-radius: 5px;
    background-color: #eee;
    margin-left: 30px;

    svg {
      margin-left: 15px;
    }

    input {
      width: 100%;
      background-color: transparent;
      font-weight: 700;
      border: none;
      margin: 8px 0;
      outline: none;
      padding-left: 15px;
      font-family: inherit;
      color: #333;
    }
  }

  @media (min-width: 960px) {
  }

  svg {
    margin-left: 20px;
    cursor: pointer;
  }
`
