let isValid = false;
window.addEventListener('DOMContentLoaded', function () {

    var video = this.document.querySelector('.videoPreview');
    var videoImage = document.getElementById('play-button');

    video.addEventListener('click', function () {

        if (video.classList.contains('ready')) {
            return;
        }

        video.classList.add('ready');

        video.insertAdjacentHTML('afterbegin', '<iframe class="videoPreview" src="https://www.youtube.com/embed/pmrIlYBWP20?si=fEDOS5Ct8-rmn2I9&autoplay=1&rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>');

        videoImage.style.display = 'none';
    });
    $(".show-all").click(function () {
        $(".preview_icon").toggleClass("d-none");
        $(".all_icons").toggleClass("d-none");
        var buttonText = $(".all_icons").hasClass("d-none") ? "Показати всі..." : "Показати менше";
        $(".show-all").text(buttonText);
    });
    jQuery('#phone-participant, #phone-partner, #phone-mentor').inputmask({
        mask: '+380 (99) 999-99-99',
        greedy: false
    });
    $("#phone-participant, #phone-partner, #phone-mentor").on("mouseenter", function () {
        $(this).attr("placeholder", "");
    });

    const formParticipant = document.getElementById("form-participant");
    const formPartner = document.getElementById("form-partner");
    const formMentor = document.getElementById("form-mentor");
    const formButtons = document.querySelectorAll('.button-submit');

    formButtons.forEach(button => {
        button.setAttribute('disabled', 'disabled');
    });

    const formInputsParticipant = formParticipant.querySelectorAll('.required');
    const formInputsPartner = formPartner.querySelectorAll('.required');
    const formInputsMentor = formMentor.querySelectorAll('.required');

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
    addEventListenersAndValidate(formInputsMentor, formMentor, formButtons, "submit");

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
            isValid = true;
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

    $(document).ready(function () {
        $(window).scroll(function () {
          if ($(this).scrollTop() > $(window).height()) {
            $(".scroll-to-top-btn").fadeIn();
          } else {
            $(".scroll-to-top-btn").fadeOut();
          }
        });
    
        $(".scroll-to-top-btn").hide();
        $(".scroll-to-top-btn").click(function () {
          $("html, body").animate({ scrollTop: 0 }, 800);
          return false;
        });
      });
});

document.addEventListener('DOMContentLoaded', function () {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const offcanvasNavbar = document.getElementById('offcanvasNavbar');
    const btnClose = document.querySelector('.btn-close');
    const offcanvasBody = document.querySelector('.offcanvas-body');
    let scrollPosition = 0;

    // Opening burger menu
    navbarToggler.addEventListener('click', function () {
        // Save the current scroll position
        scrollPosition = window.pageYOffset;
        offcanvasNavbar.classList.add('show');
        // Page scroll lock
        document.body.style.overflow = 'hidden';
    });

    // Closing burger menu
    function closeOffcanvasNavbar() {
        offcanvasNavbar.classList.remove('show');
        // Unblocking page scrolling
        document.body.style.overflow = '';
        // Restore scroll position
        window.scrollTo(0, scrollPosition);
    }

    btnClose.addEventListener('click', closeOffcanvasNavbar);

    // Closing the burger menu when clicking on the pages
    offcanvasBody.addEventListener('click', function (event) {
        if (event.target === offcanvasBody) {
            closeOffcanvasNavbar();
        }
    });

    // Closing the burger menu when clicking on the menu item
    offcanvasBody.querySelectorAll('.nav-link').forEach(function (link) {
        link.addEventListener('click', closeOffcanvasNavbar);
    });

    // Unlocking the page when clicking on the page
    document.addEventListener('click', function () {
    });
});


window.addEventListener('load', function () {
    let loaderWrapper = document.querySelector('.loader-background');
    loaderWrapper.style.display = 'none';
});


