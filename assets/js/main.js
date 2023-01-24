/*==================== Mostrar o Menu ====================*/

const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

        if(toggle && nav) {
            toggle.addEventListener('click', ()=>{
                nav.classList.toggle('show-menu')
        })
    }

}
showMenu('nav-toggle', 'nav-menu')

/*==================== Remover o Menu ====================*/

const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')

    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== Ativar Link ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = curent.offsetHeight
        const sectionTop = current.ofsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= setionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*' + sectionId + ']').classList.remove('active-link')
        }
    })
}

window.addEventListener('scroll', scrollActive)

/*==================== Mostrar Scroll ====================*/ 
function scrollTop(){
    const scrollTop = document.getElementById('scroll-top');
    
    if(this.scrollY >= 200) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop)

/*==================== Tema Escuro ====================*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-sun'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bxs-moon' : 'bx-sun'

if (selectedTheme) {

  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'bxs-moon' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click', () => {

    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)

    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*
const themes = {
    light: {
        titleColor: '#0B0A0A',
        textColor: '#403A3A',
        textColorLight: '#707070',
        containerColor: '#FAFAFA',
        containerColorAlt: '#F0EFEF',
        bodyColor: '#FCFCFC'
    },
    dark: {
        titleColor: '#F2F2F2',
        textColor: '#BFBFBF',
        containerColor: '#212121',
        containerColorAlt: '#181616',
        bodyColor: '#2B2B2B'
    }
}

function setTheme(newTheme) {
    const themeColors = themes[newTheme]; // Seleciona o tema para aplicar
  
    Object.keys(themeColors).map(function(key) {
      html.style.setProperty(`--${key}`, themeColors[key]); // Altera as variáveis no css
    });
}

const darkModeToggle = document.querySelector('input[name=theme]');
darkModeToggle.addEventListener('change', function({ target }) {
  setTheme(target.checked ? 'dark' : 'light');
}); */

/*==================== Reduzir tamanho para A4 ====================*/ 
function scaleCv(){
    document.body.classList.add('scale-cv')
}

/*==================== Remover tamanho quando o CV for baixado ====================*/ 
function removeScale(){
    document.body.classList.remove('scale-cv')
}

/*==================== Gerar PDF ====================*/ 
// PDF generated area
let areaCv = document.getElementById('area-cv')

let resumeButton = document.getElementById('resume-button')

// Html2pdf options
let opt = {
    margin: 1,
    filename: 'Eric_Cv.pdf',
    image: {type: 'jpeg', quality: 0.98},
    html2canvas: {scale: 2},
    jsPDF: {format: 'a4', orientation: 'portrait'}
}

// Function to call areaCv and Html2Pdf options 
function generateResume(){
    html2pdf(areaCv, opt)
}

// When the button is clicked, it executes the three functions
resumeButton.addEventListener('click',() =>{

    // 1. The class .scale-cv is added to the body, where it reduces the size of the elements
    scaleCv()

    // 2. The PDF is generated
    generateResume()

    // 3. The .scale-cv class is removed from the body after 5 seconds to return to normal size.
    setTimeout(removeScale,5000)
})