import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function Error404Page() {
  return (
    <ErrorContainer>
      <h1> 404 Not Found </h1>
      <Link to="/"> Volver a la página inicial</Link>
    </ErrorContainer>
  );
}

const ErrorContainer = styled.div`
  width: 100%;
  height: auto;
  min-height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  background-color: #000;
  display: flex;
  flex-direction: column;
  position: relative;
  color: #fff;
  align-items: center;
  justify-content: center;

  h1 {
    font-size : 2rem;
    font-weigth : bold;
    color : #BB2222;
  }

  a {
    width: 300px;
    height: 100px;
    color: #fff;
    border: 1px solid #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 10px;
    border-radius: 10px;
    text-decoration: none;
    font-size: 1.2rem;
    cursor : pointer;
    transition : all 0.5s;

    &:hover {
      width: 350px;
      height: 150px;
      border : 1px solid #ebd150;
      color : #ebd150;
    }
  }
`;
