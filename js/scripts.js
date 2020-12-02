// Select the button
const btn = document.querySelector("#dark-mode-btn");
// Select the stylesheet <link>
const theme = document.querySelector("#theme-link");

// Listen for a click on the button
btn.addEventListener("click", function () {
    // If the current URL contains "ligh-theme.css"
    if (theme.getAttribute("href") == "css/style.css") {
        // ... then switch it to "dark-theme.css"
        theme.href = "css/dark.css";
        // Otherwise...
    } else {
        // ... switch it to "light-theme.css"
        theme.href = "css/style.css";
    }
});

// validation script

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    "use strict";
    window.addEventListener(
        "load",
        function () {
            // Fetch all the forms we want to apply custom Bootstrap validation styles to
            var forms = document.getElementsByClassName("needs-validation");
            // Loop over them and prevent submission
            var validation = Array.prototype.filter.call(forms, function (form) {
                form.addEventListener(
                    "submit",
                    function (event) {
                        if (form.checkValidity() === false) {
                            event.preventDefault();
                            event.stopPropagation();
                        }
                        form.classList.add("was-validated");
                    },
                    false
                );
            });
        },
        false
    );
})();
