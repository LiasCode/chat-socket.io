import { Link } from "react-router-dom";
import styled from "styled-components";

export default function HomePage() {
  return (
    <HomeContainer>
      <Link to="/chat"> Ir al Chat </Link>
    </HomeContainer>
  );
}

const HomeContainer = styled.div`
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

  a {
    width: max-content;
    padding : 20px;
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
  }
`;
