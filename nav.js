(function () {
    var nav = document.querySelector(".top-nav");
    var btn = document.querySelector(".top-nav__burger");
    if (!nav || !btn) return;

    btn.addEventListener("click", function () {
        var open = nav.classList.toggle("is-open");
        btn.setAttribute("aria-expanded", open ? "true" : "false");
    });

    var menu = nav.querySelector(".top-nav__menu");
    if (menu) {
        menu.querySelectorAll("a").forEach(function (link) {
            link.addEventListener("click", function () {
                nav.classList.remove("is-open");
                btn.setAttribute("aria-expanded", "false");
            });
        });
    }
})();
