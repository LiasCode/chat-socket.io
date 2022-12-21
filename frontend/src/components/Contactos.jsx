import styled from "styled-components";
import { useNewUserSocket } from "../hooks/useNewUserSocket";
import userIcon from "../assets/user-icon.png";

export function Contactos() {
  const { users } = useNewUserSocket();

  return (
    <ContactosContainer id="contactos">
      <h2>Usuarios Conectados</h2>

      {users.map((user) => {
        return (
          <ContactoCard
            className="contactos-person"
            key={user.id}
            userColor={user.color}
          >
            <img src={userIcon} />
            <span> {user.name} </span>
          </ContactoCard>
        );
      })}
    </ContactosContainer>
  );
}

const ContactosContainer = styled.div`
  width: 30%;
  max-width: 350px;
  min-height: 100%;
  height: 100%;
  background-color: #ada9bb;
  box-shadow: 2px 0px 10px #000;
  color: #000;

  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  z-index: 10;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  overflow-x: hidden;
  overflow-y: auto;

  h2 {
    font-size: 1.2rem;
    font-weight: 600;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #fff;
    text-shadow: 2px 1px 5px #ada9bb;
    margin-bottom: 15px;
  }

  @media screen and (max-width: 700px) {
    display: none;
  }
`;
const ContactoCard = styled.div`
  width: 100%;
  height: 50px;
  min-height: 50px;
  display: flex;
  align-items: center;
  justify-content: flex-start;


  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #fff;
    outline: none;
    border: none;
    margin: 0 15px 0 0;
    padding: 5px;
    box-shadow: 0px 0px 5px #ccc;
  }

  span {
    text-transform: capitalize;
    font-size: 1rem;
    text-shadow: 2px 1px 5px #222;
    color: ${(props) => {
    return (
      `rgb(${props.userColor.r},${props.userColor.g},${props.userColor.b})` ||
      "none"
    );
  }};
  }
`;
