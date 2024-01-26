window.addEventListener('DOMContentLoaded', function () {

    var video = this.document.querySelector('.videoPreview');

    video.addEventListener('click', function () {

        if (video.classList.contains('ready')) {
            return;
        }

        video.classList.add('ready');

        video.insertAdjacentHTML('afterbegin', '<iframe class="videoPreview" src="https://www.youtube.com/embed/pmrIlYBWP20?si=fEDOS5Ct8-rmn2I9&autoplay=1&rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>');

    });
    $(".show-all").click(function () {
        $(".preview_icon").toggleClass("d-none");
        $(".all_icons").toggleClass("d-none");
        var buttonText = $(".all_icons").hasClass("d-none") ? "Показати всі..." : "Показати менше";
        $(".show-all").text(buttonText);
    });
    jQuery('#phone-participant, #phone-partner').inputmask({
        mask: '+38 (099) 999-99-99',
        greedy: false
    });

    const formParticipant = document.getElementById("form-participant");
    const formPartner = document.getElementById("form-partner");
    const formButtons = document.querySelectorAll('.button-submit');

    formButtons.forEach(button => {
        button.setAttribute('disabled', 'disabled');
    });

    const formInputsParticipant = formParticipant.querySelectorAll('.required');
    const formInputsPartner = formPartner.querySelectorAll('.required');

    function addEventListenersAndValidate(inputs, form, buttons, eventType) {
        inputs.forEach(input => {
            input.addEventListener('input', function () {
                formValidate(form, buttons);
            });

            input.addEventListener('blur', function () {
                formValidate(form, buttons);
            });
        });

        form.addEventListener(eventType, function (event) {
            event.preventDefault();
            formValidate(form, buttons);
        });
    }

    addEventListenersAndValidate(formInputsParticipant, formParticipant, formButtons, "submit");
    addEventListenersAndValidate(formInputsPartner, formPartner, formButtons, "submit");

    function formValidate(form, buttons) {
        let error = 0;
        let formRequired = form.querySelectorAll(".required");

        for (let i = 0; i < formRequired.length; i++) {
            const input = formRequired[i];
            formRemoveError(input);

            if (input.value.trim() === "") {
                formAddError(input);
                error++;
            } else {
                if (input.classList.contains("email")) {
                    if (testEmail(input)) {
                        formAddError(input);
                        error++;
                    }
                } else if (input.classList.contains("surname")) {
                    if (testSurname(input)) {
                        formAddError(input);
                        error++;
                    }
                }
                else if (input.classList.contains("phone")) {
                    if (testPhone(input)) {
                        formAddError(input);
                        error++;
                    }
                }
                else if (input.classList.contains("name")) {
                    if (testName(input)) {
                        formAddError(input);
                        error++;
                    }
                }
            }
        }
        if (error > 0) {
            buttons.forEach(button => {
                button.setAttribute('disabled', 'disabled');
            });
        } else {
            buttons.forEach(button => {
                button.removeAttribute('disabled');
            });
        }
        return error;
    }

    function formAddError(input) {
        input.parentElement.classList.add("error");
        input.classList.add("error");
    }
    function formRemoveError(input) {
        input.parentElement.classList.remove("error");
        input.classList.remove("error");
    }
    function testEmail(input) {
        return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
    }
    function testName(input) {
        const minLength = 2;
        const maxLength = 30;
        const namePattern = /^[A-Za-zА-Яа-яЁёіІїЇґҐґ'-`]+$/;
        const value = input.value.trim();
        if (value.length >= minLength && value.length <= maxLength && namePattern.test(value)) {
            return false;
        } else {
            return true;
        }
    }
    function testSurname(input) {
        const minLength = 2;
        const maxLength = 20;
        const namePattern = /^[A-Za-zА-Яа-яЁёіІїЇґҐґ']+$/;
        const value = input.value.trim();
        if (value.length >= minLength && value.length <= maxLength && namePattern.test(value)) {
            return false;
        } else {
            return true;
        }
    }
    function testPhone(input) {
        const value = input.inputmask.unmaskedvalue();

        if (/^\d{9}$/.test(value)) {
            return false; // Поле містить рівно 10 цифр
        } else {
            return true; // Поле не містить 10 цифр або містить нецифрові символи
        }
    }
    function resetValidation(form) {
        let formRequired = document.querySelectorAll(".req");

        for (let i = 0; i < formRequired.length; i++) {
            const input = formRequired[i];
            formRemoveError(input);
        }
    }
});