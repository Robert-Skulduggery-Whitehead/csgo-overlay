import "./App.css";
import Layout from "./HUD/Layout/Layout";
import io from "socket.io-client";
import { useEffect, useState } from "react";

function App() {
  var display = "gameOverlay";
  const [socket, setSocket] = useState();

  useEffect(() => {
    const newSocket = io("http://127.0.0.1:3001");
    setSocket(newSocket);

    return () => {
      socket.disconnect();
    };
  }, []);

  if (display === "gameOverlay" && socket) {
    return (
      <div>
        <Layout socket={socket}></Layout>
      </div>
    );
  } else {
    return <div className="App"></div>;
  }
}

export default App;
