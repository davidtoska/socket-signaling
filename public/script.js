const socket = io("http://localhost:8080");

socket.on("connect", () => {
  console.log("socket.id: ", socket.id);
});


