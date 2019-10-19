import styled from 'styled-components'

import { color, breakLine } from '../../styles/_variables'

export const Container = styled.div`
  padding: 50px;
  display: flex;

  @media (max-width: ${breakLine.md}) {
    flex-direction: column;
  }
`

export const Section = styled.section`
  padding: 50px 0 0 0;
  width: 100%;

  @media (min-width: ${breakLine.md}) {
    padding: 0 0 0 50px;
  }
`

export const Items = styled.div`
  width: 300px;

  @media (min-width: ${breakLine.md}) {
    border-right: 2px solid #ddd;
    padding-right: 50px;
  }

  @media (max-width: ${breakLine.md}) {
    display: flex;
  }

  a {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;
    vertical-align: middle;
    user-select: none;
    border-radius: 5px;
    padding: 1.375rem 1.75rem;
    cursor: pointer;
    font-family: inherit;
    text-decoration: none;
    background-color: ${color.dark};
    font-weight: 500;

    &.active {
      background-color: ${color.black};
    }

    &.red {
      background-color: ${color.red};
    }

    @media (min-width: ${breakLine.md}) {
      margin-bottom: 10px;
    }

    @media (max-width: ${breakLine.md}) {
      flex-direction: column-reverse;
      margin-right: 10px;
    }

    p {
      @media (max-width: 540px) {
        display: none;
      }
    }

    svg {
      @media (max-width: ${breakLine.md}) and (min-width: 540px) {
        margin-bottom: 10px;
      }
    }
  }
`
