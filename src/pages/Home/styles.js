import styled from 'styled-components'

export const Container = styled.div`
  padding: 50px 15px;
  max-width: 1366px;
  margin: auto;

  h1 {
  }

  h2 {
    margin-top: 20px;
    font-size: 20px;
    font-weight: 400;
  }

  a {
    padding: 1.375rem 1.75rem;
    text-decoration: none;
    display: inline-block;
    margin-top: 50px;
    font-weight: 700;
    background-color: #249440;
    color: #fff;
    text-align: center;
    user-select: none;
    border-radius: 2px;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      background-color: #2bb14c;
    }
  }
`
