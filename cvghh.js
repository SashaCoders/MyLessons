

let hh;
let hs;
let ms;
let ss;
let click1 = false;
let click2 = false;


// $(".slide").click(function () {
//     if (click1 == true) {
//         $(".lop-pol").slideUp();
//         click1 = false
//     } else if (click1 == false) {

//         $(".lop-pol").slideDown();
//         click1 = true;
//     }
// });


$("#show").click(function () {



    if (click2 == true) {

        $("#monday").show();
        $("#tuesday").show();
        $("#wednesday").show();
        $("#thusday").show();
        $("#faiday").show();
        click2 = false
    } else if (click2 == false) {


        if (hh == 1 && hs < 17 || hh == 0 || hh == 6) {
            $("#monday").show();
            $("#tuesday").hide();
            $("#wednesday").hide();
            $("#thusday").hide();
            $("#faiday").hide();
        } else if (hh == 2 && hs < 17 || hh == 1 && hs > 17) {
            $("#monday").hide();
            $("#tuesday").show();
            $("#wednesday").hide();
            $("#thusday").hide();
            $("#faiday").hide();
        } else if (hh == 3 && hs < 17 || hh == 2 && hs > 17) {
            $("#monday").hide();
            $("#tuesday").hide();
            $("#wednesday").show();
            $("#thusday").hide();
            $("#faiday").hide();
        } else if (hh == 4 && hs < 17 || hh == 3 && hs > 17) {
            $("#monday").hide();
            $("#tuesday").hide();
            $("#wednesday").hide();
            $("#thusday").show();
            $("#faiday").hide();
        } else if (hh == 5 && hs < 17 || hh == 4 && hs > 17) {
            $("#monday").hide();
            $("#tuesday").hide();
            $("#wednesday").hide();
            $("#thusday").hide();
            $("#faiday").show();
        }
        click2 = true;
    }

});


$(".img").click(function () {
    console.log("ecmkoejowin");
    // $(".rules").css('display', 'none');
    $(".rules").css({
        "display": "flex",
        "flex-direction": "column"
    });
});

$(".img2").click(function () {
    // $(".rules").css('display', 'none');
    $(".rules2").css({
        "display": "flex",
        "flex-direction": "column"
    });
});



$(".btn-close").click(function () {
    $(".rules").css('display', 'none');
});

$(".bi-x-lg").click(function () {
    $(".rules2").css('display', 'none');
});


