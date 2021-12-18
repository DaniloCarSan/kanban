class RowRepository {

    tableName= "rows";
    table = null;

    constructor() {

        if(!localStorage.getItem(this.tableName))
        {
            localStorage.setItem(this.tableName,JSON.stringify([]));
        }
        else
        {
            this.table = JSON.parse(localStorage.getItem(this.tableName));
        }

    }

    getNextRowCode()
    {
        if( this.table.length == 0 )
        {
            return 1;
        }

        return this.table[this.table.length-1].rowCode +1;
    }

    getNextRowOrder(columnCode) 
    {
        var rowOrder = 0;

        if(! this.table)
        {
           return rowOrder;
        }

        var rows = [];

        for (const key in this.table) 
        {
            if (Object.hasOwnProperty.call(this.table, key))
            {
                var r1 = this.table[key];

                if(r1.columnCode == columnCode)
                {
                    rows.push(r1.rowOrder);
                }
            }
        }

        rows.forEach(function(value){
            if(value > rowOrder)
            {
                rowOrder = value;
            }
        });

        return rowOrder+1;
    }

    getByRowCode(rowCode)
    {
        if(! this.table)
        {
            return null;
        }
     
        var row = null;

        for (const key in this.table) 
        {
            if (Object.hasOwnProperty.call(this.table, key))
            {
                var r1 = this.table[key];

                if(r1.rowCode == rowCode)
                {
                    row = r1;
                }
                
            }
        }
 
        return row;
    }

    list()
    {
        if(! this.table)
        {
            this.table = [];
        }
        
        return this.table.sort(function(a, b) {
            return a.rowOrder - b.rowOrder;
        });
    }

    create(rowContent, columnCode)
    {
        if(! this.table)
        {
            this.table = [];
        }
        
        var rowCode = this.getNextRowCode();
        var rowOrder = this.getNextRowOrder(columnCode);
        
        var column = {
            'rowCode': rowCode,
            'rowContent':rowContent,
            'rowOrder': rowOrder,
            'columnCode':columnCode,
        };
        
        this.table.push(column);
    
        localStorage.setItem(this.tableName,JSON.stringify(this.table));

        return column;
    }

    update(row)
    {
        var status = false;

        if( this.table.length == 0)
        {
            return status;
        }
     
        for (const key in this.table) 
        {
            if (Object.hasOwnProperty.call(this.table, key))
            {
                var r1 = this.table[key];

                if(r1.rowCode == row.rowCode)
                {
                    this.table[key] = row;
                    status = true;
                    break;
                }
                
            }
        }

        if(status)
        {
            localStorage.setItem(this.tableName,JSON.stringify(this.table));
        }

        return status;
    }

    delete(rowCode) 
    {
        var status = false;

        if(! this.table)
        {
           return status;
        }

        var rows = [];

        for (const key in this.table) 
        {
            if (Object.hasOwnProperty.call(this.table, key))
            {
                var r1 = this.table[key];

                if(r1.rowCode != rowCode)
                {
                    rows.push(r1);
                }
                else
                {
                    status = true;
                }
            }
        }

        if(status)
        {
            localStorage.setItem(this.tableName,JSON.stringify(rows));
        }

        return status;
    }

    deletePerColumnCode(columnCode)
    {
        if(! this.table)
        {
           return false;
        }

        var rows = [];

        for (const key in this.table) 
        {
            if (Object.hasOwnProperty.call(this.table, key))
            {
                var r1 = this.table[key];

                if(r1.columnCode != columnCode)
                {
                    rows.push(r1);
                }
            }
        }

        localStorage.setItem(this.tableName,JSON.stringify(rows));

        return true;
    }

    orderRows(columnCode, rows)
    {
        
        if( this.table.length == 0)
        {
            return null;
        }

        var rs = [];

        for (const rowOrder in rows)
        {
            if (Object.hasOwnProperty.call(rows, rowOrder))
            {
                const rowCode = rows[rowOrder];
                
                var row = this.getByRowCode(rowCode);
                
                if(row)
                {
                    row.rowOrder = rowOrder;
                    
                    if(columnCode)
                    {
                        row.columnCode = columnCode;
                    }

                    if(this.update(row))
                    {
                        rs.push(row);
                    }
                }
                
            }
        }
 
        return rs;
    }

}