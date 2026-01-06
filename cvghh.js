// // TODO: замени на свои данные из Firebase консоли
// const firebaseConfig = {
//   apiKey: "ТВОЙ_API_KEY",
//   authDomain: "ТВОЙ_PROJECT_ID.firebaseapp.com",
//   projectId: "ТВОЙ_PROJECT_ID",
//   storageBucket: "ТВОЙ_PROJECT_ID.appspot.com",
//   messagingSenderId: "ТВОЙ_SENDER_ID",
//   appId: "ТВОЙ_APP_ID"
// };

// // Инициализация Firebase
// const app = firebase.initializeApp(firebaseConfig);
// const db = firebase.firestore();



// const notesContainer = document.getElementById("notesContainer");
// const addNoteBtn = document.getElementById("addNoteBtn");
// const noteInput = document.getElementById("noteInput");

// // Добавление заметки
// addNoteBtn.addEventListener("click", () => {
//   const text = noteInput.value.trim();
//   if (!text) return;

//   db.collection("notes").add({
//     text: text,
//     timestamp: firebase.firestore.FieldValue.serverTimestamp()
//   });

//   noteInput.value = "";
// });

// // Слушаем изменения в базе и обновляем список
// db.collection("notes").orderBy("timestamp")
//   .onSnapshot(snapshot => {
//     notesContainer.innerHTML = "";
//     snapshot.forEach(doc => {
//       const note = doc.data();
//       const div = document.createElement("div");
//       div.classList.add("note");
//       div.textContent = note.text;

//       // Кнопка удалить
//       const delBtn = document.createElement("button");
//       delBtn.textContent = "❌";
//       delBtn.addEventListener("click", () => {
//         db.collection("notes").doc(doc.id).delete();
//       });

//       div.appendChild(delBtn);
//       notesContainer.appendChild(div);
//     });
//   });

var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://mylessons-c08d.restdb.io/rest/plan",
    "method": "GET",
    "headers": {
        "content-type": "application/json",
        "x-apikey": "7dcf86b0f5f0fd2f8de664b0b0d946b9cd8bf",
        "cache-control": "no-cache"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
    draw(response);
});


function draw(person) {
    const $conteiner = $("#notesContainer");
    $conteiner.empty();

    const items = Array.isArray(person) ? person : [person];
    items.forEach(item => {
        const $personCard = $(`
<div class="note">
         <h1 class="title" contenteditable="true">${item.noteInput}</h1>
            <p class="content" contenteditable="true">${item.content}</p>
            <p class="date">${item.datatime}</p>
            <div class="controls">
                <button class="remove">Remove</button>
            </div>
</div>
    `);
        $conteiner.append($personCard);
    });
}
















let hh;
let hs;
let ms;
let ss;
let click1 = false;
let click2 = false;


// // $(".slide").click(function () {
// //     if (click1 == true) {
// //         $(".lop-pol").slideUp();
// //         click1 = false
// //     } else if (click1 == false) {

// //         $(".lop-pol").slideDown();
// //         click1 = true;
// //     }
// // });


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
    // console.log(hh + " " + hs + " " + ms + " " + ss);
}
setInterval(clock, 3600000);

// $(document).ready(function () {
//     if (localStorage.getItem('notesHTML')) {
//         $('#notes').html(localStorage.getItem('notesHTML'));
//     }

//     // Додавання замітки
//     // if () { }
//     $('#addBtn').click(function () {

//         // Отримуємо: заголовок, контент
//         let title = $('#title').val(),
//             content = $('#content').val();

//         // Перевірка чи поля не пусті
//         if (!title && !content) {
//             alertify.error('Поля ввода пусти.');
//             return;
//         }
//         if (!content) {
//             alertify.error('У вас пустое описание.');
//             return;
//         }
//         if (!title) {
//             alertify.error('У ваc пустое название.');
//             return;
//         }

