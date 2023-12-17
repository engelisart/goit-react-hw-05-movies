import styled from 'styled-components';

export const SearchForm = styled.form`
  margin: 10px;
  width: 250px;
  display: flex;
  border: 0.051em solid #8b878784;
  & input {
    width: 200px;
    height: 25px;
    border: 0 solid grey;
    outline: none;
    text-align: center;
  }
  & input:hover {
    border-color: #75adde;
    background-color: #e4edf5;
  }

  & button {
    height: 25px;
    width: 50px;
    border: 0 solid grey;
    background-color: #233b47;
    color: white;
    font-size: 11px;
  }
`;
