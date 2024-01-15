// Табы. Параметры: класс для кнопок табов и класс содержимого табов
const tabsToggle = function (tabBtnClass, tabContentClass) {
	if (document.querySelector(tabBtnClass)) {
		const tabsBtn = document.querySelectorAll(tabBtnClass); // все кнопки табов
		const tabsContent = document.querySelectorAll(tabContentClass); // все содержимое табов

		// Перебираем кнопки табов, по которым можем щелкнуть
		tabsBtn.forEach(function (btn, index) {
			// Вешаем событие клика на каждую кнопку
			btn.addEventListener("click", function () {
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
