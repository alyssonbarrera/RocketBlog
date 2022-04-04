let postsSection = document.querySelector('.posts')
let input = document.querySelector('input')
let terms = document.querySelector('.datalist')
let button = document.querySelector('.btn-outline-success')
let btnNav = document.querySelector('#btnNave')
let divNav = document.querySelector('#navbarSupportedContent')
let btnArrow = document.querySelector('.btn-arrow')
let destaqueSection = document.querySelector('.destaque')
let btnNavbar = document.querySelector('.navbar-toggler-icon')

let post = [

    conteudo = {
        data: 'Janeiro 04, 2022',
        imagem: 'post-1.png',
        titulo: 'Começando no ReactJS em 2022',
        texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique. Sed volutpat aenean.',
        categoria: 'post-destaque'
    },
    conteudo = {
        data: 'Janeiro 04, 2022',
        imagem: 'none',
        titulo: 'Conheça as principais técnicas para conseguir uma vaga internacional em programação',
        texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique. Sed volutpat aenean.',
        categoria: 'post-simples'

    },
    conteudo = {
        data: 'Janeiro 04, 2022',
        imagem: 'none',
        titulo: 'Veja a evolução do Front-end na prática',
        texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique. Sed volutpat aenean.',
        categoria: 'post-simples'

    },
    conteudo = {
        data: 'Janeiro 04, 2022',
        imagem: 'post-2.png',
        titulo: '10 dicas para conseguir a vaga desejada',
        texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique. Sed volutpat aenean.',
        categoria: 'post-comum'
    },
    conteudo = {
        data: 'Janeiro 04, 2022',
        imagem: 'post-3.png',
        titulo: 'Deixe seu código mais semântico com essas dicas',
        texto: 'Lorem ipsum dolor st amet, consectetur adipiscing elit. Nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique. Sed volutpat aenean.',
        categoria: 'post-comum'
    },
    /* conteudo = {
        data: 'Janeiro 04, 2022',
        imagem: 'post-3.png',
        titulo: 'Use essas dicas nas suas aplicações mobile',
        texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique. Sed volutpat aenean.'
    }*/
]

function mostrarPosts () {

    for (let i = 0; i < post.length; i++) {
        if(post[i].categoria === 'post-comum') {
            postsSection.innerHTML += `<div id="post-${i}" class="postInserido"><img src="./assets/${post[i].imagem}" alt=""><p>${post[i].data}</p><h2>${post[i].titulo}</h2><p>${post[i].texto}</p></div>`;
        }
    }

}

mostrarPosts()

console.log(post)
console.log(post[0].data)


function mostrarPostDestaque() {
    let div = document.createElement('div')
    for (let i = 0; i < post.length; i++) {
        if(post[i].categoria === 'post-destaque') {
            destaqueSection.prepend(div)
            div.setAttribute('class', 'post-grande')
            div.innerHTML += `<img id="post-${i}" src="./assets/${post[i].imagem}" alt=""><p>${post[i].data}</p><h2>${post[i].titulo}</h2><p>${post[i].texto}</p>`
        }
    }
}

mostrarPostDestaque()

function mostrarPostSimples () {
    let div = document.createElement('div')
    for (let i = 0; i < post.length; i++) {
        if(post[i].categoria === 'post-simples') {
            destaqueSection.appendChild(div)
            div.setAttribute('class', 'div-post-destaque')
            div.innerHTML += `<div id="post-${i}" class="post-destaque"><p>${post[i].data}</p><h2>${post[i].titulo}</h2><p>${post[i].texto}</p></div>`
        }
    }
}

mostrarPostSimples()

function addConteudo (data, imagem, titulo, texto, categoria) {
        post.push(conteudo = {
            data: data,
            imagem: imagem,
            titulo: titulo,
            texto: texto,
            categoria: categoria
        })

        while(postsSection.firstChild) {
            postsSection.removeChild(postsSection.firstChild)
        }

        mostrarPosts()
    }


addConteudo('Janeiro 04, 2022', 'post-4.png','Use essas dicas nas suas aplicações mobile', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique. Sed volutpat aenean.', 'post-comum')

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
    for(let i = 0; i < post.length; i++) {
        if(input.value === post[i].titulo) {
            document.documentElement.scrollTop = 2300;
        } else {}
    }
    input.value = "" 
}

function irDiv () {
    for (let i = 0; i < post.length; i++) {
        if(input.value === post[i].titulo) {
            window.location.href = `#post-${i}`
        } else {console.log('oi')}

    }
}

button.addEventListener("click", irDiv)

function prever(event) {
    event.preventDefault()
}

function limparInput () {
    if(input.value != "") {
        input.value = "" 

    }
}

function click () {
    btnNav.setAttribute('class', 'navbar-toggler collapsed')
    btnNav.setAttribute('aria-expanded', 'false')
    divNav.setAttribute('class', 'navbar-collapse collapse')
}

if(window.screen.width > 950) {
    button.addEventListener('click', click);
    button.addEventListener('click', limparInput)
    button.addEventListener('click', prever)
}

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
            terms.innerHTML += `<option><a href="post-${i}">${cadaTitulo[i]}</option>`;
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

function click2 () {
    setTimeout(function () {
        click();
        limparInput()
    }, 3000)
}

input.addEventListener('keypress', mostrarSearch)
input.addEventListener('keypress', search);
input.addEventListener('blur', mostrarSearch)

if(window.screen.width <= 950) {
    input.addEventListener('keydown', mostrarSearch)
    input.addEventListener('keydown', search);
    button.addEventListener('click', prever)

}

if(window.screen.width > 950) {
    if(irDiv()) {
        button.addEventListener('click', limparLista)
        button.addEventListener('click', prever)
        
    }
}

btnNavbar.addEventListener('click', limparInput)