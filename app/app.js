let postsSection = document.querySelector('.posts')
let input = document.querySelector('input')
let terms = document.querySelector('.datalist')
let button = document.querySelector('.btn-outline-success')
let btnNav = document.querySelector('#btnNave')
let divNav = document.querySelector('#navbarSupportedContent')
let btnArrow = document.querySelector('.btn-arrow')

let post = [
    conteudo = {
        data: 'Janeiro 04, 2022',
        imagem: 'img',
        titulo: '10 dicas para conseguir a vaga desejada',
        texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique. Sed volutpat aenean.'
    },
    conteudo = {
        data: 'Janeiro 04, 2022',
        imagem: 'img',
        titulo: 'Deixe seu código mais semântico com essas dicas',
        texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique. Sed volutpat aenean.'
    },
    /* conteudo = {
        data: 'Janeiro 04, 2022',
        imagem: 'img',
        titulo: 'Use essas dicas nas suas aplicações mobile',
        texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique. Sed volutpat aenean.'
    }*/
]

function mostrarPosts () {

    for (let i = 0; i < post.length; i++) {
    postsSection.innerHTML += `<div class="postInserido"><img src="./assets/post-${i+2}.png" alt=""><p>${post[i].data}</p><h2>${post[i].titulo}</h2><p>${post[i].texto}</p></div>`;
    }

}

mostrarPosts()

console.log(post)
console.log(post[0].data)

function addConteudo (data, titulo, texto) {
        post.push(conteudo = {
            data: data,
            imagem: 'img',
            titulo: titulo,
            texto: texto
        })

        while(postsSection.firstChild) {
            postsSection.removeChild(postsSection.firstChild)
        }

        mostrarPosts()
    }


addConteudo('Janeiro 04, 2022', 'Use essas dicas nas suas aplicações mobile', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique. Sed volutpat aenean.')

console.log(post)

/* 

// TESTES

function search () {
    for (let i = 0; i < post.length; i++) {
        terms.innerHTML += `<option>${post[i].titulo}</option>`
        }
}

search() */

/* function search(e) {
    total = e.length
    if (e.keyCode != 32 || total > 1) {
        for (let i = 0; i < post.length; i++) {
            terms.innerHTML += `<option>${post[i].titulo}</option>`;
        }
    }else {console.log('oi')}
}

function mostrarSearch () {
        while(terms.firstChild) {
            terms.removeChild(terms.firstChild)
        }
}

input.addEventListener('keypress', search);
input.addEventListener('keydown', mostrarSearch);
*/

/* function search() {
    
    for(conteudo of post) {
        
        let elementPost = document.createElement('option')
        let contentPost = document.createTextNode(conteudo.titulo)

        elementPost.appendChild(contentPost)
        terms.appendChild(elementPost)

    }
}

search()
*/
/* 

// TESTES

function pesquisar() {
    
    for (let i = 0; i < post.length; i++) {
            if(input.value === post[i].titulo) {
                document.documentElement.scrollTop = 2650
                input.value = "";
            } else {}
        }
} */


function pesquisar () {
    if(input.value === post[0].titulo) {
        document.documentElement.scrollTop = 2300;
    } else if (input.value === post[1].titulo) {
        document.documentElement.scrollTop = 2750
    } else if (input.value === post[2].titulo) {
        document.documentElement.scrollTop = 4050
    } else {}
    input.value = "" 
}

function prever(event) {
    event.preventDefault()
}

button.addEventListener('click', pesquisar)
button.addEventListener('click', prever)

function click () {
    btnNav.setAttribute('class', 'navbar-toggler collapsed')
    btnNav.setAttribute('aria-expanded', 'false')
    divNav.setAttribute('class', 'navbar-collapse collapse')
}

button.addEventListener('click', click)

window.onscroll = function scrollFunction () {

    if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
      btnArrow.style.display = "block";

    } else {
      btnArrow.style.display = "none";
    }
}

    function voltarParaTopo () {
        document.documentElement.scrollTop = 0;
}

btnArrow.addEventListener("click", voltarParaTopo)

let cadaTitulo = []

function exibirTitles () {
    for(let i = 0; i < post.length; i++) {
        cadaTitulo.push(post[i].titulo)
    }
}

exibirTitles()
console.log(cadaTitulo)

function search(e) {
    total = e.length
    if (e.keyCode != 32 || total > 1) {
        for (let i = 0; i < cadaTitulo.length; i++) {
            terms.innerHTML += `<option>${cadaTitulo[i]}</option>`;
        }
    }else {console.log('oi')}
    
}
function mostrarSearch () {
    while(terms.firstChild) {
        terms.removeChild(terms.firstChild)
    }
}

function limparLista () {
    if (input.value === "") {
        while(terms.firstChild) {
            terms.removeChild(terms.firstChild)
        }
    } else(console.log('oi'))
}

button.addEventListener('click', limparLista)
input.addEventListener('blur', limparLista)
input.addEventListener('keypress', mostrarSearch)
input.addEventListener('keypress', search);