const title = document.querySelector("#title");
const desc = document.querySelector("#desc");
const notesList = document.querySelector("#notesList");
const button = document.querySelector("#button");

let notes = [];
let number = 1;

button.addEventListener("click", () => {
  if (title.value.trim() === "" || desc.value.trim() === "") {
    alert("Judul dan deskripsi tidak boleh kosong!");
    return;
  }

  const noteId = number++;
  const noteData = {
    id: noteId,
    title: title.value,
    desc: desc.value,
  };

  notes.push(noteData);
  renderNotes();

  title.value = "";
  desc.value = "";
});

function renderNotes() {
  notesList.innerHTML = "";

  notes.forEach(note => {
    let noteContainer = document.createElement("div");
    noteContainer.classList.add("note-item");
    noteContainer.dataset.id = note.id; 

    let titleResult = document.createElement("h3");
    titleResult.textContent = `${note.id}. ${note.title}`;

    let descResult = document.createElement("p");
    descResult.textContent = note.desc;

    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Hapus";
    deleteButton.classList.add("delete-btn");
    deleteButton.style.background = 'tomato'
    deleteButton.addEventListener("click", () => deleteNote(note.id));

    noteContainer.appendChild(titleResult);
    noteContainer.appendChild(descResult);
    noteContainer.appendChild(deleteButton);

    notesList.appendChild(noteContainer);
  });
}

function deleteNote(id) {
  notes = notes.filter(note => note.id !== id);
  renderNotes();
}
