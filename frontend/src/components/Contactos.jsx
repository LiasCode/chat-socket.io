import { useEffect, useState } from "react";
import { socket } from "../services/socket";

export function Contactos() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    socket.on("new_user", (usersData) => {
      setUsers(usersData);
    });
  }, []);

  return (
    <div id="contactos">
      {users.map((user) => {
        return (
          <div className="contactos-person" key={user.id}>
            <img className="contactos-person-avatar" src="#" />
            <span className="contactos-person-name"> {user.name} </span>
          </div>
        );
      })}
    </div>
  );
}
