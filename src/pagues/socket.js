import { io } from "socket.io-client";

const SOCKET_URL = "http://localhost:5173/"; // Asegúrate de que la URL coincida con la del servidor

const socket = io(SOCKET_URL);

export default socket;
