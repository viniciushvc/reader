import styled from 'styled-components'

export const Box = styled.div`
  border-radius: 2px;
  background-color: #fff;
  display: inline-block;
  height: 240px;
  margin: 1rem;
  position: relative;
  width: 240px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  padding: 20px;
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }

  h1 {
    font-size: 20px;
  }
`
