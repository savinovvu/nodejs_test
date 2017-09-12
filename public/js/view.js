function view(data) {
    let table = $('#entityT').DataTable();
    table.destroy();

    $('#entityT').DataTable({
        "data": data,
        "columns": [
            {"data": "id"},
            {
                "data": "info"
            }
        ]
    });

}
