var settings = {
    async: true,
    crossDomain: true,
    url: "https://mylessons-c08d.restdb.io/rest/plan",
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "x-apikey": "7dcf86b0f5f0fd2f8de664b0b0d946b9cd8bf"
    },
    data: null
};

$("#btn").click(function () {

    let noteInput = $("#noteInput").val();
    let content = $("#content").val();
    let datatime = "00:00,00.00.2026";

    let jsondata = {
        noteInput: noteInput,
        content: content,
        datatime: datatime
    };

    console.log(jsondata);

    // 🔥 ОНОВЛЮЄМО data ПЕРЕД POST
    settings.data = JSON.stringify(jsondata);

    $.ajax(settings)
        .done(function (response) {
            console.log("OK:", response);
        })
        .fail(function (err) {
            console.error("ERROR:", err.responseText);
        });

});





function post() {

} 