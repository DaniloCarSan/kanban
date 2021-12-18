
class RowElement {

    constructor(rowCode, rowContent, columnCode) {
        this.rowCode = rowCode;
        this.rowContent = rowContent;
        this.columnCode = columnCode;
    }

    get rowId() 
    {
        return `row-${this.rowCode}`;
    }

    get rowUpdateId()
    {
        return `row-update-${this.rowCode}`;
    }

    get rowDeleteId()
    {
        return `row-delete-${this.rowCode}`;
    }
  
    get columnRowsId()
    {
        return `column-rows-${this.columnCode}`;
    }
    
    get rowContentId()
    {
        return `row-content-${this.rowCode}`;
    }

    toHTML()
    {
        return `<li class="list-group-item dragDroItem pt-0 mt-2" id="${this.rowId}" rowCode="${this.rowCode}">
        <div class="row" >
            <div class="col-sm-6">
                <a href="#" class="btn btn-xs btn-primary rowUpdate" id="${this.rowUpdateId}"  rowCode="${this.rowCode}">
                    /
                </a>
            </div>
            <div class="col-sm-6 text-right ">
                <a href="#" class="btn btn-xs btn-danger rowDelete" id="${this.rowDeleteId}" rowCode="${this.rowCode}">
                    -
                </a>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-12" style="margin-top:10px">
                <div class="row-content" id="${this.rowContentId}">${this.rowContent}</div>
            </div>
        </div>
    </li>`;
    }

}