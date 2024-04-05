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