const input_category = document.getElementById("input-category"); // input de criacao de categoria
let categorySection = document.getElementById("titulos"); // secao html onde ficam os botoes de categoria
categorySection.innerHTML = ""; // html da secao de categorias
const category_list = []; // lista de categorias
const category_button_list = []; // lista de botoes das categorias criadas
let id_category = 0; // id inicial
let selected_category = ""; // mostra qual a categoria está selecionada atual
let selectedType = ""; // mostra se o que foi selecionado atualmente foi um botao de categoria ou se foi uma nota

// cria uma categoria e retorna
function newCategory(id_category, input) {
    const category = {
        id_category,
        displayname: input,
        buttonList: [],
        noteList: []
    }
    return category;
}

// cria um botão de categoria
function createCategoryButton(id_category, category) {
    const categoryButton = {
        id_category,
        buttonTag:`<button onclick="createContent(${id_category}, 'category')" class="btn-category header-borders"><p class="category-display">${category.displayname}</p></button>`
    }

    return categoryButton;
}

// mostra todas as categorias da lista
function printCategories() {
    let output = "";

    for(let i = 0; i <= category_button_list.length - 1; i++) {
        output += category_button_list[i].buttonTag;
    }

    return output;
}

// retorna a categoria com o id passado como argumento
function getCategory(id_category) {
    for(let i = 0; i <= category_list.length - 1; i++) {
        if(category_list[i].id_category == id_category) {
            return category_list[i];
        }
    }
}

// limpa o html da seção de categorias
function cleanCategorySection() {
    categorySection.innerHTML = "";
}


