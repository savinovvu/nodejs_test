function getGeneratedNumber() {
    let numberFrom = $("#numberFrom").val();
    let numberTo = $("#numberTo").val();
    if (numberTo - numberFrom <= 0) {
        alert("некорректный диапазон выборки");
        return;
    }

    send(ajaxAPI.generate.number + `?numberFrom=${numberFrom}&numberTo=${numberTo}`, "GET");
}

function getGeneratedString() {
    let numberLetters = $("#numberLetters").val();
    if (numberLetters < 0) {
        alert("не может быть отрицательным");
        return;
    }
    send(ajaxAPI.generate.string + `?number=${numberLetters}`, "GET");
}

function getBDNumber() {
    let numberFrom = $("#numberFrom").val();
    let numberTo = $("#numberTo").val();
    if (numberTo - numberFrom <= 0) {
        alert("некорректный диапазон выборки");
        return;
    }

    send(ajaxAPI.bd.number + `?numberFrom=${numberFrom}&numberTo=${numberTo}`, "GET");
}

function getBDString() {
    let numberLetters = $("#numberLetters").val();
    if (numberLetters < 0) {
        alert("не может быть отрицательным");
        return;
    }
    send(ajaxAPI.bd.string + `?number=${numberLetters}`, "GET");
}

