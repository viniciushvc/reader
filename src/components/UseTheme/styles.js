import styled from 'styled-components'
import { color, background } from '../../styles/theme'

export const Toggle = styled.div`
  background-color: ${color};
  position: fixed;
  border-radius: 50px;
  right: 20px;
  bottom: 20px;
  height: 50px;
  width: 50px;
  text-align: center;
  user-select: none;
  cursor: pointer;

  span {
    position: relative;
    top: calc(50% - 10px);
    color: ${background};
  }
`
