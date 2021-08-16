const body = document.querySelector("body");
const header = document.querySelector("header");
const logo = document.querySelector("header > a#logo");
const navButton = document.querySelector("header > button#primary-nav-btn");
const navbar = document.querySelector("header > nav#primary-nav");
const navItems = document.querySelectorAll("header > nav#primary-nav > ul > li > a");
const lastNavItem = document.querySelector("header > nav#primary-nav > ul > li:last-child > a");
const login = document.querySelector("header > a#login-menu");
const langLabel = document.querySelector("form#lang-form > label");
const lang = document.querySelector("form#lang-form > select#lang");
const langSubmit = document.querySelector("form#lang-form > button#lang-submit");
const searchLabel = document.querySelector("form#search-form > label");
const searchInput = document.querySelector("input#search-input");
const searchButton = document.querySelector("form#search-form > button.submit-button");
const main = document.querySelector("body > main");

function tabIndexSetter () {
    const n = navItems.length;
    if (window.innerWidth > 768) {
        for (let i = 0; i < n; i++) {
            navItems[i].setAttribute("tabindex", "0");
        }
        if (navButton.classList.contains("show-navbar")) {
            navButton.classList = [];
        }
    } else {
        if (! navButton.classList.contains("show-navbar")) {
            for (let i = 0; i < n; i++) {
                navItems[i].setAttribute("tabindex", "-1");
            }
        }
    }
};

function hardCoding(langName) {
    if (langName == "fa") {
        navItems[0].innerText = "خانه";
        navItems[1].innerText = "مطالب";
        navItems[2].innerText = "درباره";
        navItems[3].innerText = "تماس با ما";
        searchLabel.innerText = "جستجو در سایت";
        searchInput.setAttribute("placeholder", "اینجا بنویسید...");
        searchButton.innerText = "جستجو";
        langLabel.innerText = "تغییر زبان";
        langSubmit.innerText = "انتخاب زبان";
        main.firstElementChild.innerText = "خوش آمدید";
        main.children[1].innerText = "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که ";
        main.children[2].innerText = "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای ";
    } else {
        navItems[0].innerText = "Home";
        navItems[1].innerText = "Posts";
        navItems[2].innerText = "About";
        navItems[3].innerText = "Contact us";
        searchLabel.innerText = "Search in website";
        searchInput.setAttribute("placeholder", "Type here...");
        searchButton.innerText = "Search";
        langLabel.innerText = "Change your language";
        langSubmit.innerText = "Change language";
        main.firstElementChild.innerText = "Welcome";
        main.children[1].innerText = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus cupiditate fugit veritatis iusto, nostrum obcaecati vero autem harum optio veniam dolorem. Nemo error doloribus possimus deserunt non dolores, iste aspernatur!";
        main.children[2].innerText = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae corporis veniam soluta, reiciendis, enim nisi ratione impedit tempora repellat architecto nostrum nihil reprehenderit aperiam quis tenetur quaerat sed dolore magni deleniti sint animi! Est deserunt magni sit fuga, reprehenderit consequatur qui quis iste? Possimus saepe doloremque beatae consequatur officia voluptatem?";
    }
}

function selectedLanguage() {
    if (lang.value == "fa") {
        header.className = "rtl";
        navbar.className = "rtl";
        body.className   = "rtl";
        hardCoding("fa");
    } else {
        header.className = "";
        navbar.className = "";
        body.className   = "";
        hardCoding("");
    }}

if (navButton != null) {

    tabIndexSetter();

    navButton.addEventListener("click", function () {
        const n = navItems.length;
        if (navButton.classList.contains("show-navbar")) {
            navButton.classList = [];
            for (let i = 0; i < n; i++) {
                navItems[i].setAttribute("tabindex", "-1");
            }
        } else {
            navButton.classList = ["show-navbar"];
            for (let i = 0; i < n; i++) {
                navItems[i].setAttribute("tabindex", "0");
            }
        }
    });
    
    window.addEventListener("resize", tabIndexSetter);

    if (login != null) {
        login.addEventListener("focus", function () {
            if (navButton.classList.contains("show-navbar") && window.innerWidth <= 768) {
                navButton.focus();
            }
    })};

    logo.addEventListener("focus", function () {
        if (navButton.classList.contains("show-navbar") && window.innerWidth <= 768) {
            lastNavItem.focus();
        }
    });
    
    if (lang != null) {
    
        selectedLanguage();
    
        langSubmit.addEventListener("click", function(e) {
            e.preventDefault();
            selectedLanguage();
        });
    
        lang.addEventListener("focus", function () {
            if (navButton.classList.contains("show-navbar") && window.innerWidth <= 768) {
                navButton.focus();
            }
    })};
    
}
