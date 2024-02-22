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
				console.log("btnPosition - " + btnPosition);

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

// Только для мобильных! По щелчку на тип створки пробуем делать клик на стороннем элементе, чтобы убрать ховер с кнопки и закрыть выпадашку

let closeTypeSubmenuInner = function () {



    // Только для мобильных! По клику на .tab-btns__box даем родителю класс active чтобы открыть подменю с типами створок. При вовторном клике по тому же .tab-btns__box - закрываем подменю.
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
        let typeSubmenuItem = document.querySelectorAll(".type-submenu__item");
        let tabBtnsBox = document.querySelectorAll(".tab-btns__box");

        if (tabBtnsBox.length > 0) {
            tabBtnsBox.forEach(function(element, index) {
                element.addEventListener("click", function(e) {
                    e.preventDefault;
                    let btnPos = index;

                    tabBtnsBox.forEach(function(element) {
                        if (element != tabBtnsBox[btnPos]) {
                            element.parentElement.classList.remove('active');
                        } else {
                            element.parentElement.classList.toggle('active');
                        };
                    });
                });
            });
        };

        // При клике на .type-submenu__item изменяем картинку пивью и закрываем подменю с типами створок
        if (typeSubmenuItem.length > 0) {
            typeSubmenuItem.forEach(function (element) {
                element.addEventListener("click", function () {
                    // Действия по смене картинки
                    let imgPatch = element.querySelector('.type-submenu__img').getAttribute('src');
                    document.querySelector('.calculator__preview img').setAttribute('src', imgPatch);

                    element.closest('.tab-btns__item').classList.remove('active');
                });
            });
        };

    };
};

closeTypeSubmenuInner();
