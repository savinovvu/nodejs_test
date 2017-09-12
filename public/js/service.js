function getGeneratedNumber() {
    var numberFrom = $("#numberFrom").val();
    var numberTo = $("#numberTo").val();
    if (numberTo - numberFrom <= 0) {
        alert("некорректный диапазон выборки");
        return;
    }

    send(ajaxAPI.generate.number + `?numberFrom=${numberFrom}&numberTo=${numberTo}`, "GET");
}

function getGeneratedString() {
    var numberLetters = $("#numberLetters").val();
    if (numberLetters < 0) {
        alert("не может быть отрицательным");
        return;
    }
    send(ajaxAPI.generate.string + `?number=${numberLetters}`, "GET");
}

function getBDNumber() {
    var numberFrom = $("#numberFrom").val();
    var numberTo = $("#numberTo").val();
    if (numberTo - numberFrom <= 0) {
        alert("некорректный диапазон выборки");
        return;
    }

    send(ajaxAPI.bd.number + `?numberFrom=${numberFrom}&numberTo=${numberTo}`, "GET");
}

function getBDString() {
    var numberLetters = $("#numberLetters").val();
    if (numberLetters < 0) {
        alert("не может быть отрицательным");
        return;
    }
    send(ajaxAPI.bd.string + `?number=${numberLetters}`, "GET");
}