function clock() {
    let dates = new Date();
    hh = dates.getDay();
    hs = dates.getHours();
    ms = dates.getMinutes();
    ss = dates.getSeconds();






    // if (hh == 1 && hs == 8 && ms == 58 && ss == 0) { window.open('https://us04web.zoom.us/j/9363848876?pwd=jC1Nt25QcB1YQlr9IkmgyW4k4yvs6B.1#success', '_blank'); }
    // else if (hh == 1 && hs == 9 && ms == 53 && ss == 0) { window.open('https://us05web.zoom.us/j/9212878927?pwd=cjJyNU1vWmh2WTh5b3VtYlFXNENOUT09#success', '_blank'); }
    // else if (hh == 1 && hs == 10 && ms == 48 && ss == 0) { window.open('https://us05web.zoom.us/j/4697114396?pwd=Tllsd1oza3dWdjdWMU9mTDZ1dTI0Zz09#success', '_blank'); }
    // else if (hh == 1 && hs == 11 && ms == 43 && ss == 0) { window.open('https://us05web.zoom.us/j/6725698583?pwd=K041MkRXRTlJT1h2U2V5aFlDa0NKdz09#success', '_blank'); }
    // else if (hh == 1 && hs == 12 && ms == 38 && ss == 0) { window.open('https://us05web.zoom.us/j/9212878927?pwd=cjJyNU1vWmh2WTh5b3VtYlFXNENOUT09#success', '_blank'); }
    // else if (hh == 1 && hs == 13 && ms == 33 && ss == 0) { window.open('https://us04web.zoom.us/j/9096823222?pwd=ak1XbmprdFBUQnRZOWszWU91VHdyUT09#success', '_blank'); }
    // else if (hh == 1 && hs == 14 && ms == 28 && ss == 0) { window.open('https://us05web.zoom.us/j/9408326193?pwd=VDNSbFZLQ052V2lua2U3blVIb2s5UT09#success', '_blank'); }

    // if (hh == 2 && hs == 8 && ms == 58 && ss == 0) { window.open('https://us05web.zoom.us/j/89228783353?pwd=bHl5cUtYeTQzSnN3QUEvaUpiL0Fydz09#success', '_blank'); }
    // else if (hh == 2 && hs == 9 && ms == 53 && ss == 0) { window.open('https://us04web.zoom.us/j/9096823222?pwd=ak1XbmprdFBUQnRZOWszWU91VHdyUT09#success', '_blank'); }
    // else if (hh == 2 && hs == 10 && ms == 48 && ss == 0) { window.open('https://us05web.zoom.us/j/9408326193?pwd=VDNSbFZLQ052V2lua2U3blVIb2s5UT09#success', '_blank'); }
    // else if (hh == 2 && hs == 11 && ms == 43 && ss == 0) { window.open('https://us05web.zoom.us/j/4697114396?pwd=Tllsd1oza3dWdjdWMU9mTDZ1dTI0Zz09#success', '_blank'); }
    // else if (hh == 2 && hs == 12 && ms == 38 && ss == 0) { window.open('https://us04web.zoom.us/j/9363848876?pwd=jC1Nt25QcB1YQlr9IkmgyW4k4yvs6B.1#success', '_blank'); }
    // else if (hh == 2 && hs == 13 && ms == 33 && ss == 0) { window.open('https://us05web.zoom.us/j/4697114396?pwd=Tllsd1oza3dWdjdWMU9mTDZ1dTI0Zz09#success', '_blank'); }

    // if (hh == 3 && hs == 8 && ms == 58 && ss == 0) { window.open('https://us05web.zoom.us/j/89228783353?pwd=bHl5cUtYeTQzSnN3QUEvaUpiL0Fydz09#success', '_blank'); }
    // else if (hh == 3 && hs == 9 && ms == 53 && ss == 0) { window.open('https://us05web.zoom.us/j/9212878927?pwd=cjJyNU1vWmh2WTh5b3VtYlFXNENOUT09#success', '_blank'); }
    // else if (hh == 3 && hs == 10 && ms == 48 && ss == 0) { window.open('https://us05web.zoom.us/j/9408326193?pwd=VDNSbFZLQ052V2lua2U3blVIb2s5UT09#success', '_blank'); }
    // else if (hh == 3 && hs == 11 && ms == 43 && ss == 0) { window.open('https://us05web.zoom.us/j/4697114396?pwd=Tllsd1oza3dWdjdWMU9mTDZ1dTI0Zz09#success', '_blank'); }
    // else if (hh == 3 && hs == 12 && ms == 38 && ss == 0) { window.open('https://us04web.zoom.us/j/9363848876?pwd=jC1Nt25QcB1YQlr9IkmgyW4k4yvs6B.1#success', '_blank'); }
    // else if (hh == 3 && hs == 13 && ms == 33 && ss == 0) { window.open('https://us05web.zoom.us/j/2288301220?pwd=VjVDQXMrdzh5SVdPcUxUSGIyblllUT09#success', '_blank'); }
    // else if (hh == 3 && hs == 14 && ms == 28 && ss == 0) { window.open('https://us04web.zoom.us/j/5049618327?pwd=bjVfpNwEdcLSZcdvDzHD23vjK9KmjS.1#success', '_blank'); }

    // if (hh == 4 && hs == 8 && ms == 58 && ss == 0) { window.open('https://us05web.zoom.us/j/6725698583?pwd=K041MkRXRTlJT1h2U2V5aFlDa0NKdz09#success', '_blank'); }
    // else if (hh == 4 && hs == 9 && ms == 53 && ss == 0) { window.open('https://us05web.zoom.us/j/9408326193?pwd=VDNSbFZLQ052V2lua2U3blVIb2s5UT09#success', '_blank'); }
    // else if (hh == 4 && hs == 10 && ms == 48 && ss == 0) { window.open('https://us05web.zoom.us/j/6725698583?pwd=K041MkRXRTlJT1h2U2V5aFlDa0NKdz09#success', '_blank'); }
    // else if (hh == 4 && hs == 11 && ms == 43 && ss == 0) { window.open('https://us05web.zoom.us/j/9408326193?pwd=VDNSbFZLQ052V2lua2U3blVIb2s5UT09#success', '_blank'); }
    // else if (hh == 4 && hs == 12 && ms == 38 && ss == 0) { window.open('https://us04web.zoom.us/j/9096823222?pwd=ak1XbmprdFBUQnRZOWszWU91VHdyUT09#success', '_blank'); }
    // else if (hh == 4 && hs == 13 && ms == 33 && ss == 0) { window.open('https://us04web.zoom.us/j/9363848876?pwd=jC1Nt25QcB1YQlr9IkmgyW4k4yvs6B.1#success', '_blank'); }
    // else if (hh == 4 && hs == 14 && ms == 28 && ss == 0) { window.open('https://us04web.zoom.us/j/5049618327?pwd=bjVfpNwEdcLSZcdvDzHD23vjK9KmjS.1#success', '_blank'); }

    // if (hh == 5 && hs == 8 && ms == 58 && ss == 0) { window.open('https://us05web.zoom.us/j/9408326193?pwd=VDNSbFZLQ052V2lua2U3blVIb2s5UT09#success', '_blank'); }
    // else if (hh == 5 && hs == 9 && ms == 53 && ss == 0) { window.open('https://us05web.zoom.us/j/6725698583?pwd=K041MkRXRTlJT1h2U2V5aFlDa0NKdz09#success', '_blank'); }
    // else if (hh == 5 && hs == 10 && ms == 48 && ss == 0) { window.open('https://us05web.zoom.us/j/9408326193?pwd=VDNSbFZLQ052V2lua2U3blVIb2s5UT09#success', '_blank'); }
    // else if (hh == 5 && hs == 11 && ms == 43 && ss == 0) { window.open('https://us05web.zoom.us/j/9212878927?pwd=cjJyNU1vWmh2WTh5b3VtYlFXNENOUT09#success', '_blank'); }
    // else if (hh == 5 && hs == 12 && ms == 38 && ss == 0) { window.open('https://us05web.zoom.us/j/2288301220?pwd=VjVDQXMrdzh5SVdPcUxUSGIyblllUT09#success', '_blank'); }
    // else if (hh == 5 && hs == 13 && ms == 33 && ss == 0) { window.open('https://us05web.zoom.us/j/4697114396?pwd=Tllsd1oza3dWdjdWMU9mTDZ1dTI0Zz09#success', '_blank'); }
    // else if (hh == 5 && hs == 14 && ms == 28 && ss == 0) { window.open('https://us05web.zoom.us/j/4697114396?pwd=Tllsd1oza3dWdjdWMU9mTDZ1dTI0Zz09#success', '_blank'); }

    // if (hh == 1 && hs == 9 && ms == 54 && ss == 50) { window.open('https://us05web.zoom.us/j/9408326193?pwd=VDNSbFZLQ052V2lua2U3blVIb2s5UT09#success', '_blank'); }
    // console.log(hh + " " + hs + " " + ms + " " + ss);
}
setInterval(clock, 1000);

