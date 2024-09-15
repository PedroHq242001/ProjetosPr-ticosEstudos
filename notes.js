let noteSection = document.getElementById("notes"); // secao de notas
let selectedNote = "";

// cria uma nova nota
function createNewNote(id_category, title, text) {
    let id_note = category_list[id_category].noteList.length; // cria o id
    let displayTitle;
    let displayText;

    displayTitle = sliceTitle(title); // se o titulo for maior que 50, corta a string a partir desse index
    displayText = sliceText(text); // se o texto for maior que 100, corta o texto a partir dessa posição

    // criacao do botao de nota
    let buttonTag = `<button onclick="printNoteContent(${id_category}, ${id_note}, 'note')" class="btn-category header-borders">
        ${displayTitle}<br> 
        ${displayText}
    </button>`; 
    
    // criacao de um objeto nota
    const note = {
        id_note: id_note,
        id_category,
        title,
        text,
        buttonTag
    }

    category_list[id_category].noteList.push(note); // adiciona a nova nota na lista
}

// corta o titulo da nota para ser mostrada na tela
function sliceTitle(title) {
    let displayTitle = title.length > 30 ? title.substr(0, 30) : title; // se o titulo for maior que 50, vai retornar apenas a string do indice 0 até 50

    return displayTitle;
}

// corta o texto da nota para ser mostrada na tela
function sliceText(text) {
    let displayText = text.length > 50 ? text.substr(0, 50) : text; // se o texto for maior que 100, vai retornar apenas a string do indice 0 até 100

    return displayText;
}

// limpa o html da secao de notas
function cleanNoteSection() {
    noteSection.innerHTML = "";
}

// mostra todas as notas da categoria selecionada
function printNotes(id_category) {
    cleanNoteSection();
    let output = "";

    for(let i = 0; i <= category_list[id_category].noteList.length - 1; i++) {
        output += category_list[id_category].noteList[i].buttonTag;
    }

    noteSection.innerHTML = output;
}

// retorna o titulo da nota
function getTitle(category, id_note) {
    // encontra a nota pelo id da nota e retorna o titulo dessa nota quando encontrada
    for(let i = 0; i <= category.noteList.length - 1; i++) { 
        if(category.noteList[i].id_note == id_note) {
            return category.noteList[i].title;
        }
    }
}

// retorna o texto da nota
function getText(category, id_note) {
    // encontra a nota pelo id da nota e retorna o texto dessa nota quando encontrada
    for(let i = 0; i <= category.noteList.length - 1; i++) { 
        if(category.noteList[i].id_note == id_note) {
            return category.noteList[i].text;
        }
    }
}

// retorna um input com o valor do titulo da nota
function newNoteInputTitle(title) {
    return `<input type="text" id="content-title" class="content-title" value="${title}" placeholder="Title">`;
}

// retorna um input com o valor texto da nota
function newNoteInputText(text) {
    return `<textarea type="text" id="content-text" class="content-text" value="${text}">${text}</textarea>`;
}

// retorna um botao de save para a nota
function newNoteSaveButton(id_category, id_note) {
    return `<button class="save-button" onclick="saveNoteContent(${id_category}, ${id_note})" id="content-save">Salvar</button>`;
}

//mostra o conteudo da nota selecionada
function printNoteContent(id_category, id_note, type) {
    const category = getCategory(id_category); // atribui o retorno da categoria
    let title = getTitle(category, id_note);
    let text = getText(category, id_note);
    let output = "";
    
    output += newNoteInputTitle(title);
    output += newNoteInputText(text);
    output += newNoteSaveButton(id_category, id_note);
    selectedNote = id_note;
    selectedType = type;
    cleanContent(); // limpa o html de conteudo
    contentSection.innerHTML = output;
}

// sobrescreve o conteudo da nota selecionada
function saveNoteContent(id_category, id_note) {
    let title = document.getElementById("content-title").value;
    let text = document.getElementById("content-text").value;
    let displayTitle;
    let displayText;

    displayTitle = sliceTitle(title); // se o titulo for maior que 50, corta a string a partir desse index
    displayText = sliceText(text); // se o texto for maior que 100, corta o texto a partir dessa posição

    let buttonTag = `<button onclick="printNoteContent(${id_category}, ${id_note}, 'note')" class="btn-category">
        ${displayTitle}<br>
        ${displayText}
    </button>`;

    /* 
    Vai procurar a nota na lista de notas da categoria correspondente ao id da categoria e sobrescrever o conteudo
    dessa nota pelo conteudo atual.
    */
    for(let i = 0; i <= category_list[id_category].noteList.length - 1; i++) {
        if(category_list[id_category].noteList[i].id_note == id_note) {
            category_list[id_category].noteList[i].buttonTag = buttonTag;
            category_list[id_category].noteList[i].title = title;
            category_list[id_category].noteList[i].text = text;
        }
    }

    cleanNoteSection();
    cleanContent();
    printNotes(id_category);
}

