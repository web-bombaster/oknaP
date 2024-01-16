// функция будет перемещать блок в указанное место при определенной ширине экрана

let compareProfile = function () {
	if (document.querySelector(".compare-profile__grid")) {
		const windowWidth = window.innerWidth; // ширина экрана

		let table = document.querySelector(".compare-profile__grid"); // таблица для сдвига
		let next = document.querySelector(".compare-profile__next");
		let prev = document.querySelector(".compare-profile__prev");
		let btnsNav = document.querySelectorAll(".compare-profile__pagination span");

		let indent; // отступ при пролистывании одного столбца
		let countIndent = 1; // коэффициент сдвига

		let steps; // количество возможных сдвигов
		let stepsNext; // количество возможных сдвигов Next
		let stepsPrev; // количество возможных сдвигов Prev



		let offsetGrid = 0; // Вычисленное значение сдвига для таблицы

		// Смещаем таблицу на нужное значение
		function gridTransform() {
			offsetGrid = "translateX(" + offsetGrid + "%)";
			table.style.transform = offsetGrid;
		};
		gridTransform();

		function nextBtnEnable() {
			next.style.cursor = 'pointer';
			next.style.opacity = '1';
		};

		function prevBtnEnable() {
			prev.style.cursor = 'pointer';
			prev.style.opacity = '1';
		};

		function nextBtnDisable() {
			next.style.opacity = '.6';
			next.style.cursor = 'initial';
		};

		function prevBtnDisable() {
			prev.style.opacity = '.6';
			prev.style.cursor = 'initial';
		};

		// Даем класс активности для пагинации при кликах по стрелкам
		function paginationBtnActive(numer) {
			btnsNav.forEach(function(element, index) {
				element.classList.remove('active');
			});
			btnsNav[numer].classList.add('active');
		};

		switch (true) {
			case windowWidth <= 480 && windowWidth >= 341:
				indent = 50;
				steps = 2;
				break;

			case windowWidth <= 340:
				indent = 100;
				steps = 3;
				break;

			default:
				indent = 33.33333;
				steps = 1;
				break;
		}


		stepsNext = steps; // инизиализация количества возможных сдвигов Next
		stepsPrev = steps - stepsNext;

		console.log("steps - " + steps);
		console.log("stepsNext - " + stepsNext);
		console.log("stepsPrev - " + stepsPrev);

		prevBtnDisable();

		next.addEventListener("click", function () {
			if (stepsNext >= 1) {
				offsetGrid = -1 * indent * countIndent;
				gridTransform();

				stepsNext--;
				stepsPrev = steps - stepsNext;
				countIndent++;

				console.log("stepsNext - " + stepsNext);
				console.log("stepsPrev - " + stepsPrev);

			};

			prevBtnEnable();

			if (stepsNext===0) {
				nextBtnDisable();
			};

			paginationBtnActive(stepsPrev);
		});

		prev.addEventListener("click", function () {
			if (stepsNext < steps) {
				countIndent--;
				stepsNext++;
				stepsPrev = steps - stepsNext;

				offsetGrid = -1 * indent * (countIndent - 1);
				gridTransform();
			};

			nextBtnEnable();

			if (stepsPrev===0) {
				prevBtnDisable();
			};

			paginationBtnActive(stepsPrev);
		});


		btnsNav.forEach(function(element, index) {
			element.addEventListener('click', function(e) {
				// У соседей удаляем класс активности
				const adjacentNtns = this.parentNode.querySelectorAll('span');
				adjacentNtns.forEach(function(element) {
					element.classList.remove('active');
				});
				this.classList.add('active');

				offsetGrid = -1 * indent * index;
				gridTransform();

				nextBtnEnable();
				prevBtnEnable();

				if (index == 0) {
					prevBtnDisable();
					nextBtnEnable();
				};

				if (index == steps) {
					nextBtnDisable();
					prevBtnEnable();
				};
			});
		});
	};
};

compareProfile();
window.addEventListener("resize", compareProfile);
