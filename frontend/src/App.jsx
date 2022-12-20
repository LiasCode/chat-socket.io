import { Contactos } from "./components/Contactos";
import { Chat } from "./components/Chat";
import styled from "styled-components";

export default function App() {
  return (
    <>
      <ChatAppGeneralContainer>
        <Contactos />
        <Chat />
      </ChatAppGeneralContainer>
    </>
  );
}

const ChatAppGeneralContainer = styled.div`
  width: 100%;
  height: auto;
  min-height: 100%;
  display: flex;
  flex-direction: row;
  position: relative;
`;
