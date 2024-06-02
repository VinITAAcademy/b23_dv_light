let i

const headerData = [
    {
        specialties: "Спеціальності",
        partners: "Партнери",
        contacts: "Контакти",
        ourProjects: "Наші проєкти",
        ITSuccess: "IT-Успіх",
        careerDays: "Дні кар’єри",
        veteransCoffee: "Кава ветерана",
        YEPSHackathons: "Хакатони YEPS",
        droneDepartmen: "Кафедра дронів",
        EnglishForIT: "Англійська для IT",
        smallBusinessSupport: "Підтримка малого бізнесу",
        veteransAndIDPsEmployment: "Працевлаштування ветеранів і ВПО",
        languageImg: ["dropdown_menu_ua.svg", "dropdown_menu_de.svg", "dropdown_menu_en.svg", "dropdown_menu_pl.svg"],
        languagelink: ["index-de.html", "index-en.html", "index-pl.html"],
    },
    {
        specialties: "Specialties",
        partners: "Partners",
        contacts: "Contacts",
        ourProjects: "Our projects",
        ITSuccess: "IT Success",
        careerDays: "Career Days",
        veteransCoffee: "Veteran's Coffee",
        YEPSHackathons: "YEPS Hackathons",
        droneDepartmen: "Drone Department",
        EnglishForIT: "English for IT",
        smallBusinessSupport: "Small Business Support",
        veteransAndIDPsEmployment: "Veterans and IDPs Employment",
        languageImg: ["dropdown_menu_en.svg", "dropdown_menu_de.svg", "dropdown_menu_ua.svg", "dropdown_menu_pl.svg"],
        languagelink: ["index-de.html", "index.html", "index-pl.html"],
    },
    {
        specialties: "Spezialitäten",
        partners: "Partner",
        contacts: "Kontakte",
        ourProjects: "Unsere Projekte",
        ITSuccess: "IT-Erfolg",
        careerDays: "Karriere-Tage",
        veteransCoffee: "Kaffee für Veteranen",
        YEPSHackathons: "YEPS Hackathons",
        droneDepartmen: "Abteilung Drohnen",
        EnglishForIT: "Englisch für IT",
        smallBusinessSupport: "Unterstützung für kleine Unternehmen",
        veteransAndIDPsEmployment: "Beschäftigung für Veteranen und Binnenvertriebene",
        languageImg: ["dropdown_menu_de.svg", "dropdown_menu_ua.svg", "dropdown_menu_en.svg", "dropdown_menu_pl.svg"],
        languagelink: ["index.html", "index-en.html", "index-pl.html"],
    },
    {
        specialties: "Specjalności",
        partners: "Partnerzy",
        contacts: "Kontakty",
        ourProjects: "Nasze projekty",
        ITSuccess: "Sukces IT",
        careerDays: "Dni kariery",
        veteransCoffee: "Kawa dla weteranów",
        YEPSHackathons: "Hackathony YEPS",
        droneDepartmen: "Dział dronów",
        EnglishForIT: "Angielski dla informatyków",
        smallBusinessSupport: "Wsparcie dla małych firm",
        veteransAndIDPsEmployment: "Zatrudnienie weteranów i osób wewnętrznie przesiedlonych",
        languageImg: ["dropdown_menu_pl.svg", "dropdown_menu_de.svg", "dropdown_menu_en.svg", "dropdown_menu_ua.svg"],
        languagelink: ["index-de.html", "index-en.html", "index.html"],
    },
]

const wrapper = document.getElementById("wrapper");
const title = wrapper.getAttribute("title");

switch (title) {
    case "Ukrainian":
        i = 0;
        break;
    case "English":
        i = 1;
        break;
    case "German":
        i = 2;
        break;
    case "Polish":
        i = 3;
        break;
}

