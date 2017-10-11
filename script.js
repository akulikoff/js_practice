function ValidName() {
    var re = /[a-zA-Zа-яА-ЯёЁ']+[a-zA-Z-а-яА-ЯёЁ' ]+[a-zA-Zа-яА-ЯёЁ']/;
    var myName = document.getElementById('name').value;
    var valid = re.test(myName);
    if (valid) {
        output = 'Имя введено правильно!';
    } else {
        output = 'Имя введено неправильно!';

    }
    document.getElementById('message').innerHTML = output;
    return valid;
}

function ValidMail() {
    var re = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
    var myMail = document.getElementById('email').value;
    var valid = re.test(myMail);
    if (valid) {
        output = 'Адрес эл. почты введен правильно!';
    } else {
        output = 'Адрес электронной почты введен неправильно!';
        document.getElementsByName('email');
        email.classList.add('error');

    }
    document.getElementById('message').innerHTML = document.getElementById('message').innerHTML + '<br />' + output;
}

function ValidPhone() {
    var re = /\+\d\(\d\d\d\)\d\d\d-\d\d\d\d/;
    var myPhone = document.getElementById('phone').value;
    var valid = re.test(myPhone);
    if (valid) {
        output = 'Номер телефона введен правильно!';
    } else {
        output = 'Номер телефона введен неправильно!';
        document.getElementsByName('phone');
        phone.classList.add('error');
        document.getElementById('message').innerHTML = document.getElementById('message').innerHTML + '<br />' + output;
    }
    return valid;
}
$(function() {
    $.datepicker.setDefaults($.datepicker.regional['ru']);
    $("#date").datepicker({
        dateFormat: "dd.mm.yy",
        showOn: "button",
        buttonImage: "images/calendar_.gif",
        buttonText: "Выберите дату"
    });
});

$(function() {
    $('#button').button().click(function() {
        $('.error').effect("pulsate", 1000);
        setTimeout(function() {
            $('#message').dialog({
                autoOpen: true,
                show: { effect: "slideDown", duration: 800 }
            })
        }, 1000);

    });


});
$(document).ready(function() {
    $("#lightSlider").lightSlider({

        item: 4,
        slideMargin: 10,
        slideMove: 2,

        responsive: [{
                breakpoint: 800,
                settings: {
                    item: 3,
                    slideMove: 1,
                    slideMargin: 6,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    item: 2,
                    slideMove: 1,
                    slideMargin: 6
                }
            }
        ],

    });
});