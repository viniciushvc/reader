import styled from 'styled-components'

import { primaryBackground } from '../../styles/theme'
import { color } from '../../styles/_variables'

export const Btn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 400;
  background-color: ${primaryBackground};
  color: #fff;
  vertical-align: middle;
  user-select: none;
  border-radius: 2px;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  cursor: pointer;
  font-family: inherit;
  transition: 0.3s;

  svg {
    margin-left: 10px;
  }

  &:hover {
    box-shadow: inset 0 0 0 99999px rgba(255, 255, 255, 0.1);
  }

  &.block {
    display: block;
    width: 100%;
  }

  &.lg {
    padding: 0.7rem 1rem;
    font-size: 1rem;
    line-height: 1.5;
  }

  &.bold {
    font-weight: 700;
  }

  &.medium {
    font-weight: 500;
  }

  &.round {
    border-radius: 30px;
  }

  &.blue {
    background-color: ${color.blue};
  }

  &.grey {
    background-color: ${color.grey};
  }

  &.green {
    background-color: ${color.green};
  }

  &.red {
    background-color: ${color.red};
  }

  &.yellow {
    background-color: ${color.yellow};
    color: ${color.dark};
  }

  &.light {
    background-color: ${color.light};
  }

  &.dark {
    background-color: ${color.dark};
  }
`