//         // Додавання нової замітки у кінец (до сотаньої замітки)
//         $('#notes').append(`
//             <div class="note">
//                 <h1 class="title" contenteditable="true">${title}</h1>
//                 <p class="content" contenteditable="true">${content}</p>
//                 <p class="date">${new Date().toLocaleString()}</p>
//                 <div class="controls">
//                     <button class="archive">Archive</button>
//                     <button class="remove">Remove</button>
//                 </div>
//             </div>
//         `);
//         $('#title').val('');
//         $('#content').val('');

//         // Зберігаємо нову замітку
//         localStorage.setItem('notesHTML', $('#notes').html());
//     });

//     // Архівація замітки
//     $(document).on('click', '.archive', function () {
//         let note = $(this).closest('.note');
//         note.toggleClass('archived');

//         // Прозорість нотатка
//         if (note.hasClass('archived')) {
//             note.css('opacity', '0.6');
//         } else {
//             note.css('opacity', '1');
//         }

//         // Перевірка на редагування дедлайну
//         note.find('.deadline').prop('disabled', note.hasClass('archived'));

//         // Перевірка на редагування: заголовка, контента
//         note.find('.title, .content').attr('contenteditable', function () {
//             return $(this).attr('contenteditable') === 'true' ? 'false' : 'true';
//         });

//         // Зберігаємо
//         localStorage.setItem('notesHTML', $('#notes').html());

//     });

//     // Видалення замітки
//     $(document).on('click', '.remove', function () {
//         let note = $(this).closest('.note');

//         // Перевірки чи не архивовано
//         if (!note.hasClass('archived')) {

//             // Модальне вікно початок
//             var winW = window.innerWidth;
//             var winH = window.innerHeight;
//             var dialogoverlay = document.getElementById('dialogoverlay');
//             var dialogbox = document.getElementById('dialogbox');
//             dialogoverlay.style.display = "block";
//             dialogoverlay.style.height = winH + "px";
//             dialogbox.style.left = (winW / 2) - (550 * .5) + "px";
//             dialogbox.style.top = "100px";
//             dialogbox.style.display = "block";
//             document.getElementById('dialogboxhead').innerHTML = "Сообщение с этого сайта.";
//             document.getElementById('dialogboxbody').innerHTML = 'Вы уверены, что хотите удалить эту заметку?';
//             document.getElementById('dialogboxfoot').innerHTML = '<button class="btn ok">Да</button> <button class="btn not">Нет</button>';

//             $(".ok").click(function () {
//                 document.getElementById('dialogbox').style.display = "none";
//                 document.getElementById('dialogoverlay').style.display = "none";

//                 // Видалення
//                 note.remove();

//                 // Збереження
//                 localStorage.setItem('notesHTML', $('#notes').html());
//                 alertify.success('Заметка удалена.');

//                 // Показ кнопки остання замітка
//             });
//             $(".not").click(function () {
//                 document.getElementById('dialogbox').style.display = "none";
//                 document.getElementById('dialogoverlay').style.display = "none";
//             });
//         }
//     });

//     // Редагування: заголовку, контента
//     $(document).on("input", ".title, .content", function () {

//         // Збереження
//         localStorage.setItem('notesHTML', $('#notes').html());
//     });

//     // Перехід до останньої нотатки
//     $('#goToLastNoteBtn').click(function () {

//         // Перевірка чи є нотатки
//         // Метод .last() бере останній елемент з колекції — тобто останню створену нотатку
//         const notes = $('#notes .note');
//         if (notes.length === 0) {
//             alertify.error('Заметок пока нет.');
//             return;
//         }

//         // Отримання останньої нотатки
//         const lastNote = notes.last();

//         // Прокрутка сторінки до цієї нотатки
//         $('html, body').animate({
//             scrollTop: lastNote.offset().top - 20
//         }, 600);

//         // Візуальне виділення нотатки
//         lastNote.css('box-shadow', '0 0 10px 3px rgba(217, 0, 61, 0.7)');
//         setTimeout(() => lastNote.css('box-shadow', ''), 2000);
//     });
// });





