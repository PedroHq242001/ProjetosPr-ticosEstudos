// cria um botão de categoria na seção de categorias
function createCategory() {
    id_category = category_list.length; // gera um id com a ultima posicao do  array
    let input = input_category.value; // armazena o valor do input de categoria
    
    category_list[id_category] = newCategory(id_category, input); // adiciona a nova categoria na lista
    category_button_list.push(createCategoryButton(id_category, category_list[id_category])); // adiciona o botão na lista
    categorySection.innerHTML = printCategories(); // imprime todas as categorias da lista
    selected_category = "";
}

// ao clicar no botão de save
function saveContent(id_category) { 
    let title = document.getElementById("content-title").value;
    let text = document.getElementById("content-text").value;

    createNewNote(id_category, title, text);
    cleanNoteSection();
    printNotes(id_category);
    cleanContent();
}

// deleta uma categoria ou uma nota
function deleteContent() {   
    let id = selected_category;

    switch(selectedType) {
        case 'category':
            if(selected_category !== "") {
                // remove a categoria no index id_category
                category_list.splice(id, 1);
                
                // procura o botão com o id_categoria e deleta do array
                for(let i = 0; i <= category_button_list.length - 1; i++) {
                    if(category_button_list[i].id_category == id) {
                        category_button_list.splice(i, 1);
                    }
                }
        
                cleanCategorySection(); 
                cleanNoteSection();
                cleanContent();
                categorySection.innerHTML = printCategories(); // imprime todas as categorias da lista
                selected_category = "";
            }
            break;

        case 'note':
            /*
            se o que foi selecionado foi a nota, vai procurar o id da nota na lista de notas dessa categoria atual e 
            remover da lista. Depois irá limpar todo o conteudo e escrever as notas da lista atual.
            */
            if(selectedNote !== "") {
                for(let i = 0; i <= category_list[id].noteList.length - 1; i++) {
                    if(category_list[id].noteList[i].id_note == selectedNote) {
                        category_list[id].noteList.splice(i, 1);
                    }
                }
    
                cleanContent();
                printNotes(id);
                selectedNote = "";
                selectedType = "";
            } 
            break;

        default:
            selectedNote = "";
            selectedType = "";
    }
}