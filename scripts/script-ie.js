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
var langLabel = document.getElementById("lang-form").firstElementChild;
var lang = document.getElementById("lang");
var langSubmit = document.getElementById("lang-submit");
var searchLabel = document.getElementById("search-form").firstElementChild;
var searchInput = document.getElementById("search-input");
var searchButton = document.getElementById("search-form").lastElementChild;
var main = document.getElementsByTagName("main")[0];

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
        main.firstElementChild.innerText = "ٌWelcome";
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
