import { createRef, useEffect, useState } from "react";
import { socket } from "../services/socket";

export function Chat() {
  const [messagges, setMessagges] = useState([]);

  const lastElementRef = createRef();

  useEffect(() => {
    socket.on("chat new msg all", (msgData) => {
      setMessagges((prevState) =>
        prevState.concat([
          {
            msg: msgData.msg,
            name: msgData.name,
            id: msgData.id,
            msgId: msgData.msgId,
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
    const form = new FormData(event.target);
    const msgText = form.get("msg");
    socket.emit("chat new msg all", msgText);
  }

  return (
    <div id="chat-container">
      <div id="chat-messages" className="scrollbar-transparent">
        {messagges.map((msg, index) => {
          return (
            <div
              className={`chat-msg-box ${
                msg.id === socket.id ? "chat-msg-box-user" : ""
              }`}
              ref={index === messagges.length - 1 ? lastElementRef : null}
              key={msg.msgId}
            >
              <span className="chat-msg-user">{msg.name}</span>
              <p className="chat-msg-texto">{msg.msg}</p>
            </div>
          );
        })}
      </div>

      <div id="chat-form-container">
        <form id="chat-form" onSubmit={(e) => handleOnSubmit(e)}>
          <input type="text" name="msg" placeholder="escriba el mensaje" />
          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
}
