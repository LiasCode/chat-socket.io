import styled from 'styled-components';
import { useNewUserSocket } from '../hooks/useNewUserSocket';
import userIcon from '../assets/user-icon.png';

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
  background-color: transparent;
  color: #fff;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px;
  z-index: 10;
  overflow-x: hidden;
  overflow-y: auto;
  border-right : 1px solid #fff;

  h2 {
    width : 100%;
    font-size: 1.3rem;
    font-weight: 500;
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
  height: 60px;
  min-height: 60px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding : 10px; 
  border-top-right-radius : 10px;
  border-bottom-right-radius : 10px;
  margin-bottom: 5px;

  border: 2px solid ${(props) => {
    return (
      `rgb(${props.userColor.r},${props.userColor.g},${props.userColor.b})` ||
      'none'
    );
  }};

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

    border: 2px solid ${(props) => {
      return (
        `rgb(${props.userColor.r},${props.userColor.g},${props.userColor.b})` ||
        'none'
      );
    }};
  }

  span {
    text-transform: capitalize;
    font-size: 1rem;
    text-shadow: 2px 1px 5px #222;
    color: ${(props) => {
      return (
        `rgb(${props.userColor.r},${props.userColor.g},${props.userColor.b})` ||
        'none'
      );
    }};
  }
`;
