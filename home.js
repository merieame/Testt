(function () {
    const header = document.querySelector(".admin-header");
    const burger = document.getElementById("nav-burger");
    const drawer = document.getElementById("admin-drawer");
    if (!header || !burger || !drawer) return;

    function setOpen(open) {
        header.classList.toggle("is-open", open);
        burger.setAttribute("aria-expanded", open);
        burger.setAttribute("aria-label", open ? "Fermer le menu" : "Ouvrir le menu");
    }

    burger.addEventListener("click", function () {
        setOpen(!header.classList.contains("is-open"));
    });

    drawer.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", function () {
            setOpen(false);
        });
    });
})();
