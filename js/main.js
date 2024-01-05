'use strict';

const moreInfoPriceBtn = document.querySelectorAll('.btn-price');
const footerYear = (document.querySelector('.get-year').textContent = new Date().getFullYear());
const navBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');
const navLinks = document.querySelectorAll('.nav-links__item');

// PRICES
moreInfoPriceBtn.forEach((btn) => {
	btn.addEventListener('click', (e) => {
		const showMoreBtn = e.target.parentElement;
		if (!showMoreBtn.classList.contains('active')) {
			showMoreBtn.classList.add('active');
		} else {
			showMoreBtn.classList.remove('active');
		}
		const listItems = e.target.closest('ul').children;
		for (const item of listItems) {
			if (item.classList.contains('hide')) {
				item.classList.add('show');
				item.classList.remove('hide');
			} else if (item.classList.contains('show')) {
				item.classList.remove('show');
				item.classList.add('hide');
			}
		}
	});
});

// ANIMATION
const animateItems = document.querySelectorAll('.animate');
const animateElements = () => {
	const triggerBottom = (window.innerHeight / 5) * 4;
	animateItems.forEach((item) => {
		const itemTop = item.getBoundingClientRect().top;
		if (itemTop < triggerBottom) {
			item.classList.add('appear');
		}
	});
};
window.addEventListener('scroll', animateElements);

// FAQ SECTION
const faqBtns = document.querySelectorAll('.faq-item__question').forEach((faqBtn) => {
	faqBtn.addEventListener('click', (e) => {
		e.target.closest('.faq-item').classList.toggle('active');
	});
});

// MENU
let isMenuOpen = false;
const menuHandler = () => {
	if (!isMenuOpen) {
		navBtn.classList.add('active');
		nav.classList.add('active');
		document.body.style.overflow = 'hidden';
		isMenuOpen = true;
	} else {
		navBtn.classList.remove('active');
		nav.classList.remove('active');
		document.body.style.overflow = 'visible';
		isMenuOpen = false;
	}
};

navBtn.addEventListener('click', menuHandler);
navLinks.forEach((link) =>
	link.addEventListener('click', () => {
		menuHandler();
		document.body.style.overflow = 'visible';
	})
);
