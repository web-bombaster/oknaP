// Написать: При открытии селекта написать закрытие других


// по щелчку на кнопку ctktrnfселекта выпадают доступные варианты выбора
let selectToggle = function() {
    if (document.querySelector('.calculator-select__current')) {
        // const btnSelect = document.querySelector('.calculator-select__current');
        const btnsSelect = document.querySelectorAll('.calculator-select__current');

        btnsSelect.forEach(function (btn, index) {
            btn.addEventListener('click', function() {

                let btnPosition = index;
                console.log("btnPosition - " + btnPosition);

                btnsSelect.forEach(function (btn, index) {
                    if (btn != btn[btnPosition]) {
                        btn.classList.remove('toggle');
                        btn.nextElementSibling.classList.remove('toggle');
                    } else {
                        // btn[btnPosition].classList.toggle('toggle');
                        // btn.nextElementSibling.classList.toggle('toggle');
                    };
                });

                // this.classList.toggle('toggle');
                // this.nextElementSibling.classList.toggle('toggle');

                if (btnsSelect[btnPosition].classList.contains('toggle')) {
                    // this.nextElementSibling.classList.add('toggle');
                    btnsSelect[btnPosition].classList.remove('toggle');
                    btnsSelect[btnPosition].nextElementSibling.classList.remove('toggle');
                } else {
                    btnsSelect[btnPosition].classList.add('toggle');
                    btnsSelect[btnPosition].nextElementSibling.classList.add('toggle');
                };

                // btnsSelect[btnPosition].classList.toggle('toggle');
                // btnsSelect[btnPosition].nextElementSibling.classList.toggle('toggle');

                // btnsSelect[btnPosition].classList.toggle('toggle');
                // if (btnsSelect[btnPosition].classList.contains('toggle')) {
                //     btnsSelect[btnPosition].nextElementSibling.classList.add('toggle');
                // } else {
                //     btnsSelect[btnPosition].nextElementSibling.classList.remove('toggle');
                // };



                // this.classList.toggle('toggle');
                // if (this.classList.contains('toggle')) {
                //     this.nextElementSibling.classList.add('toggle');
                // } else {
                //     this.nextElementSibling.classList.remove('toggle');
                // };


            });
        });

    };
};
selectToggle();

// по щелчку вариант
let selectVariant = function() {
    if (document.querySelector('.variants-item')) {
        const btnVariants = document.querySelectorAll('.variants-item');
        let variantTitle;
        // по клику на вариант сортировки у всех убираем .toggle, а у активного добавляем его
        btnVariants.forEach(function(element) {
            element.addEventListener('click', function() {
                element.parentElement.querySelectorAll('.variants-item').forEach(function(element) {
                    element.classList.remove('toggle');
                });

                // this.classList.toggle('toggle');
                this.classList.add('toggle');

                // Текст выбраного варианта в кнопку
                variantTitle = this.innerText;
                this.parentElement.previousElementSibling.querySelector('.title').innerText = variantTitle;
                this.parentElement.classList.remove('toggle');
                this.parentElement.previousElementSibling.classList.remove('toggle');
            });
        });
    };
};
selectVariant();