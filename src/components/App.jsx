import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [note, setNote] = useState([]);

  function addItem(noteContent) {
    setNote((prevValues) => {
      return [...prevValues, noteContent];
    });
  }

  function removeItem(id) {
    setNote((prevValues) => {
      return prevValues.filter((itens, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addItem} />
      {note.map((itens, index) => (
        <Note
          key={index}
          id={index}
          title={itens.title}
          content={itens.content}
          onDelete={removeItem}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
