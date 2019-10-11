import styled from 'styled-components'

import { background, color } from '../../styles/theme'

export const Btn = styled.button`
  display: inline-block;
  font-weight: 400;
  background-color: ${color};
  color: ${background};
  text-align: center;
  vertical-align: middle;
  user-select: none;
  border-radius: 5px;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  cursor: pointer;
  font-family: inherit;
  transition: 0.3s;

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

  &.round {
    border-radius: 30px;
  }

  &.blue {
    background-color: #007bff;
  }

  &.grey {
    background-color: #6c757d;
  }

  &.green {
    background-color: #28a745;
  }

  &.red {
    background-color: #dc3545;
  }

  &.yellow {
    background-color: #ffc107;
    color: #333;
  }

  &.light {
    background-color: #f8f8f8;
  }

  &.dark {
    background-color: #343a40;
  }
`
