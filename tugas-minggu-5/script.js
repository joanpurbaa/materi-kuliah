const title = document.querySelector("#title");
const desc = document.querySelector("#desc");
const notesList = document.querySelector("#notesList");
const button = document.querySelector("#button");

let notes = [];
let number = 1;

async function saveNotesToStorage() {
  try {
    localStorage.setItem("notes", JSON.stringify(notes));
  } catch (error) {
    console.error("Gagal menyimpan data:", error);
  } 
}

async function loadNotesFromStorage() {
  try {
    const storedNotes = localStorage.getItem("notes");
    notes = storedNotes ? JSON.parse(storedNotes) : [];
    number = notes.length > 0 ? Math.max(...notes.map(n => n.id)) + 1 : 1;
    renderNotes();
  } catch (error) {
    console.error("Gagal memuat data:", error);
  }
}

button.addEventListener("click", async () => {
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
  await saveNotesToStorage(); 
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
    deleteButton.style.background = "tomato";
    deleteButton.addEventListener("click", () => deleteNote(note.id));

    noteContainer.appendChild(titleResult);
    noteContainer.appendChild(descResult);
    noteContainer.appendChild(deleteButton);

    notesList.appendChild(noteContainer);
  });
}

async function deleteNote(id) {
  notes = notes.filter(note => note.id !== id);
  await saveNotesToStorage(); // Simpan perubahan ke storage
  renderNotes();
}

document.addEventListener("DOMContentLoaded", loadNotesFromStorage);
