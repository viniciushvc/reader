import styled from 'styled-components'

export const Container = styled.div`
  max-width: 1366px;
  margin: auto;
  padding: 50px;
`

export const Tab = styled.div`
  display: flex;
`

export const Items = styled.div`
  position: sticky;
  top: 0px;
  width: 300px;
  padding-right: 50px;

  @media (min-width: 960px) {
    border-right: 2px solid #ddd;
  }

  a {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 700;
    background-color: #eee;
    color: #fff;
    vertical-align: middle;
    user-select: none;
    border-radius: 5px;
    border: 1px solid transparent;
    padding: 1.375rem 1.75rem;
    cursor: pointer;
    font-family: inherit;
    transition: 0.3s;
    text-decoration: none;
    margin-bottom: 10px;

    @media (max-width: 960px) {
      flex-direction: column-reverse;
    }

    p {
      @media (max-width: 540px) {
        display: none;
      }
    }

    svg {
      @media (max-width: 960px) and (min-width: 540px) {
        margin-bottom: 10px;
      }
    }

    &.green {
      background-color: #28a745;
    }

    &.red {
      background-color: #dc3545;
    }

    &.dark {
      background-color: #343a40;
    }
  }
`

export const Content = styled.div`
  width: 100%;
  padding-left: 50px;
`

export const Title = styled.h1`
  font-size: 25px;
`

export const Label = styled.label`
  margin-bottom: 10px;
  font-weight: 500;
  display: block;
`
