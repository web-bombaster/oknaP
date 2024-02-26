// по щелчку на кнопку селекта выпадают доступные варианты выбора
let selectToggle = function () {
	if (document.querySelector(".calculator-select__current")) {
		// const btnSelect = document.querySelector('.calculator-select__current');
		const btnsSelect = document.querySelectorAll(
			".calculator-select__current"
		);

		btnsSelect.forEach(function (btn, index) {
			btn.addEventListener("click", function () {
				let btnPosition = index;
				// console.log("btnPosition - " + btnPosition);

				btnsSelect.forEach(function (btn, index) {
					if (btn != btn[btnPosition]) {
						btn.classList.remove("toggle");
						btn.nextElementSibling.classList.remove("toggle");
					} else {
						// btn[btnPosition].classList.toggle('toggle');
						// btn.nextElementSibling.classList.toggle('toggle');
					}
				});

				// this.classList.toggle('toggle');
				// this.nextElementSibling.classList.toggle('toggle');

				if (btnsSelect[btnPosition].classList.contains("toggle")) {
					// this.nextElementSibling.classList.add('toggle');
					btnsSelect[btnPosition].classList.remove("toggle");
					btnsSelect[btnPosition].nextElementSibling.classList.remove(
						"toggle"
					);
				} else {
					btnsSelect[btnPosition].classList.add("toggle");
					btnsSelect[btnPosition].nextElementSibling.classList.add(
						"toggle"
					);
				}

				// btnsSelect[btnPosition].classList.toggle('toggle');
				// btnsSelect[btnPosition].nextElementSibling.classList.toggle('toggle');

				// btnsSelect[btnPosition].classList.toggle('toggle');
				// if (btnsSelect[btnPosition].classList.contains('toggle')) {
				//     btnsSelect[btnPosition].nextElementSibling.classList.add('toggle');
				// } else {
				//     btnsSelect[btnPosition].nextElementSibling.classList.remove('toggle');
				// };

				// this.classList.toggle('toggle');
				// if (this.classList.contains('toggle')) {
				//     this.nextElementSibling.classList.add('toggle');
				// } else {
				//     this.nextElementSibling.classList.remove('toggle');
				// };
			});
		});
	}
};
selectToggle();

// по щелчку вариант
let selectVariant = function () {
	if (document.querySelector(".variants-item")) {
		const btnVariants = document.querySelectorAll(".variants-item");
		let variantTitle;
		// по клику на вариант сортировки у всех убираем .toggle, а у активного добавляем его
		btnVariants.forEach(function (element) {
			element.addEventListener("click", function () {
				element.parentElement
					.querySelectorAll(".variants-item")
					.forEach(function (element) {
						element.classList.remove("toggle");
					});

				// this.classList.toggle('toggle');
				this.classList.add("toggle");

				// Текст выбраного варианта в кнопку
				variantTitle = this.innerText;
				this.parentElement.previousElementSibling.querySelector(
					".title"
				).innerText = variantTitle;
				this.parentElement.classList.remove("toggle");
				this.parentElement.previousElementSibling.classList.remove(
					"toggle"
				);
			});
		});
	}
};
selectVariant();

let selectWindowType = function () {
	// При клике на .type-submenu__item изменяем картинку пивью, подпись для картинки и закрываем подменю с типами створок
	let typeSubmenuItem = document.querySelectorAll(".type-submenu__item");

	if (typeSubmenuItem.length > 0) {
		typeSubmenuItem.forEach(function (element) {
			element.addEventListener("click", function () {
				// Действия по смене картинки
				let imgPatch = element
					.querySelector(".type-submenu__img")
					.getAttribute("src");
				let imgName = element.querySelector("span").innerText;
				document
					.querySelector(".calculator__preview img")
					.setAttribute("src", imgPatch);
				document.querySelector(".calculator__preview-title").innerText =
					imgName;
				element.closest(".tab-btns__item").classList.remove("active");
			});
		});
	}
};

selectWindowType();

// Только для мобильных! По щелчку на тип створки пробуем делать клик на стороннем элементе, чтобы убрать ховер с кнопки и закрыть выпадашку

let closeTypeSubmenuInner = function () {
	// Только для мобильных! По клику на .tab-btns__box даем родителю класс active чтобы открыть подменю с типами створок. При вовторном клике по тому же .tab-btns__box - закрываем подменю.
	if (
		/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(
			navigator.userAgent
		)
	) {
		let tabBtnsBox = document.querySelectorAll(".tab-btns__box");

		if (tabBtnsBox.length > 0) {
			tabBtnsBox.forEach(function (element, index) {
				element.addEventListener("click", function (e) {
					e.preventDefault;

					let btnPos = index; // запоминаем позицию кнопки, на которой щелкнули

					tabBtnsBox.forEach(function (element) {
						if (element != tabBtnsBox[btnPos]) {
							element.parentElement.classList.remove("active");
						} else {
							element.parentElement.classList.toggle("active");
						}
					});
				});
			});
		}
	}
};

closeTypeSubmenuInner();

// Инициализация nouislider при загрузке страницы
let nouisliderInit = function (
	rangeClass,
	rangeInputClass,
	orientRangeSlider,
	directionRangeSlider,
	minValue,
	maxValue
) {
	let range = document.querySelector(rangeClass);
	let rangeInput = document.querySelector(rangeInputClass);

	if (!range || !rangeInput) return;

	const inputs = [rangeInput];

	noUiSlider.create(range, {
		start: 0,
		direction: directionRangeSlider,
		orientation: orientRangeSlider,
		// connect: true,
		connect: "lower",
		range: {
			min: minValue,
			max: maxValue,
		},
		step: 1,
	});

	range.noUiSlider.set(Math.round((minValue + maxValue) / 2));

	// при изменений положения элемента управления изменяем значение инпута
	range.noUiSlider.on("update", function (values, handle) {
		inputs[handle].value = parseInt(values[handle]);
	});

	// при изменении значения в input - меняем положение соответствующего элемента управления
	rangeInput.addEventListener("change", function () {
		range.noUiSlider.set([this.value, null]);
	});
};

// Инициализируем первый вызов с нужными значениями для первого выбранного элемента
nouisliderInit(
	".range-slider-01",
	".value-width",
	"horizontal",
	"ltr",
	300,
	1000
);
nouisliderInit(
	".range-slider-02",
	".value-height",
	"vertical",
	"rtl",
	1000,
	1700
);

// Для обновления минимального и максимального значений для nouislider, установка стартового значения
let nouisliderUpdate = function (rangeClass, minValue, maxValue) {
	let range = document.querySelector(rangeClass);
	range.noUiSlider.updateOptions({
		range: {
			min: minValue,
			max: maxValue,
		},
	});
	range.noUiSlider.set(Math.round((minValue + maxValue) / 2));
};

// При клике на .type-submenu__item из дата атрибутов получаем значения мин и макс для nouislider-ов, меняем стартовое значение ползунка
let getMinMaxInputValueAttribute = function () {
	let typeSubmenuItem = document.querySelectorAll(".type-submenu__item");

	if (typeSubmenuItem.length > 0) {
		typeSubmenuItem.forEach(function (element) {
			element.addEventListener("click", function () {
				let minWidth = +this.getAttribute("data-min-width");
				let maxWidth = +this.getAttribute("data-max-width");
				let minHeight = +this.getAttribute("data-min-height");
				let maxHeight = +this.getAttribute("data-max-height");

				nouisliderUpdate(".range-slider-01", minWidth, maxWidth);

				nouisliderUpdate(".range-slider-02", minHeight, maxHeight);
			});
		});
	}
};

getMinMaxInputValueAttribute();
