'use strict';
const moreInfoPriceBtn = document.querySelectorAll('.btn-price');

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

// PRELOADER
document.body.style.overflow = 'hidden';
window.addEventListener('load', () => {
	const preloader = document.querySelector('.preloader');
	preloader.classList.add('loader-hidden');
	document.body.style.overflow = 'visible';
	preloader.addEventListener('transitionend', () => {
		preloader.remove();
	});
});
