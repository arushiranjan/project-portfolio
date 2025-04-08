
    document.addEventListener("DOMContentLoaded", function () {
        document.querySelectorAll('.button').forEach(function (button) {
            button.addEventListener('click', function (event) {
                event.preventDefault();
                var targetId = this.getAttribute('href');
                var targetElement = document.querySelector(targetId);

                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop,
                        behavior: "smooth"
                    });
                }
            });
        });
    });


