import { useState, useEffect } from "react";

function Notes() {
  const [notes, setNotes] = useState([]);
  const [input, setInput] = useState("");
  const [charCount, setCharCount] = useState(0);

  useEffect(
    function () {
      setCharCount(input.length);
    },
    [input]
  );

  function handleAdd() {
    if (input.trim() === "") {
      return;
    }

    const newNote = {
      id: Date.now(),
      text: input.trim(),
      date: new Date().toLocaleDateString(),
    };

    setNotes([newNote, ...notes]);
    console.log("Notes saved: ", notes);

    setInput("");
  }

  function handleDelete(id) {
    setNotes(
      notes.filter(function (note) {
        return note.id !== id;
      })
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-8 py-16 flex flex-col gap-4">
      <h1 className="text-4xl font-semibold text-gray-900">My notes</h1>
      <div>
        <textarea
          value={input}
          onChange={function (e) {
            setInput(e.target.value);
          }}
          className="w-full outline-none text-gray-700 text-base leading-relaxed resize-none border p-4 rounded-2xl"
          rows="4"
        ></textarea>
        <p>{charCount} characters</p>
        <button
          onClick={handleAdd}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm cursor-pointer mt-2"
        >
          Add Notes
        </button>
      </div>

      {notes.length === 0 ? (
        <div className="max-w-2xl h-40 border flex justify-center items-center rounded-2xl">
          <p className="text-sm font-medium text-gray-500">
            Your notes are empty! Start writing and add notes to see your list.
          </p>
        </div>
      ) : (
        <div className="flex flex-col gap-2">
          {notes.map(function (note) {
            return (
              <div
                key={note.id}
                className="bg-white border border-gray-100 rounded-xl p-4"
              >
                <p>{note.text}</p>
                <p className="text-sm text-gray-400">{note.date}</p>
                <button
                  onClick={function () {
                    handleDelete(note.id);
                  }}
                  className="bg-red-500 text-white px-2 py-1 rounded-lg text-sm cursor-pointer mt-2"
                >
                  Delete note
                </button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Notes;
