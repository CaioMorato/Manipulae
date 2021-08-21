import styled from 'styled-components';

export const PaginationUL = styled.ul`
  border-radius: 9px;
  display: flex;
  list-style-type: none;
  margin: auto;
  padding: 2%;
  width: max-content;

  li + li {
    color: blue;
    margin-left: 1rem;
  }

  .current-index {
    background: none;
    border: none;
    font-size: 25px;
    font-weight: bold;
    text-decoration: underline;
  }
`;

export const PaginationLI = styled.li`
  button {
    background-color: rgb(255, 255, 255, 0);
    border: none;
    font-size: 20px;
    outline: none;
  }
`;
