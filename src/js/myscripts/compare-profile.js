// функция будет перемещать блок в указанное место при определенной ширине экрана

let compareProfile = function () {
	if (document.querySelector(".compare-profile__grid")) {
		let table = document.querySelector(".compare-profile__grid"); // таблица для сдвига
		const windowWidth = window.innerWidth; // ширина экрана
		let indent; // отступ при пролистывании
		let ratio = 0; // коэффициент сдвига
		let next = document.querySelector(".compare-profile__next");
		let prev = document.querySelector(".compare-profile__prev");

        let test;

		switch (true) {
			case windowWidth <= 480 && windowWidth >= 341:
				indent = 50;
                ratio = 2;
				break;
			case windowWidth <= 340:
				indent = 100;
                ratio = 3;
				break;
			default:
				indent = 33.33333;
                ratio = 1;
				break;
		}

		next.addEventListener("click", function () {
			if (ratio >= 1) {
                test = -1 * indent * ratio;
                test = "translateX(" + test + "%)";
                table.style.transform = test;
				ratio--;
                console.log("ratio - " + ratio);
			}
		});

		prev.addEventListener("click", function () {
			if (ratio > 1) {
                table.classList.add("prev")

                test = indent * ratio;
                test = "translateX(" + test + "%)";

                table.style.transform = test;
				ratio--;
			}
		});
	}
};

compareProfile();
window.addEventListener("resize", compareProfile);
