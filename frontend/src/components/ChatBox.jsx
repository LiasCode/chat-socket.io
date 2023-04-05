import { createRef, useEffect, useState } from 'react';
import { socket } from '../services/socket';
import styled from 'styled-components';

export function ChatBox() {
  const [messagges, setMessagges] = useState([]);
  const [msgText, setMsgText] = useState('');
  const lastElementRef = createRef();

  useEffect(() => {
    socket.on('chat new msg all', (msgData) => {
      setMessagges((prevState) =>
        prevState.concat([
          {
            msg: msgData.msg,
            name: msgData.name,
            id: msgData.id,
            msgId: msgData.msgId,
            color: msgData.color,
          },
        ])
      );
    });
  }, []);

  useEffect(() => {
    lastElementRef.current?.scrollIntoView();
  }, [messagges]);

  function handleOnSubmit(event) {
    event.preventDefault();
    event.stopPropagation();
    if (!msgText) return;
    socket.emit('chat new msg all', msgText);
    setMsgText('');
  }

  return (
    <ChatContainer>
      <ChatMsgsBox className="scrollbar-transparent">
        {messagges.map((msg, index) => {
          return (
            <ChatMsg
              className={`chat-msg-box ${
                msg.id === socket.id ? 'chat-msg-box-user' : ''
              }`}
              ref={index === messagges.length - 1 ? lastElementRef : null}
              key={msg.msgId}
              userColor={msg.color}
            >
              <span className="chat-msg-user">{msg.name}</span>
              <p className="chat-msg-texto">{msg.msg}</p>
            </ChatMsg>
          );
        })}
      </ChatMsgsBox>

      <ChatFormContainer>
        <form
          id="chat-form"
          onSubmit={(e) => handleOnSubmit(e)}
          autoComplete="off"
        >
          <input
            type="text"
            name="msg"
            placeholder="Escriba el mensaje..."
            value={msgText}
            onChange={(e) => setMsgText(e.target.value)}
          />

          <button type="submit" className="pc">
            Enviar
          </button>
          <button type="submit" className="movil">
            🚀
          </button>
        </form>
      </ChatFormContainer>
    </ChatContainer>
  );
}

const ChatContainer = styled.div`
  width: auto;
  height: auto;
  min-height: 100%;
  background: #000;
  flex: 1;

  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (device-width < 500px) {
    width: 100%;
    height: 90%;
  }
`;

const ChatMsgsBox = styled.div`
  height: 93%;
  overflow-x: hidden;
  overflow-y: auto;
  background: #000;

  padding: 2px 15px 0 15px;

  @media screen and (max-width: 500px) {
    width: 100%;
  }
  @media screen and (min-width: 500px) {
    min-width : 70%;
  }
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  scroll-behavior: smooth;
`;
const ChatMsg = styled.div`
  width: 70%;
  height: auto;
  max-width: 350px;
  border-radius: 10px;
  border: 2px solid
  ${(props) => {
    if (!props.userColor) return '#ccc;';
    return `rgb(${props.userColor.r},${props.userColor.g},${props.userColor.b});`;
  }}
  margin: 15px 0;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  &.chat-msg-box-user {
    align-self: flex-end;
  }

  .chat-msg-user {
    width: max-content;
    height: 30px;
    padding: 5px 10px 10px 0;
    text-align: right;
    border-bottom: 2px solid #fff;
    display: flex;
  }

  .chat-msg-texto {
    display: flex;
    width: 100%;
    height: max-content;
    overflow: hidden;
    padding: 10px;
    color: #fff;
  }
`;

const ChatFormContainer = styled.div`
  width: 100%;
  height: 45px;
  background-color: transparent;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 1%;
 
  form {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;

    input {
      width: 50%;
      @media screen and (max-width: 500px) {
        width: 80%;
      }
      @media screen and (min-width: 500px) {
        min-width : 320px;
      }
      height: 100%;
      padding-left: 10px;
      font-size: 1rem;
      border-radius: 10px;
      margin-right: 10px;

    }

    button {
      width: 10%;
      height: 100%;
      min-width: max-content;
      padding : 0 5px;
      font-size: 1rem;
      cursor: pointer;
      border-radius: 10px;
      background-color: #ada9bb;
    }
    button.movil {
      width: 45px;
      min-width: 45px;
      height: 100%;

      @media screen and (min-width: 500px) {
        display: none;
      }
    }
    button.pc {
      @media screen and (max-width: 500px) {
        display: none;
      }
    }
  }
`;
