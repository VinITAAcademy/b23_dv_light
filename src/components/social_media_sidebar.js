class Social extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <div class="social">
            <ul id="social-list" class="social-list">
                <li class="social-list__item">
                    <a href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.facebook.com%2Fvinnytsia.itacademy%2F%3Flocale%3Duk_UA" target="_blank">
                        <img src="./src/images/Main_block/socials/facebook.svg" alt="facebook" />
                    </a>
                </li>
                <li class="social-list__item">
                    <a href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fx.com%2Fi%2Fflow%2Flogin%3Fredirect_after_login%3D%252FINTITA_EDU" target="_blank">
                        <img src="./src/images/Main_block/socials/twitter.svg" alt="twitter" />
                    </a>
                </li>
                <li class="social-list__item">
                    <a href="https://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fintita%2Fabout%2F&title=&summary=&source=" target="_blank">
                        <img src="./src/images/Main_block/socials/linkedin.svg" alt="linkedin" />
                    </a>
                </li>
                <li class="social-list__item">
                    <a href="https://api.whatsapp.com/send/?phone=+380674311921text&type=phone_number&app_absent=0" target="_blank">
                        <img src="./src/images/Main_block/socials/whatsapp.svg" alt="whatsapp" />
                    </a>
                </li>
                <li class="social-list__item">
                    <a href="viber://chat?number=+380674317424" target="_blank">
                        <img src="./src/images/Main_block/socials/viber.svg" alt="viber" />
                    </a>
                </li>
                <li class="social-list__item">
                    <a href="https://t.me/IT_Academy_Vinnytsia" target="_blank">
                        <img src="./src/images/Main_block/socials/telegram.svg" alt="telegram" />
                    </a>
                </li>
            </ul>
        </div>
        `;
        // language dropdown start
        const languageDropdownDesktop = document.getElementById("language-dropdown-desktop");
        const socialList = document.getElementById("social-list");
        const screenWidth = window.screen.width;

        if (screenWidth > 1023 && screenWidth < 1799) {
            languageDropdownDesktop.addEventListener("mouseover", () => {
                socialList.classList.add("social-list-active");
            });
            languageDropdownDesktop.addEventListener("mouseout", () => {
                socialList.classList.remove("social-list-active");
            });
        }
        // language dropdown end
    }
}
customElements.define("social-media-sidebar", Social);
