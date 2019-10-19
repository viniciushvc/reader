import styled from 'styled-components'

export const InputField = styled.input`
  width: 100%;
  height: 3rem;
  font-size: 0.9rem;
  padding: 0.9rem 0.75rem;
  border-radius: 4px;
  margin-bottom: 1rem;
  background-color: #fff;
  border: 1px solid #ddd;
  transition: 0.3s;
  color: #333;
  &::placeholder {
    color: #999;
  }
  &:focus {
    outline: 0;
    box-shadow: 0 0 0 0.1rem rgba(0, 123, 255, 0.25);
  }
`

export const Label = styled.label`
  font-weight: 500;
  margin-bottom: 10px;
  display: block;
`