$(document).ready(function () {
    if (localStorage.getItem('notesHTML')) {
        $('#notes').html(localStorage.getItem('notesHTML'));
    }

    // Додавання замітки
    // if () { }
    $('#addBtn').click(function () {

        // Отримуємо: заголовок, контент
        let title = $('#title').val(),
            content = $('#content').val();

        // Перевірка чи поля не пусті
        if (!title && !content) {
            alertify.error('Поля ввода пусти.');
            return;
        }
        if (!content) {
            alertify.error('У вас пустое описание.');
            return;
        }
        if (!title) {
            alertify.error('У ваc пустое название.');
            return;
        }

        db.collection("products").add({
            name: title,
            description: content
        })
            .then(() => console.log("Данные добавлены!"))
            .catch(err => console.error(err));


        // Додавання нової замітки у кінец (до сотаньої замітки)
        $('#notes').append(`
            <div class="note">
                <h1 class="title" contenteditable="true">${title}</h1>
                <p class="content" contenteditable="true">${content}</p>
                <p class="date">${new Date().toLocaleString()}</p>
                <div class="controls">
                    <button class="archive">Archive</button>
                    <button class="remove">Remove</button>
                </div>
            </div>
        `);
        $('#title').val('');
        $('#content').val('');

        // Зберігаємо нову замітку
        localStorage.setItem('notesHTML', $('#notes').html());
    });

    // Архівація замітки
    $(document).on('click', '.archive', function () {
        let note = $(this).closest('.note');
        note.toggleClass('archived');

        // Прозорість нотатка
        if (note.hasClass('archived')) {
            note.css('opacity', '0.6');
        } else {
            note.css('opacity', '1');
        }

        // Перевірка на редагування дедлайну
        note.find('.deadline').prop('disabled', note.hasClass('archived'));

        // Перевірка на редагування: заголовка, контента
        note.find('.title, .content').attr('contenteditable', function () {
            return $(this).attr('contenteditable') === 'true' ? 'false' : 'true';
        });

        // Зберігаємо
        localStorage.setItem('notesHTML', $('#notes').html());

    });

    // Видалення замітки
    $(document).on('click', '.remove', function () {
        let note = $(this).closest('.note');

        // Перевірки чи не архивовано
        if (!note.hasClass('archived')) {

            // Модальне вікно початок
            var winW = window.innerWidth;
            var winH = window.innerHeight;
            var dialogoverlay = document.getElementById('dialogoverlay');
            var dialogbox = document.getElementById('dialogbox');
            dialogoverlay.style.display = "block";
            dialogoverlay.style.height = winH + "px";
            dialogbox.style.left = (winW / 2) - (550 * .5) + "px";
            dialogbox.style.top = "100px";
            dialogbox.style.display = "block";
            document.getElementById('dialogboxhead').innerHTML = "Сообщение с этого сайта.";
            document.getElementById('dialogboxbody').innerHTML = 'Вы уверены, что хотите удалить эту заметку?';
            document.getElementById('dialogboxfoot').innerHTML = '<button class="btn ok">Да</button> <button class="btn not">Нет</button>';

            $(".ok").click(function () {
                document.getElementById('dialogbox').style.display = "none";
                document.getElementById('dialogoverlay').style.display = "none";

                // Видалення 
                note.remove();

                // Збереження
                localStorage.setItem('notesHTML', $('#notes').html());
                alertify.success('Заметка удалена.');

                // Показ кнопки остання замітка
            });
            $(".not").click(function () {
                document.getElementById('dialogbox').style.display = "none";
                document.getElementById('dialogoverlay').style.display = "none";
            });
        }
    });

    // Редагування: заголовку, контента
    $(document).on("input", ".title, .content", function () {

        // Збереження
        localStorage.setItem('notesHTML', $('#notes').html());
    });

    // Перехід до останньої нотатки
    $('#goToLastNoteBtn').click(function () {

        // Перевірка чи є нотатки
        // Метод .last() бере останній елемент з колекції — тобто останню створену нотатку
        const notes = $('#notes .note');
        if (notes.length === 0) {
            alertify.error('Заметок пока нет.');
            return;
        }

        // Отримання останньої нотатки
        const lastNote = notes.last();

        // Прокрутка сторінки до цієї нотатки
        $('html, body').animate({
            scrollTop: lastNote.offset().top - 20
        }, 600);

        // Візуальне виділення нотатки
        lastNote.css('box-shadow', '0 0 10px 3px rgba(217, 0, 61, 0.7)');
        setTimeout(() => lastNote.css('box-shadow', ''), 2000);
    });
});





