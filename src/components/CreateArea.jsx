import React, { useState } from "react";

function CreateArea(props) {
  const [noteContent, setNoteContent] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setNoteContent((prevValues) => {
      return {
        ...prevValues,
        [name]: value
      };
    });
  }

  return (
    <div>
      <form>
        <input
          onChange={handleChange}
          name="title"
          placeholder="Title"
          value={noteContent.title}
        />
        <textarea
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={noteContent.content}
        />
        <button
          onClick={(event) => {
            props.onAdd(noteContent);
            setNoteContent({ title: "", content: "" });
            event.preventDefault();
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;

