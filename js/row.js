
function appendRow(row) {
    var rowElement = new RowElement(row.rowCode,row.rowContent,row.columnCode);
    $('#'+rowElement.columnRowsId).append(rowElement.toHTML());
}

var rowController = new RowController();

rowController.rowRepository.list().forEach(appendRow);