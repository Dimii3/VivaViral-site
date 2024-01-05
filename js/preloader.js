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