class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <header id="header">
            <nav class="navbar bg-body-tertiary navbar-expand-xl">
                <div class="container-fluid">
                    <img class="foto-swallow" src="./src/images/header/swallow.svg" alt="Swallow" />
                    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas"
                        aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel">
                        <div class="offcanvas-header">
                            <div class="language-dropdown">
                                <div class="dropdown-btn-burger">
                                    <img src="./src/images/header/${headerData[i].languageImg[0]}" alt="Ukraine">
                                </div>
                                <div class="dropdown-content">
                                    <a href=${headerData[i].languagelink[0]}>
                                        <img src="./src/images/header/${headerData[i].languageImg[1]}" alt="Deutsch">
                                    </a>
                                    <a href=${headerData[i].languagelink[1]}>
                                        <img src="./src/images/header/${headerData[i].languageImg[2]}" alt="Englisch">
                                    </a>
                                    <a href=${headerData[i].languagelink[2]}>
                                        <img src="./src/images/header/${headerData[i].languageImg[3]}" alt="Polish">
                                    </a>
                                </div>
                            </div>
                            <div class="burder-menu-text1">
                                <h2>Доброго вечора, ми з</h2>
                                <div class="burger-menu-text2">
                                    <h3>України!</h3>
                                </div>
                            </div>
                            <button class="btn-close" aria-label="Close"></button>
                        </div>
                        <div class="horizontal-line"></div>
                        <div class="offcanvas-body" type="button" aria-label="Close">
                            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3 align-items-center">
                                <li class="nav-item dropdown">
                                    <a class="nav-links dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    ${headerData[i].ourProjects}
                                    </a>
                                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li class="nav-item dropdown dropdown-list"><a class="dropdown-item nav-link" href="https://it.uspih.vn.ua/">${headerData[i].ITSuccess}</a></li>
                                        <li class="nav-item dropdown dropdown-list"><a class="dropdown-item nav-link" href="https://profitday.info/">${headerData[i].careerDays}</a></li>
                                        <li class="nav-item dropdown dropdown-list"><a class="dropdown-item nav-link" href="https://kavadrive.com/#promo">${headerData[i].veteransCoffee}</a></li>
                                        <li class="nav-item dropdown dropdown-list"><a class="dropdown-item nav-link" href="http://yeps.intita.com/">${headerData[i].YEPSHackathons}</a></li>
                                        <li class="nav-item dropdown dropdown-list"><a class="dropdown-item nav-link" href="https://drone.intita.com/">${headerData[i].droneDepartmen}</a></li>
                                        <li class="nav-item dropdown dropdown-list"><a class="dropdown-item nav-link" href="https://english.intita.com/">${headerData[i].EnglishForIT}</a></li>
                                        <li class="nav-item dropdown dropdown-list"><a class="dropdown-item nav-link" href="https://getstrong.intita.com/">${headerData[i].smallBusinessSupport}</a></li>
                                        <li class="nav-item dropdown dropdown-list"><a class="dropdown-item nav-link" href="https://uspih.vn.ua/">${headerData[i].veteransAndIDPsEmployment} і ВПО</a></li>
                                    </ul>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" aria-current="page" href="#specialty">${headerData[i].specialties}</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" aria-current="page" href="#partners">${headerData[i].partners}</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" aria-current="page" href="#footer">${headerData[i].contacts}</a>
                                </li>
                            </ul>
                            <div id="language-dropdown-desktop" class="language-dropdown">
                                <div class="dropdown-btn">
                                    <img src="./src/images/header/${headerData[i].languageImg[0]}" alt="Ukraine">
                                </div>
                                <div class="dropdown-content">
                                    <a href=${headerData[i].languagelink[0]}>
                                        <img src="./src/images/header/${headerData[i].languageImg[1]}" alt="Deutsch">
                                    </a>
                                    <a href=${headerData[i].languagelink[1]}>
                                        <img src="./src/images/header/${headerData[i].languageImg[2]}" alt="Englisch">
                                    </a>
                                    <a href=${headerData[i].languagelink[2]}>
                                        <img src="./src/images/header/${headerData[i].languageImg[3]}" alt="Polish">
                                    </a>
                                </div>
                            </div>
                            <div class="horizontal-line1"></div>
                        </div>
                        <div class="icon-link">
                            <a class="nav-link"
                                href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.facebook.com%2Fvinnytsia.itacademy%2F%3Flocale%3Duk_UA" target="_blank">
                                <img class="iconc" src="./src/images/header/facebook.svg" alt="icon-facebook" /></a>
                            <a class="nav-link"
                                href="https://twitter.com/intent/tweet?url=https://twitter.com/vinnytsiaita?s=11&t=26yMelGn3njhSXsERHXerg" target="_blank">
                                <img class="iconc" src="./src/images/header/twitter.svg" alt="icon-twitter." /></a>
                            <a class="nav-link" href="https://www.instagram.com/ita.in.ua?igsh=dzJ3bTMxdTFmMGNr" target="_blank">
                                <img class="iconc" src="./src/images/header/instagram.svg" alt="icon-instagram" /></a>
                            <a class="nav-link"
                                href="viber://chat?number=+380674317424" target="_blank">
                                <img class="iconc" src="./src/images/header/basil_viber-outline.svg"
                                    alt="icon-viber" /></a>
                            <a class="nav-link"
                                href="https://api.whatsapp.com/send/?phone=+380674311921&text&type=phone_number&app_absent=0" target="_blank">
                                <img class="iconc" src="./src/images/header/bxl_whatsapp.svg" alt="icon-whatsapp" /></a>
                            <a class="nav-link" href="https://t.me/IT_Academy_Vinnytsia" target="_blank">
                                <img class="iconc" src="./src/images/header/ph_telegram-logo.svg"
                                    alt="icon-telegram" /></a>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
        `;

    }
}
customElements.define("header-component", Header);
