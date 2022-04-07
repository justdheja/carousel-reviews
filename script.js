const carouselButtons = document.querySelectorAll("[data-carousel-button]")
const slides = document.querySelectorAll("[data-slide]")

const dotsContainer = document.getElementById("carousel-dots")
for(let i = 0; i < slides.length; i++) dotsContainer.innerHTML += `<i id="carousel-dot-item" class="fa-solid fa-circle"></i>`;

const dots = document.querySelectorAll('#carousel-dot-item');
const slideUl = document.querySelector('[data-slides]');
const activeSlide = slideUl.querySelector('[data-active]');
dots[[...slideUl.children].indexOf(activeSlide)].className += " active-dot"

const imageContainer = document.querySelector("#image-slides")

carouselButtons.forEach((button) => {
	button.addEventListener('click', () => {
		const offset = button.dataset.carouselButton === 'next' ? 1 : -1;
    const slides = button
			.closest('[data-carousel]')
			.querySelector('[data-slides]');

		const activeSlide = slides.querySelector('[data-active]');
		const activeImage = imageContainer.querySelector('[data-active]')
    let newIndex = [...slides.children].indexOf(activeSlide) + offset;
		if (newIndex < 0) newIndex = slides.children.length - 1;
		if (newIndex >= slides.children.length) newIndex = 0;

		slides.children[newIndex].dataset.active = true;
		delete activeSlide.dataset.active;
    imageContainer.children[newIndex].dataset.active = true;
    delete activeImage.dataset.active;
    document.getElementsByClassName("active-dot")[0].className = 'fa-solid fa-circle'
    dots[newIndex].className += ' active-dot';
	});
});


dots.forEach((dot) => {
	dot.addEventListener('click', () => {
		const newIndex = [...dotsContainer.children].indexOf(dot);
		const activeImage = imageContainer.querySelector('[data-active]');
    const activeSlide = slideUl.querySelector('[data-active]');

		slideUl.children[newIndex].dataset.active = true;
		delete activeSlide.dataset.active;
		imageContainer.children[newIndex].dataset.active = true;
		delete activeImage.dataset.active;
		document.getElementsByClassName('active-dot')[0].className =
			'fa-solid fa-circle';
		dots[newIndex].className += ' active-dot';
	});
});