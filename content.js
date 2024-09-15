let contentSection = document.getElementById("content"); // secao de conteudo

// retorna um input para titulo da nota
function newInputTitle() {
    return `<input type="text" id="content-title" class="content-title" placeholder="Title">`;
}

// retorna um input para texto da nota
function newInputText() {
    return `<textarea type="text" id="content-text" class="content-text"></textarea>`;
}

// retorna um botao de save
function newSaveButton(id_category) {
    return `<button class="save-button" onclick="saveContent(${id_category})" id="content-save">Salvar</button>`;
}

// limpa o html do conteudo
function cleanContent() {
    contentSection.innerHTML = "";
}

// cria os campos de titulo e texto da nota e mostra todas as notas da categoria selecionada
function createContent(id_category, type) {
    let output = "";
    output += newInputTitle();
    output += newInputText();
    output += newSaveButton(id_category);
    selected_category = id_category;
    selectedType = type;
    cleanContent();
    cleanNoteSection();
    printNotes(id_category);
    contentSection.innerHTML = output;
}


