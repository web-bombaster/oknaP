// Показать / скрыть в мобильном меню подменю
function subMenuToggle(element) {
	const subMenuBtn = document.querySelectorAll('.mobile-menu.nav-menu__link--open-panel'); // ссылка для открытия подменю
	const navListMobile = document.querySelector('.mobile-menu__box'); // сюда будем складывать обертки подменюшек
	let zIndexValue = 100;


	// По клику на кнопку для субменю будем формировать и показывать подменю
	const subBtnClick = (e) => {

		// Формируем обертку для подменю
		const subMenuWrapper = document.createElement('div');
		zIndexValue++;
		subMenuWrapper.classList.add('nav__list'); // обертка для подменю
		subMenuWrapper.classList.add('z-index'); // обертка для подменю
		subMenuWrapper.classList.add('z-index-' + zIndexValue); // обертка для подменю
		// subMenuWrapper.classList.remove('nav__list');
		navListMobile.append(subMenuWrapper); // добавляем обртку к основному меню
		subMenuWrapper.style.zIndex = zIndexValue; // задаем z-index для слоя с подменю

		// Формируем хедер для подменю с кнопкой назад
		const subMenuHeader = document.createElement('div');
		subMenuHeader.classList.add('submenu__header'); // обертка для кноки назад
		const textForPrevLink = e.srcElement.textContent; // текст для кноки назад
		subMenuHeader.textContent = textForPrevLink;
		subMenuWrapper.append(subMenuHeader);

		// Формируем подменю
		// const newSubMenu = e.target.parentNode.cloneNode(true);
		let newSubMenu = document.createElement('div');
		let parentSubmenuList;
		if (zIndexValue == 101) {
			parentSubmenuList = '.nav__col';
		}
		if (zIndexValue == 102) {
			parentSubmenuList = '.submenu__item';
		}
		// const newSubMenuItem = e.target.parentNode.querySelectorAll('.nav__col');
		const newSubMenuItem = e.target.parentNode.querySelectorAll(parentSubmenuList);
		newSubMenuItem.forEach(element => {
			const temp = element.cloneNode(true);
			newSubMenu.append(temp);
			// newSubMenu.append(element);
		});
		subMenuWrapper.append(newSubMenu);

		// Закрываем подменю для возврата к родителю
		subMenuHeader.addEventListener("click", () => {
			setTimeout(() => { subMenuWrapper.classList.toggle('active'); }, 100); // класс, чтобы выдвигать меню
			setTimeout(() => { subMenuWrapper.remove(); }, 500); // удаляем подменю, чтобы не пложить копии
			zIndexValue--;
		});

		// subMenuWrapper.style.top = 60 + 'px'; // добавляем отступ
		// класс, чтобы выдвигать меню
		setTimeout(() => { subMenuWrapper.classList.add('active'); }, 100); // класс, чтобы выдвигать меню
	};

	// Для каждой кноппки, открывающей панель подменю, отслеживаем клик - для показа подменю второго уровня
	subMenuBtn.forEach(element => {
		element.addEventListener("click", subBtnClick);
	});

	// Для каждой кноппки, открывающей подменю, отслеживаем клик - для показа подменю третьего уровня
	let submenu3Level = document.querySelectorAll('.nav__list--mobile .nav__item--title .nav__submenu');
	submenu3Level.forEach(element => {
		let titleSubmenu3Level = element.previousElementSibling;
		// console.log(titleSubmenu3Level);
		titleSubmenu3Level.addEventListener("click", subBtnClick);
		titleSubmenu3Level.addEventListener("click", () => {
			// console.log('titleSubmenu3Level');
		});
	});


	// subMenuBtn.forEach(element => {
	// 	element.addEventListener("click", subBtnClick);
	// });
}

subMenuToggle();
window.addEventListener("resize", subMenuToggle);