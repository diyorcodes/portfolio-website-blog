
// Filter Js
$(document).ready(function(){
    $('.filter-item').click(function(){
        const value = $(this).attr('data-filter');
        if (value == 'all') {
            $(".post-box").show("1000");
        } else {
            $(".post-box").not("." + value).hide("1000");
            $(".post-box").filter("." + value).show("1000");
        }
    });
    // Add active to btn
    $('.filter-item').click(function(){
        $(this).addClass("active-filter").siblings().removeClass("active-filter");
    })
});

// Header BackGround Change On scroll
let Header = document.querySelector('header');

window.addEventListener('scroll', () => {
    Header.classList.toggle('shadow', window.scrollY > 0);
})

// Loader 
setTimeout(function(){
    $('.loader__bg').fadeToggle();
}, 900);

// ScrollReveal
const sr = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 2000,
    delay: 400,
    // reset: true
})

sr.reveal(`.home-text, .post-box`)
sr.reveal(`.footer>p`, {origin: 'left'})
sr.reveal(`.social`, {origin: 'right'})






