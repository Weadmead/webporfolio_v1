$(function () {
    window.addEventListener('scroll', function () {
        var header = document.querySelector('header');
        header.classList.toggle('sticky', window.scrollY > 0);
    });   
        
   
    var marker = document.querySelector('.marker');
    var item = document.querySelectorAll('nav a');

    function indicator(e) {
        marker.style.left = e.offsetLeft+"px";
        marker.style.width = e.offsetWidth+"px";
    }

    item.forEach(link => {
        link.addEventListener('click', (e) => {
            indicator(e.target);
        })
    })
    
    
});