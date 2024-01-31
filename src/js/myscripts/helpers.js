// Использую для аккордионов, faq
const tabsToggle = function (tabBtnClass, tabContentClass) {
	if (document.querySelector(tabBtnClass)) {
		const tabsBtn = document.querySelectorAll(tabBtnClass); // все кнопки табов
		const tabsContent = document.querySelectorAll(tabContentClass); // все содержимое табов

		// Перебираем кнопки табов, по которым можем щелкнуть
		tabsBtn.forEach(function (btn, index) {
			// Вешаем событие клика на каждую кнопку
			btn.addEventListener("click", function (e) {
				e.preventDefault();
				if (btn.classList.contains("toggle")) {
					tabsBtn[index].classList.remove("toggle");
					tabsContent[index].classList.remove("toggle");
				} else {
					// у кнопки, по которой щелкнули, добавить класс активности
					tabsBtn[index].classList.add("toggle");
					// у содержимого с этим индексом добавить класс активности
					tabsContent[index].classList.add("toggle");
				}
			});
		});
	}
};

// tabsToggle(".footer-top__title", ".footer-menu");
tabsToggle(".footer-top__title", ".footer-top__col");
tabsToggle(".faq-item__title", ".questions-faq__item");
tabsToggle(".nav-menu__link--open-panel", ".nav-menu__submenu");

// Табы. Параметры: класс для кнопок табов и класс содержимого табов
const tabsToggle2 = function (tabBtnClass, tabContentClass) {
	if (document.querySelector(tabBtnClass)) {
		const tabsBtn = document.querySelectorAll(tabBtnClass); // все кнопки табов
		const tabsContent = document.querySelectorAll(tabContentClass); // все содержимое табов

		// Перебираем кнопки табов, по которым можем щелкнуть
		tabsBtn.forEach(function (btn, index) {
			// Вешаем событие клика на каждую кнопку
			btn.addEventListener("click", function () {
				// у всех кнопок одного родителя убрать класс активности
				tabsBtn[index].parentNode
					.querySelectorAll(tabBtnClass)
					.forEach(function (element) {
						element.classList.remove("toggle");
					});

				// у кнопки, по которой щелкнули, добавить класс активности
				tabsBtn[index].classList.add("toggle");

				// у каждого содержимого одного родителя удалить класс активности
				tabsContent[index].parentNode
					.querySelectorAll(tabContentClass)
					.forEach(function (element) {
						element.classList.remove("toggle");
					});

				// у содержимого с этим индексом добавить класс активности
				tabsContent[index].classList.add("toggle");
			});
		});
	}
};

tabsToggle2(".windes-tabs__btn", ".windes-tabs__content");

// по клику на элемент у всех подобных убираем .toggle, а у выбранного добавляем его
let classToggleForElement = function(classElement) {
	if (document.querySelector(classElement)) {
		let items = document.querySelectorAll(classElement);

		items.forEach(function(element, index) {
			element.addEventListener('click', function() {
				items.forEach(function(element) {
					element.classList.remove('toggle');
				});
				this.classList.toggle('toggle');
			});
		});
	};
};

classToggleForElement(".lamination-item__view");
classToggleForElement(".handles-item__view");

// щелчок по элементу
// находим нужный дочерний
// забираем его фон
// задаем такой же фон для нужного элемента
// параметры: элемент по которому щелкаем, элемент, у которого забараем фон, элемент, элемент, которому задаем фон
const windowDesigner = function (element, preview, target) {
	if (document.querySelector(element) && document.querySelector(preview) && document.querySelector(target)) {
		let elements = document.querySelectorAll(element);
		let previews = document.querySelectorAll(preview);
		let bgImg;
		elements.forEach(function(element) {
			element.addEventListener('click', function() {
				bgImg = this.querySelector(preview).getAttribute('style');
				document.querySelector(target).setAttribute('style', bgImg);
			});
		});
	};
};

windowDesigner(".lamination-item", ".lamination-item__view", ".laminator-texture");
windowDesigner(".handles-item", ".handles-item__view", ".laminator-handle__01");
windowDesigner(".handles-item", ".handles-item__view", ".laminator-handle__02");