document.addEventListener("DOMContentLoaded", function() {
    // smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // show section titles on scroll
    const sections = document.querySelectorAll('.section');

    function handleScroll() {
        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight; // height of the viewport

        sections.forEach(section => {
            const sectionTop = section.offsetTop - windowHeight * 0.2; // adjust margin to 20% of the viewport height
            const sectionBottom = sectionTop + section.clientHeight + windowHeight * 0.4; // adjust margin to 40% of the viewport height

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                section.classList.add('visible');
            } else {
                section.classList.remove('visible');
            }
        });
    }

    // initial check when the page loads
    handleScroll();

    // check on scroll
    window.addEventListener('scroll', handleScroll);
});

// expand tables
var currentlyOpenTable = null;

function expandTable(tableId) {
    var table = document.getElementById(tableId);

    if (currentlyOpenTable !== null && currentlyOpenTable !== table) {
        currentlyOpenTable.style.display = "none";
    }

    if (table.style.display === "none") {
        table.style.display = "table";
        currentlyOpenTable = table;
    } else {
        table.style.display = "none";
        currentlyOpenTable = null;
    }
}

