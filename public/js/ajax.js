let ajaxAPI = {

    "generate": {
        "number": "/getGeneratedNumber",
        "string": "/getGeneratedString"
    },
    "bd": {
        "number": "/getBDNumber",
        "string": "/getBDString"
    }
};


function send(url, type, jsonData) {
    $.ajax({

        url: url,
        type: type,
        contentType: 'application/json',
        data: JSON.stringify(jsonData),
        success: function (data) {
             view(data);

        },
        error: function (x) {
            alert("error");

        }

    });
    return false;
}


