class ColumnElement {

    constructor(columnCode,columnName) {
        this.columnCode = columnCode;
        this.columnName = columnName;
    }

    get columnId() 
    {
        return `column-${this.columnCode}`;
    }

    get columnHeaderId() 
    {
        return `column-header-${this.columnCode}`;
    }

    get columnNameId()
    {
        return `column-name-${this.columnCode}`;
    }

    get columnUpdateId()
    {
        return `column-update-${this.columnCode}`;
    }

    get columnDeleteId()
    {
        return `column-delete-${this.columnCode}`;
    }

    get columnRowsId() {
        return `column-rows-${this.columnCode}`;
    }

    static getElementBycolumnCode(columnCode)
    {
        return document.getElementById(`column-${columnCode}`);
    }
  
    toHTML() 
    {
        return `<div class="col-sm-3" id="${this.columnId}" columnCode="${this.columnCode}">  
            <ul class=" list-group listGroupDraDropPai">
                <li class="list-group-item" id="${this.columnHeaderId}">
                    <div class="row">
                        <div class="col-md-8">
                            <b id="${this.columnNameId}">${this.columnName}</b>
                        </div>
                        <div class="col-md-4 text-right">
                            <button type="button" class="btn btn-xs btn-primary columnUpdate" id="${this.columnEditId}" columnCode="${this.columnCode}">
                                /
                            </button>
                            <button type="button" class="btn btn-xs btn-danger columnDelete" id="${this.columnDeleteId}" columnCode="${this.columnCode}">
                                -
                            </button>
                            <button type="button" class="btn btn-xs btn-primary rowCreate" columnCode="${this.columnCode}" >
                                |||
                            </button>
                        </div>
                    </div>
                </li>
                <ul class="droptrue list-group" style="height:100%;" id="${this.columnRowsId}" columnCode="${this.columnCode}">
                
                </ul>
            </ul>
        </div>`;
    }
}