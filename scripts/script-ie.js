var body = document.getElementsByTagName("body")[0];
var header = document.getElementsByTagName("header")[0];
var logo = document.getElementById("logo");
var navButton = document.getElementById("primary-nav-btn");
var navbar = document.getElementById("primary-nav");
var navItems = [];
var navList = navbar.firstElementChild;;
var navItemsLength = navList.childElementCount;
var lastNavItem = navList.children[navItemsLength - 1].children[0];
for (i = 0; i < navItemsLength; i++) {
    var navItem = navList.children[i].firstElementChild;
    navItems.push(navItem);
}
var login = document.getElementById("login-menu");
var lang = document.getElementById("lang");
var langSubmit = document.getElementById("lang-submit");

function tabIndexSetter () {
    var n = navItemsLength;
    if (window.innerWidth > 768) {
        for (i = 0; i < n; i++) {
            navItems[i].setAttribute("tabindex", "0");
        }
        if (navButton.className == "show-navbar") {
            navButton.className = "";
        }
    } else {
        if ((navButton.className != "show-navbar")) {
            for (i = 0; i < n; i++) {
                navItems[i].setAttribute("tabindex", "-1");
            }
        }
    }
};

function selectedLanguage() {
    if (lang.value == "fa") {
        header.className = "rtl";
        navbar.className = "rtl";
        body.className   = "rtl";
    } else {
        header.className = "";
        navbar.className = "";
        body.className   = "";
    }}

if (navButton != null) {

    tabIndexSetter();

    navButton.onclick = function () {
        var n = navItemsLength;
        if (navButton.className == "show-navbar") {
            navButton.className = "";
            for (i = 0; i < n; i++) {
                navItems[i].setAttribute("tabindex", "-1");
            }
        } else {
            navButton.className = "show-navbar";
            for (i = 0; i < n; i++) {
                navItems[i].setAttribute("tabindex", "0");
            }
        }
    };
    
    window.onresize =  tabIndexSetter;

    if (login != null) {
        login.onfocus = function () {
            if (navButton.className == "show-navbar" && window.innerWidth <= 768) {
                navButton.focus();
            }
        }
    };

    logo.onfocus = function () {
        if (navButton.className == "show-navbar" && window.innerWidth <= 768) {
            lastNavItem.focus();
        }
    }
    
    if (lang != null) {
    
        selectedLanguage();

        langSubmit.onclick = function(e) {
            e.preventDefault();
            selectedLanguage();
        }
    
        lang.onfocus = function () {
            if (navButton.className == "show-navbar" && window.innerWidth <= 768) {
                navButton.focus();
            }
        }
    }
    
}
