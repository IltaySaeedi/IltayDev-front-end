const body = document.querySelector("body");
const header = document.querySelector("header");
const logo = document.querySelector("header > a#logo");
const navButton = document.querySelector("header > button#primary-nav-btn");
const navbar = document.querySelector("header > nav#primary-nav");
const navItems = document.querySelectorAll("header > nav#primary-nav > ul > li > a");
const lastNavItem = document.querySelector("header > nav#primary-nav > ul > li:last-child > a");
const login = document.querySelector("header > a#login-menu");
const lang = document.querySelector("form#lang-form > select#lang");
const langSubmit = document.querySelector("form#lang-form > button#lang-submit");

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

function selectedLanguage() {
    if (lang.value == "fa") {
        header.classList = ["rtl"];
        navbar.classList = ["rtl"];
        body.classList   = ["rtl"];
    } else {
        header.classList = [];
        navbar.classList = [];
        body.classList   = [];
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
