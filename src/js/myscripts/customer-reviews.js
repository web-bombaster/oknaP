// Показать / скрыть скрытый текст отзыва
if (document.querySelector(".cr-item__text-more")) {
	const textMore = document.getElementsByClassName('cr-item__text-more');
    for (let element of textMore) {
        // console.log(element);

        element.addEventListener("click", () => {
			element.parentNode.firstElementChild.classList.toggle("active");
			if (element.textContent == "Скрыть") {
				element.textContent = "Читать далее";
			} else {
				element.textContent = "Скрыть";
			};
		});
    };
};
