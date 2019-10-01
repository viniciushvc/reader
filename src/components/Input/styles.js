import styled from 'styled-components'

export const InputField = styled.input`
  width: 100%;
  height: 3rem;
  font-size: 0.9rem;
  padding: 0.9rem 0.75rem;
  border-radius: 4px;
  margin-bottom: 1rem;
  background-color: #fafafa;
  border: 1px solid #ddd;
  transition: 0.3s;
  &::placeholder {
    color: #999;
  }
  &:focus {
    background-color: #fff;
    outline: 0;
    box-shadow: 0 0 0 0.1rem rgba(0, 123, 255, 0.25);
  }
`
