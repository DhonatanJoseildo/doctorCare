window.addEventListener('scroll', onScroll)
onScroll()
function onScroll() {
  showNavOnScroll()
  showBackToTopButtonOnScroll()

  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(services)
  activateMenuAtCurrentSection(about)
  activateMenuAtCurrentSection(depositions)
  activateMenuAtCurrentSection(contact)
}

function activateMenuAtCurrentSection(section) {
  // linha alvo
  const targetLine = scrollY + innerHeight / 2

  // verificar se a seção passou da linha

  //quais dados vou precisar?
  const sectionTop = section.offsetTop
  const sectionHeight = section.offsetHeight

  // o topo da seção chegou ou ultrapassou a linha alvo?
  const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop

  // verificar se a base esta a baixo da linha alvo!
  const sectionEndsAt = sectionTop + sectionHeight

  const sectionEndPassedTargetLine = sectionEndsAt <= targetLine

  // limites da seção
  const sectionBoundaries = sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine

  const menuElement = document.querySelector(`.menu a[href*=${section.getAttribute('id')}]`)

  menuElement.classList.remove('active')
  if (sectionBoundaries) {
    menuElement.classList.add('active')
  }
}

function showNavOnScroll() {
  if (scrollY > 0) {
    navigation.classList.add('scroll')
  }else{
    navigation.classList.remove('scroll')
  }
}

function showBackToTopButtonOnScroll() {
  if (scrollY > 400) {
    backToTopButton.classList.add('show')
  }else{
    backToTopButton.classList.remove('show')
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}
function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
}).reveal(`
#home,
#home img,
#home .stats,
#services,
#services header,
#services .card,
#about,
#about header,
#about .content,
#depositions,
#depositions header`);

// Depositions (Depoimentos)
setInterval(function(){
  nextDepositions()
}, 5000)
document.getElementById("radio01").checked = true;

function nextDepositions() {

  if (this.radio01.checked == true) {
    document.getElementById("radio02").checked = true;
  }else if (this.radio02.checked == true) {
    document.getElementById("radio03").checked = true;
  }else{
    document.getElementById("radio01").checked = true;
  }

}
