import React from "react";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "./App.css"; // Puedes agregar estilos aquí

const App = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <Projects />
        <Contact />
      </main>
    </div>
  );
};

export default App;
