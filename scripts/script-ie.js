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
        main.children[1].innerText = "این صفحه وب مرجع من برای کاوش کتابخانه ها، فریم ورک ها وب دیگر است.";
        main.children[2].innerText = "انگیزه";
        main.children[3].innerText = "قصد داشتم با توجه مواردی که از سایت هایی مانند MDN، W3Schools و CSS Tricks یاد گرفتم یک صفحه ی وب بسازم. می توانستم ویژگی های دیگری هم اضافه کنم اما این هدفم نبود شاید بعدا برای بهبود این صفحه تلاش کنم. من بهترین UI رو طراحی نکردم، من آنچه که دوست داشتم رو طراحی کردم.";
        main.children[4].innerText = "هدف";
        main.children[5].innerText = " هنگام استفاده از فریم ورک های وب مشکلاتی داشتم زیرا دقیقا نمیدانستم باید چه کاری انجام دهم و تقریبا در ویژگی های مختلف فریم ورک ها گم بودم. بنابراین من یک قدم رو به عقب برداشتم و به موارد ساده تر پرداختم. اکنون احساس می کنم می توانم خودم را برای انجام کاری مشابه در فریم ورک های دیگر به چالش بکشم. اما فکر می کنم به آسانی که به نظر می رسد نخواهد بود زیرا من به ویژگی های جدیدی که در کد می بینم شک میکنم.";
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
        main.children[1].innerText = "This is my reference web page for discovering other web libraries, framewokrs or templates.";
        main.children[2].innerText = "Motivation";
        main.children[3].innerText = "I wanted to create a single web page according to what I learned from MDN, W3Schools, CSS Tricks or other resources. I needed to do it simple, I could add more features but it wasn't my goal maybe I'll do it later. I didn't write best UI, I wrote what I liked.";
        main.children[4].innerText = "Purpose";
        main.children[5].innerText = "I had an issue when I was using web frameworks because I didn't know exactly what to do and I was almost lost in the features that I didn't fully understand. So I took a step back and started discovering simpler things. Now I feel I can challenge myself for doing the same in other web libraries, framewokrs or templates, but I think it is not as easy as it seems because I have doubt on new features that I see.";
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
