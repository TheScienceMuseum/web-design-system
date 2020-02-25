/*
This is an adaptation of
https://github.com/argenteum/accessible-nav-wp
Which is used on the SMG blog sites (Wordpress)
Since we're not tied to WP html output, I have applied the extra a11y attributes directly to the html in
/templates/partials/global/global-header.html
but kept the same class names so css can be re-used without much change.
*/

export default function menu() {
  var menuContainers = document.querySelectorAll(".c-menu");
  var toggleExpanded = function(el) {
    el.setAttribute(
      "aria-expanded",
      el.getAttribute("aria-expanded") === "false" ? "true" : "false"
    );
  };
  menuContainers.forEach(function(menuContainer) {
    // console.log("menu js once", menuContainer);
    var menuToggle = menuContainer.querySelector(".c-menu__button");
    var mobileNav = document.querySelector(".c-nav-mobile");
    menuContainer.dataset.init = true; // stop duplicate

    var screenReaderText = {
      expand: "Expand child menu",
      collapse: "Collapse child menu"
    };

    // Toggles the menu button
    if (menuToggle) {
      menuToggle.addEventListener("click", function() {
        console.log(
          "menu jsx",
          this.getAttribute("aria-expanded"),
          mobileNav.getAttribute("aria-expanded")
        );
        toggleExpanded(this);
        toggleExpanded(mobileNav);
      });
    }

    // If a dropdown has no top-level link (it's dummied to act as group, then skip it from tab order)
    mobileNav.querySelectorAll('[href="#"]').forEach(function(el) {
      el.setAttribute("tabindex", -1);
      el.addEventListener("click", function(e) {
        e.preventDefault();
      });
    });

    // Toggles the sub-menu when dropdown toggle button clicked
    menuContainer.querySelectorAll(".c-menu__toggle").forEach(function(el) {
      el.addEventListener("click", function(e) {
        var screenReaderSpan = this.querySelectorAll(".screen-readers");
        e.preventDefault();
        toggleExpanded(this.nextElementSibling);
        toggleExpanded(this);
        screenReaderSpan.forEach(function(el) {
          el.textContent = screenReaderText.expand
            ? screenReaderText.collapse
            : screenReaderText.expand;
        });
      });
    });
  });
}
