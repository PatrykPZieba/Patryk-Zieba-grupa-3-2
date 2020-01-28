function cleanTitle(){
    document.getElementById("titleinp").value="";
}
function changeNoteColor(color){
    var Note = document.getElementById("topNote");
    Note.style.backgroundColor=color.id;
}
function add(){
    var NoteNumber=document.getElementById("Notecount").innerHTML;
    var NoteTittle = document.getElementById("titleinp").value;
    var NoteColor = document.getElementById("topNote").style.backgroundColor;
    var NoteText = document.getElementById("textinp").value;
    var NoteDate = new Date();
    const Note = {
        NoteNumber: NoteNumber,
        NoteTittle: NoteTittle,
        NoteText: NoteText,
        NoteColor: NoteColor,
        NoteDate: NoteDate
    }
    localStorage.setItem(NoteNumber, JSON.stringify(Note));
    countNote();
    const retrievedObject = localStorage.getItem(NoteNumber);
    console.log(JSON.parse(retrievedObject));
    loadNotes();
    location.reload();
}
function countNote(){
    var i=-1;
    do{
        i++;
    }while(localStorage.getItem(i) != null)
    document.getElementById("Notecount").innerHTML=i;
}
function refresh(){
    var x = document.getElementById("note");
    x.removeChild(NoteList);
}

function loadNotes() {
    countNote();
    for (var NoteList = 0; NoteList < Number(document.getElementById("Notecount").innerHTML); NoteList++) {
        const retrievedObject = localStorage.getItem(NoteList);
        let note = document.createElement("div");
        note.className = "note";
        note.id = NoteList;

        let topNote = document.createElement("div");
        topNote.id = "topNote";
        
        let topTitleNote = document.createElement("div");
        topTitleNote.className = "topTitleNote";
        topTitleNote.style.width="90%";

        let titleinp = document.createElement("p");
        titleinp.id = "titleinp";
        titleinp.style.margin=0;
        titleinp.style.width="90%";
        titleinp.style.marginLeft="10%";



        let botNote = document.createElement("div");
        botNote.className = "botNote";

        let textinp = document.createElement("textarea");
        textinp.id = "textinp";
        textinp.style.width = "100%";
        
        textinp.disabled = true;

        note.appendChild(topNote);
        note.appendChild(botNote);
        topNote.appendChild(topTitleNote);
        botNote.appendChild(textinp);
        topTitleNote.appendChild(titleinp);
        document.body.appendChild(note)
        topNote.style.backgroundColor = JSON.parse(retrievedObject).NoteColor;
        titleinp.innerHTML = JSON.parse(retrievedObject).NoteTittle;
        textinp.value = JSON.parse(retrievedObject).NoteText;
        note.style.float="left";
    }
}