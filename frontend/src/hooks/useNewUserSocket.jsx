import { socket } from "../services/socket";
import { useState, useEffect } from "react";


export const useNewUserSocket = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    socket.on("new_user", (usersData) => {
      setUsers(usersData);
    });
  }, []);

  return {
    users,
  };
};
