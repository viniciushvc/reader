import styled from 'styled-components'
import { secondaryBackground, primaryColor } from '../../styles/theme'

export const Container = styled.div`
  border-radius: 2px;
  background-color: ${secondaryBackground};
  display: inline-block;
  height: 150px;
  margin: 0 0.5rem 1rem 0.5rem;
  position: relative;
  max-width: 450px;
  flex: 1 1 260px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: 0.3s;
  cursor: pointer;
  text-decoration: none;
  color: ${primaryColor};

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }

  h1 {
    font-size: 16px;
    padding: 10px 20px;
  }

  .actions {
    position: absolute;
    bottom: 10px;
    right: 15px;

    svg:hover {
      color: red;
    }
  }
`
