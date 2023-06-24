const burgerBtn = document.querySelector('.burger-icon')
const barsIcon = document.querySelector('.fa-bars')
const xIcon = document.querySelector('.fa-times')
const nav = document.querySelector('.nav__items')
const navLinks = document.querySelectorAll('.nav__items-link')
const footerYear = document.querySelector('.footer__year')

const handleCurrentYear = () => {
	const year = new Date().getFullYear()
	footerYear.innerText = year
}

const handleNav = () => {
	nav.classList.toggle('show')
}

const closeMenu = () => {
	nav.classList.remove('show')
}

function closeMenuOnScroll() {
	if (nav.classList.contains('show')) {
		nav.classList.remove('show');
	}
}

handleCurrentYear();
burgerBtn.addEventListener('click', handleNav);
nav.addEventListener('click', closeMenu);
window.addEventListener('scroll' , closeMenuOnScroll);


