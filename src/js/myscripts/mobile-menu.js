// Показать / скрыть мобильное меню
function mobileMenu() {
	if (document.querySelector(".jsMobileMenuBtnToggle")) {
		const menuBtn = document.querySelector(".jsMobileMenuBtnToggle");
		const body = document.querySelector("body");
		const menu = document.querySelector(".mobile-menu");

		function mobileMenuOpen() {
			menu.classList.add("toggle");
			body.classList.add("toggle");
			menuBtn.classList.add("toggle");
		}

		function mobileMenuClose() {
			menu.classList.remove("toggle");
			body.classList.remove("toggle");
			menuBtn.classList.remove("toggle");
		}

		// Показать / скрыть мобильное меню
		function menuToggle() {
			if (!menuBtn.classList.contains("toggle")) {
				mobileMenuOpen();
			} else {
				mobileMenuClose();
			}
		}

		menuBtn.addEventListener("click", menuToggle);

		window.addEventListener(
			"resize",
			function () {
				mobileMenuClose();
			},
			true
		);

		// Закрываем мобильное меню по клику вне его
		function closeMobileMenu() {
			document.addEventListener("click", function (e) {
				const target = e.target;
				const its_menu = target == menu || menu.contains(target);
				const its_btnMenu = target == menuBtn || menuBtn.contains(target);
				
				if (!its_menu && !its_btnMenu) {
					mobileMenuClose();
				}
			});
		}

		closeMobileMenu();
	}
}

mobileMenu();
