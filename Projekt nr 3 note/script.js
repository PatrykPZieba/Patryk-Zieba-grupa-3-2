
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
    var data = new Date();
    var dataText = data.toTimeString();
    dataText = dataText.split(' ')[0];
    const Note = {
        NoteNumber: NoteNumber,
        NoteTittle: NoteTittle,
        NoteText: NoteText,
        NoteColor: NoteColor,
        NoteDate: "Data Stworzenia:"+" "+ data.getDate()+"."+ data.getMonth()+1 +"."+ data.getFullYear()+ " " + dataText
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
function Del(){
    let NoteList = document.getElementById("Notecount").innerHTML
    localStorage.removeItem(localStorage.getItem(NoteList))
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

        let topDeleteDiv= document.createElement("div");
        topDeleteDiv.className="topDeleteNote";

        let topDelteNote = document.createElement("i");
        topDelteNote.className="fas fa-times";
        topDelteNote.onclick=Del();



        
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

        let DateInfo = document.createElement("div");
        DateInfo.id="NoteDateInfo"
        let Paragraph = document.createElement("p")
        Paragraph.id="demo"
        
        textinp.disabled = true;

        note.appendChild(topNote);
        note.appendChild(botNote);
        note.appendChild(DateInfo)
        topNote.appendChild(topDeleteDiv);
        topDeleteDiv.appendChild(topDelteNote);
        topNote.appendChild(topTitleNote);
        botNote.appendChild(textinp);
        DateInfo.appendChild(Paragraph);
        topTitleNote.appendChild(titleinp);
        document.body.appendChild(note)
        topNote.style.backgroundColor = JSON.parse(retrievedObject).NoteColor;
        titleinp.innerHTML = JSON.parse(retrievedObject).NoteTittle;
        textinp.value = JSON.parse(retrievedObject).NoteText;
        Paragraph.innerHTML = JSON.parse(retrievedObject).NoteDate;
        note.style.float="left";
        
    }
}