import { useState } from "react";
import "./App.css";
import Chat from "./Chat";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import { useStateValue } from "./StateProvider";
function App() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <>
          <Header />

          <div className="app__body">
            <Sidebar />
            <Routes>
              <Route path="/" element={<h1>welcome</h1>} />
              <Route path="/room/:roomId" element={<Chat />} />
            </Routes>
          </div>
        </>
      )}

      {/* Sidebar */}
      {/* React Router */}
      {/*  */}
    </div>
  );
}

export default App;
