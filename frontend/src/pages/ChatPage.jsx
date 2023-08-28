import styled from "styled-components";
import { useEffect, useState } from "react";
import { Contactos } from "../components/Contactos";
import { ChatBox } from "../components/ChatBox";
import { socket } from "../services/socket";
import { Modal } from "../components/Modal";

export default function Chat() {
  const [userName, setUserName] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(true);

  function handleSubmit(e) {
    e.preventDefault();

    if (!userName || userName === "" || userName.length === 0) {
      return;
    }
    socket.emit("join", {
      name: userName,
    });
    setIsModalOpen(false);
  }

  useEffect(() => {
    socket.on("join fail", () => window.location.reload());
  }, []);

  return (
    <>
      {isModalOpen ? (
        <Modal>
          <NameRegisterBox>
            <h2>Regístrate</h2>

            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Introduzca su nombre"
                value={userName}
                onChange={(e) => setUserName(e.target.value || "")}
                autoFocus={true}
              />
              <button type="submit">Aceptar</button>
            </form>
          </NameRegisterBox>
        </Modal>
      ) : (
        <ChatAppGeneralContainer>
          <Contactos />
          <ChatBox userName={userName} />
        </ChatAppGeneralContainer>
      )}
    </>
  );
}

const NameRegisterBox = styled.div`
  width: 40%;
  min-width: max-content;
  height: 250px;
  background-color: #fff;
  border-radius: 10px;
  border: 1px solid #ccc;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4px;
  box-shadow: 2px 2px 2px #ccc;

  h2 {
    width: 100%;
    height: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 0 50px 0;
    font-size: 2rem;
    font-weight: 400;
    color: #000;
    text-shadow: 2px 1px 5px #fff;
  }

  form {
    width: 100%;
    height: max-content;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;

    input {
      width: 75%;
      height: 60px;
      border: 1px solid #ccc;
      padding-left: 10px;
      border-radius: 10px;
      transition: transform 0.3s;
      box-shadow: 2px 2px 5px #ccc;

      &:focus {
        transform: scale(1.02);
        border: 1px solid #ebd150;
      }
    }
    button {
      width: auto;
      min-width: max-content;
      height: 60px;
      border: none;
      border-radius: 10px;
      background-color: transparent;
      padding: 4px;
      cursor: pointer;
      transition: transform 0.3s;
      color: green;
      &:hover {
        transform: scale(1.02);
      }
    }
  }
`;

const ChatAppGeneralContainer = styled.div`
  width: 100%;
  height: auto;
  min-height: 100%;
  display: flex;
  flex-direction: row;
  position: relative;
`;
