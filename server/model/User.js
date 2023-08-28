const { randomUUID } = require("node:crypto");
const { createRandomColor } = require("../../utils/createRandomColor");

const UserValidationError = new Error("Invalid User");

class UserModel {
  constructor(socketId, name) {
    this.id = randomUUID();
    this.color = createRandomColor();
    this.name = name;
    this.socketId = socketId;
    this.rooms = [];
    this.validateUser();
  }
  validateUser() {
    if (
      !this.id ||
      !this.name ||
      !this.color ||
      !this.socketId ||
      !(this.rooms instanceof Array)
    ) {
      throw UserValidationError;
    }
  }
  joinUserToRoom(roomId) {
    if (!this.rooms.includes(roomId)) {
      this.rooms.push(roomId);
      return true;
    }
    return true;
  }
  disconnectUserFromRoom(roomId) {
    const roomIndex = this.rooms.findIndex((r) => r === roomId);
    if (roomIndex !== -1) {
      this.rooms.splice(roomIndex, 1);
      return true;
    }
    return true;
  }
}

module.exports = {
  UserModel,
};
