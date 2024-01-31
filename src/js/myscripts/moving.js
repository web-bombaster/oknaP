// функция будет перемещать блок в указанное место при определенной ширине экрана

let moving = function () {
	const windowWidth = window.innerWidth; // ширина экрана
	// console.log(windowWidth);

	// перемещение меню
	if (windowWidth <= 1024) {
		document
			.querySelector(".mobile-menu__box")
			.prepend(document.querySelector(".nav-menu"));
	} else {
		document
			.querySelector(".nav .container")
			.append(document.querySelector(".nav-menu"));
	}

	// перемещение меню
	if (windowWidth <= 660) {
		document
			.querySelector(".footer__bottom")
			.prepend(document.querySelector(".not-offer"));
	} else {
		document
			.querySelector(".footer__col.text")
			.append(document.querySelector(".not-offer"));
	}
};

moving();
window.addEventListener("resize", moving);
