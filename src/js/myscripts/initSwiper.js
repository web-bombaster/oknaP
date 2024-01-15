// Инициализация слайдера swiper
// https://swiperjs.com/

// Кнопки-табы для блока "Окна Rehau по цене производителя"
function initSwiper() {
	if (document.querySelector(".why-popular__slider")) {
		const whyPopularSlider = new Swiper(".why-popular__slider", {
			spaceBetween: 20,
			slidesPerView: 1,
			loop: true,

			pagination: {
				el: ".why-popular__pagination",
				clickable: true,
			},

			navigation: {
				nextEl: ".why-popular__next",
				prevEl: ".why-popular__prev",
			},
		});
	};

	if (document.querySelector(".our-works__slider")) {
		const prodSliderInner = new Swiper(".our-works__slider", {
			spaceBetween: 20,
			slidesPerView: 1,
			loop: true,

			pagination: {
				el: ".our-works__pagination",
				clickable: true,
			},

			navigation: {
				nextEl: ".our-works__next",
				prevEl: ".our-works__prev",
			},
		});
	};

	if (document.querySelector(".pr-slider")) {
		let menu = ["Blitz", "Grazio", "Delight", "Intelio"];

		const prodSliderInner = new Swiper(".pr-slider", {
			spaceBetween: 20,
			slidesPerView: 1,
			pagination: {
				el: ".pr-btns",
				clickable: true,
				bulletClass: "pr-btns__item",
				renderBullet: function (index, className) {
					return (
						'<span class="' +
						className +
						'">' +
						menu[index] +
						"</span>"
					);
				},
			},
		});
	};

	// Окна Rehau по цене производителя - вложенный слайдер
	if (document.querySelector(".slider-windows")) {
		const prodSliderInner = new Swiper(".slider-windows", {
			spaceBetween: 20,
			slidesPerView: 1,
			loop: true,
			disableOnInteraction: false,
			pauseOnMouseEnter: true,
			breakpoints: {
				500: {
					slidesPerView: 2,
					spaceBetween: 10,
					loop: true,
				},
				768: {
					slidesPerView: 3,
					spaceBetween: 20,
					loop: true,
				},
				1001: {
					slidesPerView: 4,
					spaceBetween: 20,
					loop: true,
				},
			},
			pagination: {
				el: ".slider-windows__pagination",
				clickable: true,
			},
			navigation: {
				nextEl: ".slider-windows__next",
				prevEl: ".slider-windows__prev",
			},
		});
	};

	// Профильные системы Rehau
	if (document.querySelector(".systems-rehau__slider")) {
		const prodSliderInner = new Swiper(".systems-rehau__slider", {
			spaceBetween: 20,
			slidesPerView: 1,
			loop: true,
			disableOnInteraction: false,
			pauseOnMouseEnter: true,
			breakpoints: {
				500: {
					slidesPerView: 2,
					spaceBetween: 10,
					loop: true,
				},
				768: {
					slidesPerView: 3,
					spaceBetween: 20,
					loop: true,
				},
				1001: {
					slidesPerView: 4,
					spaceBetween: 20,
					loop: true,
				},
			},
			navigation: {
				nextEl: ".systems-rehau__next",
				prevEl: ".systems-rehau__prev",
			},
			pagination: {
				el: ".systems-rehau__pagination",
				clickable: true,
			},
		});
	}

	// Окна Rehau по цене производителя - вложенный слайдер
	if (document.querySelector(".customer-reviews__slider")) {
		const customerReviewsSlider = new Swiper(".customer-reviews__slider", {
			spaceBetween: 10,
			slidesPerView: 1,
			loop: true,
			// disableOnInteraction: false,
			// pauseOnMouseEnter: true,
			breakpoints: {
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
					loop: true,
				},
			},
			pagination: {
				el: ".customer-reviews__pagination",
				clickable: true,
			},
			navigation: {
				nextEl: ".customer-reviews__next",
				prevEl: ".customer-reviews__prev",
			},
		});
	}

	// Наши сертификаты и гарантии
	if (document.querySelector(".certificates-slider")) {
		const certificatesSliderSlider = new Swiper(".certificates-slider", {
			spaceBetween: 12,
			slidesPerView: 2,
			loop: true,
			// disableOnInteraction: false,
			// pauseOnMouseEnter: true,
			breakpoints: {
				500: {
					slidesPerView: 3,
					spaceBetween: 20,
					loop: true,
				},
				660: {
					slidesPerView: 4,
					spaceBetween: 20,
					loop: true,
				},
				920: {
					slidesPerView: 5,
					spaceBetween: 20,
					loop: true,
				},
			},
			pagination: {
				el: ".certificates-slider__pagination",
				clickable: true,
				dynamicBullets: true,
			},
			navigation: {
				nextEl: ".certificates-slider__next",
				prevEl: ".certificates-slider__prev",
			},
		});
	}
}

// window.addEventListener("resize", initSwiper);
window.addEventListener("resize", function () {
	// setTimeout(initSwiper, 200);
	initSwiper();
	// swiper.init();
});

initSwiper();
