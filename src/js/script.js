const slider = tns({
    container: '.carousel__inner',
    speed: 1200,
    items: 1,
    slideBy: 'page',
    autoplay: false,   
    controls: false,    // убираем родные стрелки
    nav: false          // убираем точки навигации
});

document.querySelector('.prev').addEventListener('click', function() {
    slider.goTo('prev');
});

document.querySelector('.next').addEventListener('click', function() {
    slider.goTo('next');
});

$('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
    $(this)
      .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
      .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
});

function toggleSlide(item){
    $(item).each(function(i) {
        $(this).on('click', function(e){
            e.preventDefault();
            $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
            $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
        });
    });
};

toggleSlide('.catalog-item__link');
toggleSlide('.catalog-item__back');

// Модальные окна

$('[data-modal=consultation]').on('click', function() {
    $('.overlay, #consultation').fadeIn();
});

$('.modal__close').on('click', function(){
    $('.overlay, #consultation, #order, #thanks').fadeOut();
})

// Маленькие кнопки "КУПИТЬ"

$('.button_mini').each(function(i) {
    $(this).on('click', function() {
        $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
        $('.overlay, #order').fadeIn();
    });
});

// Валидация

function valideForms(form) {
    $(form).validate({
        rules: {
            name: {
                required: true,
            },
            phone: {
                required: true,
                minlength: 9
            },
            email: {
                required: true,
                email: true
            }
        },
        messages: {
            name: {
                required: "введите свое имя",
            },
            phone: "введите свой номер телефона",
            email: {
                required: "введите свою почту",
                email: "адрес почты указан не верно"
            }
        }
    });
};

valideForms('#consultation-form');
valideForms('#consultation form');
valideForms('#order form');