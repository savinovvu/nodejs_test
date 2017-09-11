/*var ajaxAPI = {

    "generate": {
        "number": "/getGeneratedNumber",
        "string": "/getGeneratedString"
    },
    "bd": {
        "number": "/getBDNumber",
        "string": "/getBDString"
    }
};*/



jQuery(function ($) {
    $("#delEntity").submit(function (e) {
        e.preventDefault();
        $("#dismissButton").click();
        var answerKit = new AnswerKit(
            $("#delId").val(), null
        );
        send("/constructor/answerKit", "DELETE", answerKit);
    });
});


jQuery(function ($) {
    $("#putEntity").submit(function (e) {
        e.preventDefault();

        var answerKit = new AnswerKit(
            $('#id').val(),
            $("#name").val(),
            $('#answerType').val()

        );
        send("/constructor/answerKit", "PUT", answerKit);
        document.getElementById('name').value = "";
    });
});