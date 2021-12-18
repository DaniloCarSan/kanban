function appendColumn(column) {
    var columnElement = new ColumnElement(column.columnCode,column.columnName);
    $('#columns').append(columnElement.toHTML());
}

var columnController = new ColumnController();

columnController.columnRepository.list().forEach(appendColumn);
