import styled from "styled-components";

export const ButtonStyle = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 50px;
  padding: 0 32px;
  border: 0;
  border-radius: 8px;

  font-weight: 500;
  background: #835afd;
  color: #fff;
  cursor: pointer;
  transition: filter 0.2s;

  img {
    margin-right: 8px;
  }

  &.outlined {
    background: #fff;
    border: 1px solid #835afd;
    color: #835afd;
  }

  &:not(:disabled):hover {
    filter: brightness(0.9);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
