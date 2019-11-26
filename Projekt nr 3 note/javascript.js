// notatki
// tablica notatek (obiektów klasy Note)
let notesArr = []
let dTitle = document.getElementById('userTitle')
let dDescription = document.getElementById('userNote')
document.querySelector('#createNote').addEventListener('click' , ()=> newNote())
document.getElementById('deleteNote').addEventListener('click'  , ()=>check())
// klasa notatki
class Note {
  constructor(title = '', description = '') {
    this.title = title
    this.description = description
    this.color = 'red'
    this.created = Date().toString()
    this.pinned = false
  }
}
function newNote(){
    let noteApp = new Note(dTitle.nodeValue , dDescription.nodeValue)
    notesArr.push(noteApp)
}
function check(){
    console.log(notesArr)
}
// zapisanie do localStorage
localStorage.setItem('notes', JSON.stringify(notesArr))

// odczyt z localStorage
notesArr = JSON.parse(localStorage.getItem('notes'))