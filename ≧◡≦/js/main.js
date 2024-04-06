/*=============== MOSTRA MENU ===============*/
const navMenu = document.getElementById('nav_menu'),
    navtoggle = document.getElementById('nav_toggle'),
    navclose = document.getElementById('nav_close');

    /*menu abre*/
if(navtoggle){
    navtoggle.addEventListener('click', () =>{
        navMenu.classList.add('show_menu')
    })
}
    /*menu fecha*/
if(navclose){
    navclose.addEventListener('click', () =>{
        navMenu.classList.remove('show_menu')
    })
}

/*================= ABRIR CARRINHO ===============*/
function abrirCarrinho() {
    document.getElementById("carrinhoLateral").style.width = "350px";
}

function fecharCarrinho() {
    document.getElementById("carrinhoLateral").style.width = "0";
}

document.getElementById('abrirCarrinho').addEventListener('click', abrirCarrinho);

document.addEventListener('click', function(e) {
    if (e.target && e.target.classList.contains('adicionarCarrinho')) {
    }
});

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.addcarrinho').forEach(button => {
        button.addEventListener('click', function() {
            const produto = this.closest('.produto');
            const nome = produto.getAttribute('data-nome');
            const preco = produto.getAttribute('data-preco');
            const imagem = produto.getAttribute('data-imagem');
            adicionarAoCarrinho(nome, preco, imagem);
        });
    });
});

function adicionarAoCarrinho(nome, preco, imagem) {
    const precoFloat = parseFloat(preco.replace(',', '.'));
    const itemExistente = itensCarrinho.find(item => item.nome === nome);
    if (itemExistente) {
        itemExistente.quantidade += 1;
    } else {
        itensCarrinho.push({ nome, preco: precoFloat, quantidade: 1, imagem });
    }
    atualizarCarrinho();
}


let itensCarrinho = [];

function atualizarCarrinho() {
    let carrinhoHTML = '<a href="javascript:void(0)" class="fecharbtn" onclick="fecharCarrinho()">&times;</a><h2 class="carrinho_titulo">Seu Carrinho</h2><div class="itens-carrinho">';
    
    let total = 0;
    itensCarrinho.forEach((item) => {
        carrinhoHTML += `<div class="item-carrinho"><img src="${item.imagem}" alt="${item.nome}"><p>${item.nome} - R$ ${item.preco.toFixed(2)} x ${item.quantidade}</p></div>`;
        total += item.preco * item.quantidade;
    });

    carrinhoHTML += `</div><h3 class="total-carrinho">Total: R$ ${total.toFixed(2)}</h3>`;

    document.getElementById("carrinhoLateral").innerHTML = carrinhoHTML;
}
/*=============== REMOVE MENU CELL ===============*/
const navlink = document.getElementById('.nav_link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav_menu')
    navMenu.classList.remove('show_menu')
}
navlink.forEach(n => n.addEventListener('click', linkAction))

/*=============== ADD BLUR HEADER ===============*/
const blurHeader = () =>{
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('blur-header')
                       : header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)
/*=============== MOSTRA SCROLL UP ===============*/ 
const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up')
    this.scrollY >= 350 ? scrollUp.classList.add('showscroll')
                        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

const sections = document.querySelectorAll('section[id]')

const scrollactive = () =>{
    const scrollDown = window.scrollY

    sections.forEach(current =>{
        const sectionHeight = current.offsetheight,
              sectionTop = current.offsettop -58;
              sectionId = current.getAttribute('id')
              sectionsClass = current.querySelector('.nav_menu a[href*=' + sectionId + ']')
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollactive)
/*=============== SCROLL REVEAL ANIMAÇÃO ===============*/
const sr = scrollReveal({
    origin: 'top',
    distace: '80px',
    duration: 2500,
    delay: 300,
    //reset: true, //repetiçãodaanimação
})
sr.reveal(`.home_img, novo_data`)
sr.reveal(`.home_data`, {delay: 500, interval: 100})
sr.reveal(`.novo_card`, {delay: 500, interval: 100})
sr.reveal(`.loja_card`, {interval:100})