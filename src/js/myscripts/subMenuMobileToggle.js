// Показать / скрыть в мобильном меню подменю
function subMenuToggle(element) {
	const subMenuBtn = document.querySelectorAll('.mobile-menu .nav-menu__link--open-panel'); // ссылка для открытия подменю
	const navListMobile = document.querySelector('.mobile-menu__wrapper'); // сюда будем складывать обертки подменюшек
	let zIndexValue = 100;

	let heightHeader = document.querySelector(".header").offsetHeight;



	// По клику на кнопку для субменю будем формировать и показывать подменю
	const subBtnClick = (e) => {

		e.preventDefault();

		// Формируем обертку для подменю
		const subMenuWrapper = document.createElement('div');
		zIndexValue++;
		subMenuWrapper.classList.add('submenu-wrapper'); // обертка для подменю
		subMenuWrapper.classList.add('z-index'); // обертка для подменю
		subMenuWrapper.classList.add('z-index-' + zIndexValue); // для каждого уровня подменю счетчик у класса будет увеличиваться
		// subMenuWrapper.classList.remove('nav__list');
		navListMobile.append(subMenuWrapper); // добавляем обртку к основному меню

		subMenuWrapper.style.zIndex = zIndexValue;
		subMenuWrapper.style.paddingTop = heightHeader + 35 + 'px';
		
		console.log("heightHeader - " + heightHeader);
		console.log("zIndexValue - " + zIndexValue);

		// Формируем хедер для подменю с кнопкой назад
		const subMenuHeader = document.createElement('div');
		subMenuHeader.classList.add('submenu__header'); // обертка для кноки назад
		const textForPrevLink = e.srcElement.textContent; // текст для кноки назад
		subMenuHeader.textContent = textForPrevLink;
		subMenuWrapper.append(subMenuHeader);

		// Формируем подменю
		// const newSubMenu = e.target.parentNode.cloneNode(true);
		let newSubMenu = e.target.parentNode.querySelector('.nav-menu__submenu').cloneNode(true);
		subMenuWrapper.append(newSubMenu);

		// const heightSubMenu = subMenuWrapper.offsetHeight;
		// console.log("heightSubMenu - " + heightSubMenu);



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

}

subMenuToggle();
window.addEventListener("resize", subMenuToggle);