document.addEventListener('DOMContentLoaded', function () {

    function validateEmail(email) {
        const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/;
        return emailRegex.test(email);
    }

    function validatePhone(phone) {
        const phoneRegex = /^\+380 \(\d{2}\) \d{3}-\d{2}-\d{2}$/;
        return phoneRegex.test(phone);
    }

    function validatePhoneLength(phone) {
        return phone.replace(/\D/g, '').length === 12;
    }

    function formValidate(input) {
        const value = input.value.trim();
        const parentElement = input.parentElement;

        parentElement.querySelectorAll('.error-message').forEach(function (error) {
            error.remove();
        });

        if (input.classList.contains('email')) {
            if (!validateEmail(value)) {
    
                input.classList.add('error');

                const errorMessage = document.createElement('span');
                errorMessage.className = 'error-message';
                errorMessage.textContent = 'Email введено некоректно';
                input.insertAdjacentElement('afterend', errorMessage);
                return false;
            }
        }

        if (input.classList.contains('phone')) {
            if (!validatePhone(value)) {

                input.classList.add('error');

                const errorMessage = document.createElement('span');
                errorMessage.className = 'error-message';
                errorMessage.textContent = 'Некоректний формат телефонного номеру';
                input.insertAdjacentElement('afterend', errorMessage);
                return false;
            }
      
            if (!validatePhoneLength(value)) {
        
                input.classList.add('error');
        
                const errorMessage = document.createElement('span');
                errorMessage.className = 'error-message';
                errorMessage.textContent = 'Номер телефону має містити 13 символів';
                input.insertAdjacentElement('afterend', errorMessage);
                return false;
            }
        }

        input.classList.remove('error');
        return true;
    }

    document.querySelectorAll('.required').forEach(function (input) {
        input.addEventListener('input', function () {
            formValidate(input);
        });

        input.addEventListener('blur', function () {
            formValidate(input);
        });
    });

    document.querySelectorAll('form').forEach(function (form) {
        form.addEventListener('submit', function (event) {
            event.preventDefault();
            let isValid = true;
            form.querySelectorAll('.required').forEach(function (input) {
                if (!formValidate(input)) {
                    isValid = false;
                }
            });
            if (isValid) {
                form.submit();
            }
        });
    });

    document.querySelectorAll('.phone').forEach(function (input) {
        input.value = '+380 (__) __-__-__';
    });
});



window.onload = function () {
    listenEntrantSubmit();
};
function getElement(selector) {
    return document.querySelector(selector);
}
function onSubmit(event) {
    event.preventDefault();
    console.log(event)
    grecaptcha.ready(function () {
        grecaptcha.execute('6LcwRRUaAAAAADavxcmw5ShOEUt1xMBmRAcPf6QP', { action: 'submit' }).then(function (token) {
            const formElement = event.target.closest('.modal-body');
            if (isValid) {
                const actionUrl = 'https://intita.com/api/v1/entrant';
                const entrantFormData = new FormData(formElement);
                entrantFormData.append('g-recaptcha-response', token);
                const http = new XMLHttpRequest();
                http.open('POST', actionUrl, true);
                http.onreadystatechange = function () {
                    if (+http.readyState === 4 && +http.status === 201) {
                        entrantSubmitResponse("Дякуємо за Вашу заявку! Очікуйте зворотнього зв’язку.");
                    } else if (+http.status === 400) {
                        entrantSubmitResponse('Помилка сервера. Зробіть ще одну спробу');
                    }
                }
                http.onload = function () {
                    if (+http.status !== 201) {
                        entrantSubmitResponse('Помилка сервера. Зробіть ще одну спробу');
                        return;
                    }
                    entrantSubmitResponse("Дякуємо за Вашу заявку! Очікуйте зворотнього зв’язку.");
                }
                http.send(entrantFormData);
            } else {
                let index = 0;
                for (let el of formElement.elements) {
                    const attrName = el.getAttribute('name');
                    if (['first_name', 'email', 'phone'].includes(attrName)) {
                        if (el.value) {
                            el.classList.remove('input-error');
                        } else {
                            el.classList.add('input-error');
                            if (index === 0) { el.scrollIntoView() }
                            index++;
                        }
                    }
                }

            }
        });
    });
}
function listenEntrantSubmit() {
    const partnerButton = document.getElementById('parner-button');
    const participantButton = document.getElementById('participant-botton');
    const mentorButton = document.getElementById('mentor-botton');
    partnerButton.addEventListener('click', onSubmit);
    participantButton.addEventListener('click', onSubmit);
    mentorButton.addEventListener('click', onSubmit);
}
function entrantSubmitResponse(errorSt) {
    const elementResponse = getElement('#entrants_response');
    elementResponse.innerText = errorSt;
    scroll(0, 0);
}

// banner start
let bannerButtonWrapper = document.getElementById("banner-button-wrapper");
let bannerButtonFrame = document.getElementById("banner-button-frame");
let bannerButton = document.getElementById("banner-button");

bannerButtonWrapper.addEventListener("mouseover", () => {
    bannerButton.classList.add("banner-button-hover");
    bannerButtonFrame.classList.add("banner-button-frame-hover");
});

bannerButtonWrapper.addEventListener("mouseout", () => {
    bannerButton.classList.remove("banner-button-hover");
    bannerButtonFrame.classList.remove("banner-button-frame-hover");
});

bannerButtonWrapper.addEventListener("mousedown", () => {
    bannerButton.classList.add("banner-button-active");
    bannerButtonFrame.classList.add("banner-button-frame-active");
});

bannerButtonWrapper.addEventListener("mouseup", () => {
    bannerButton.classList.remove("banner-button-active");
    bannerButtonFrame.classList.remove("banner-button-frame-active");
});
// banner end
