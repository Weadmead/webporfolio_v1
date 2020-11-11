$(function () {
    //Липкий хедер
    window.addEventListener('scroll', function () {
        var header = document.querySelector('header');
        header.classList.toggle('sticky', window.scrollY > 400);
    });   
        
   // Маркер под кнопками меню навигации
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
// добавляем цвет активной кнопке выбора языка
    $('.translate').on('click', function() {
    $(this).addClass('active')
        .siblings().removeClass('active');
})

      
$("nav").on("click","a", function (event) {
        // исключаем стандартную реакцию браузера
        event.preventDefault();
 
        // получем идентификатор блока из атрибута href
        var id  = $(this).attr('href'),
 
        // находим высоту, на которой расположен блок
            top = $(id).offset().top;
         
        // анимируем переход к блоку, время: 800 мс
        $('body,html').animate({scrollTop: top}, 800);
});
    
    //custom scrollbar
    $(window).scroll(function () {
        var scroll = $(window).scrollTop(),
            dh = $(document).height(),
            wh = $(window).height();
        scrollPercent = (scroll / (dh - wh)) * 100;
        $('#scrlbar').css('height', scrollPercent + "%")
    })
    // gallery
    const addListeners = div => {
    div.addEventListener('mouseenter', () => {
        div.classList.add('hover')
    })
    div.addEventListener('mouseleave', () => {
        div.classList.remove('hover')
    })
}

    const container = document.querySelector('.grid-container')
    addListeners(container)

    const allGalleryContainer = document.querySelectorAll('.works__gallery')
    allGalleryContainer.forEach(galleryContainer => {
    addListeners(galleryContainer)
    })
    
  $('.testemonials__slider').slick({    
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    arrows: false
  });
         

});
