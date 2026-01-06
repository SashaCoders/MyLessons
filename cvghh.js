





// GET notes
var getSettings = {
    async: true,
    crossDomain: true,
    url: "https://mylessons-c08d.restdb.io/rest/plan",
    method: "GET",
    headers: {
        "content-type": "application/json",
        "x-apikey": "695ccc857ba9c9f74b78475c",
        "cache-control": "no-cache"
    }
};

    $.ajax(getSettings).done(function (response) {
        draw(response); // сразу отрисовываем заметки
    });




// Функция для отображения заметок
function draw(items) {
    const $container = $("#notesContainer");
    $container.empty();

    const arr = Array.isArray(items) ? items : [items];
    arr.forEach(item => {
        const $note = $(`
            <div class="note" data-id="${item._id}">
                <h1 class="title" contenteditable="true">${item.noteInput || ""}</h1>
                <p class="content" contenteditable="true">${item.content || ""}</p>
                <p class="date">${item.datatime || ""}</p>
                <div class="controls">
                    <button class="remove">Remove</button>
                </div>
            </div>
        `);
        $container.append($note);
    });
}

$(document).ready(function () {

    // DELETE заметки
    $("#notesContainer").on("click", ".remove", function () {
        const noteId = $(this).closest(".note").data("id");

        $.ajax({
            async: true,
            crossDomain: true,
            url: `https://mylessons-c08d.restdb.io/rest/plan/${noteId}`,
            method: "DELETE",
            headers: {
                "x-apikey": "695ccc857ba9c9f74b78475c",
                "content-type": "application/json"
            }
        })
            .done(function () {
                $(`.note[data-id="${noteId}"]`).remove();
            })
            .fail(function (err) {
                console.error("Ошибка удаления:", err.responseText);
            });
    });

    // POST заметки
    const postSettings = {
        async: true,
        crossDomain: true,
        url: "https://mylessons-c08d.restdb.io/rest/plan",
        method: "POST",
        headers: {
            "content-type": "application/json",
            "x-apikey": "695ccc857ba9c9f74b78475c",
            "cache-control": "no-cache"
        },
        processData: false,
        data: null // сюда будем подставлять данные при добавлении
    };

    $("#addNoteBtn").click(function () {
        let noteInput = $("#noteInput").val();
        let content = $("#content").val();
        let datatime = new Date().toISOString(); // корректная дата

        let jsondata = { noteInput, content, datatime };

        postSettings.data = JSON.stringify(jsondata);

        $.ajax(postSettings)
            .done(function (response) {


                // добавляем новую заметку в DOM сразу
                draw([response, ...Array.from($("#notesContainer .note").map((_, el) => {
                    return {
                        _id: $(el).data("id"),
                        noteInput: $(el).find(".title").text(),
                        content: $(el).find(".content").text(),
                        datatime: $(el).find(".date").text()
                    };
                }))]);

                // очищаем поля
                $("#noteInput").val('');
                $("#content").val('');
            })
            .fail(function (err) {
                console.error("Ошибка добавления:", err.responseText);
            });
    });

});



































































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
