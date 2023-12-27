// Вычисление позиции и размера панели мобильного меню

if (document.querySelector(".jsMobileMenuBtnToggle")) {
	let menuPanelInit = function () {

		const menuBtn = document.querySelector(".jsMobileMenuBtnToggle");
		
		// Определяем высоту мобильного меню и размещаем под шапкой
		function menuPanelPosition() {
			const heightViewport = document.documentElement.clientHeight;
			const heightHeader = document.querySelector(".header").offsetHeight;
			const heightMenuOverlay = heightViewport - heightHeader;

			const menuActive = document.querySelector(".mobile-menu.toggle");

			if (menuActive) {
				menuActive.style.height = heightViewport + "px";
				menuActive.style.paddingTop = heightHeader + "px";
			}

		}

		menuBtn.addEventListener("click", menuPanelPosition);
	};

	menuPanelInit();
}



