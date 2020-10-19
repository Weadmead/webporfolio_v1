
document.addEventListener('DOMContentLoaded', getLocalLang)

$(function () {
    $('.translate').click(function() {
        var lang = $(this).attr('id');
        saveLocalLang(lang)

      $('.lang').each(function(index, item) {
        $(this).text(arrLang[lang][$(this).attr('key')]);
      });
    }); 
    
      
  });

//LOCAL STORAGE 

function saveLocalLang(language) {
    let langs
    if (localStorage.getItem('langs') === null) {
        langs = []
    } else {
        langs = JSON.parse(localStorage.getItem('langs'))
    }
    langs.push(language)
    localStorage.setItem('langs', JSON.stringify(langs))
}
function getLocalLang() {
    let langs 
    if (localStorage.getItem('langs') === null) {
        langs = []
    } else {
        langs = JSON.parse(localStorage.getItem('langs'))
    }
    langs.forEach(function (language) {
        let lang = langs[langs.length - 1]
        $('.lang').each(function(index, item) {
            $(this).text(arrLang[lang][$(this).attr('key')]);
      });
    })
} 


  
var arrLang = {
        'en': {
            'home': 'Home',
            'about': 'About Me',
            'services': 'Services',
            'works': 'My works',
            'testemonials': 'Testemonials',
            'contacts': 'Contacts',
            'logo': 'Portfolio',
            'fn': 'Rodion',
            'ln': 'Kondakov',
            'maintle': 'Web - developer',
            'worksbtn': 'My works',
            'contactbtn': 'Contact Me',
            
        },
        'ru': {
            'home': 'Главная',
            'about': 'Обо мне',
            'services': 'Услуги',
            'works': 'Мои Работы',
            'testemonials': 'Отзывы',
            'contacts': 'Контакты',
            'logo': 'Портфолио',
            'fn': 'Родион',
            'ln': 'Кондаков',
            'maintle': 'Веб-разработчик',
             'worksbtn': 'Мои работы',
            'contactbtn': 'Связаться со мной',
            
        }
    }
