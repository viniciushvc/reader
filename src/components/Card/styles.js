import styled from 'styled-components'

export const News = styled.div`
  display: flex;
  flex-wrap: wrap;

  a {
    border-radius: 2px;
    background-color: #fff;
    display: inline-block;
    height: 210px;
    margin: 0 1rem 1rem 0;
    position: relative;
    width: 210px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    padding: 20px;
    transition: 0.3s;
    cursor: pointer;
    text-decoration: none;
    color: #333;

    &:hover {
      box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
        0 10px 10px rgba(0, 0, 0, 0.22);
    }

    h1 {
      font-size: 20px;
    }
  }
`
