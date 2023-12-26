if (document.querySelector(".jsMobileMenuBtnToggle")) {
	let menuPanelInit = function () {
		const menuBtn = document.querySelector(".jsMobileMenuBtnToggle");

		// Определяем высоту мобильного меню и размещаем под шапкой
		function menuPanelPosition() {
			const heightViewport = document.documentElement.clientHeight;
			const heightHeader = document.querySelector(".header").offsetHeight;
			const heightMenuOverlay = heightViewport - heightHeader;
			let posTop = window.scrollY;

            console.log("posTop - " + posTop);
            console.log("window.scrollY - " + window.scrollY);


			const menuActive = document.querySelector(".mobile-menu.toggle");

			if (menuActive) {
				menuActive.style.height = heightMenuOverlay + "px";
				menuActive.style.top = posTop + heightHeader + "px";
			}

		}

		menuBtn.addEventListener("click", menuPanelPosition);
	};

	menuPanelInit();
}
