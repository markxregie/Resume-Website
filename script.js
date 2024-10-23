document.addEventListener('DOMContentLoaded', () => {
    let menuIcon = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar'); // Correct selector

    menuIcon.onclick = () => {
        menuIcon.classList.toggle('fa-xmark'); // Toggle the icon class if using FontAwesome
        navbar.classList.toggle('active'); // Toggle the navbar visibility
    };

    let sections = document.querySelectorAll('section');
    let navlinks = document.querySelectorAll('header nav a');

    window.onscroll = () => {
        sections.forEach(sec => {
            let top = window.scrollY;
            let offset = sec.offsetTop - 150;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');

            if (top >= offset && top < offset + height) {
                navlinks.forEach(link => {
                    link.classList.remove('active');
                    document.querySelector(`header nav a[href*="${id}"]`).classList.add('active'); // Fixed string interpolation
                });
            }
        });

        let header = document.querySelector('header');
        header.classList.toggle('sticky', window.scrollY > 100);
    };
});
