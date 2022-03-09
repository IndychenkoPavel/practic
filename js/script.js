
// open modal paid

const modalPaid = document.querySelectorAll('.open__modal');
const closeModalPaid = document.querySelector('.close__modal__paid');
let opens;

// modalPaid.forEach((item) => {
//     item.addEventListener('click', function() {
//         if(opens === true) {
//             document.querySelector('.modal__paid').style.display = 'none'; 
//             opens = false;
//         } else {
//             document.querySelector('.modal__paid').style.display = 'block';
//             opens = true;
//             console.log(111);
//         } 
//     });
// });

modalPaid.forEach((item) => {
        item.addEventListener('click', function() {
            document.querySelector('.modal__paid').style.display = 'block';
    });
});

closeModalPaid.addEventListener('click', function() {
    document.querySelector('.modal__paid').style.display = 'none';
});


const closeWindow = document.querySelector('.close__window');
const modalQuest = document.querySelector('.modal__quest');

closeWindow.addEventListener('click', function() {
    modalQuest.style.display = "none";
    $('body').removeClass("no-scroll");
});


$(document).ready(function() {
    let burger;

    $('[name="phone"]').inputmask("+7 (999) 999-99-99");

    $('[data-toggle="modal"]').click(function() {
    var form_name = $(this).data('form-title');   
    $('#form_modal .form_modal-title').text(form_name);
    $('[name="form"]').val(form_name);
    $('.modal__quest').css({display: "block"})
    $('body').addClass('no-scroll');
    });

    $('.navbar-toggler').click(function() {
        if(burger === true) {
            $('.burger__menu').css({display: "none"});
            $('.burger_span').css({display: "block"});
            $('.span__close-top').css({transform: 'rotate(0)',
                marginTop: '0px'});
            $('.span__close-bottom').css({transform: 'rotate(0)',
            marginBottom:'0px'});
            burger = false;
        } else {
            $('.burger__menu').css({display: "block"});
            $('.burger_span').css({display: "none"});
            $('.span__close-top').css({transform: 'rotate(45deg)',
                marginTop: '2.188vw'});
            $('.span__close-bottom').css({transform: 'rotate(-45deg)',
            marginBottom: '2.188vw'});
            burger = true;
        } 
    });

    $('.repair__btn').click(function(e) {
        e.preventDefault();
        var target = $(this).attr('href');
        $(target).slideToggle();
        if ($(this).text() == 'Читать полностью') $(this).text('Скрыть');
        else $(this).text('Читать полностью');
    });
});

