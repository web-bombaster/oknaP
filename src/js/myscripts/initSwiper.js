// Инициализация слайдера swiper
// https://swiperjs.com/

function initSwiper() {
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
				1401: {
					slidesPerView: 4,
					spaceBetween: 20,
					loop: true,
				},
			},
			pagination: {
				el: ".systems-rehau__pagination",
			},
		});
	}

	// if (document.querySelector('.jsBrandsList')) {
	// 	const brandsList = new Swiper('.jsBrandsList', {
	// 		// slidesPerView: 5,
	// 		loop: true,
	// 		spaceBetween: 20,
	// 		autoplay: {
	// 			delay: 2500,
	// 		},
	// 		navigation: {
	// 			nextEl: '.brands__button-next',
	// 			prevEl: '.brands__button-prev',
	// 		},

	// 		breakpoints: {
	// 			319: {
	// 				slidesPerView: 2,
	// 			},

	// 			767: {
	// 				slidesPerView: 3,
	// 			},

	// 			991: {
	// 				slidesPerView: 4,
	// 			},
	// 			1199: {
	// 				slidesPerView: 5,
	// 			},
	// 		},
	// 	});
	// };
}

// window.addEventListener("resize", initSwiper);
window.addEventListener("resize", function () {
	// setTimeout(initSwiper, 200);
	initSwiper();
	// swiper.init();
});

initSwiper();
