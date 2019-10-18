import styled from 'styled-components'

export const Container = styled.div`
  padding: 50px;
`

export const Tab = styled.div`
  display: flex;
`

export const Content = styled.div`
  width: 100%;
  padding-left: 50px;
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
  }
`
