class ColumnRepository {

    tableName= "columns";
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

    getNextColumnCode()
    {
        if( this.table.length == 0 )
        {
            return 1;
        }

        return this.table[this.table.length-1].columnCode +1;
    }

    getByColumnCode(columnCode)
    {
        if(! this.table)
        {
            return null;
        }
     
        var column = null;

        for (const key in this.table) 
        {
            if (Object.hasOwnProperty.call(this.table, key))
            {
                var c1 = this.table[key];

                if(c1.columnCode == columnCode)
                {
                    column = c1;
                }
                
            }
        }
 
        return column;
    }

    getByColumnName(columnName)
    {
        if(! this.table)
        {
            return null;
        }
     
        var column = null;

        for (const key in this.table) 
        {
            if (Object.hasOwnProperty.call(this.table, key))
            {
                var c1 = this.table[key];

                if(c1.columnName == columnName)
                {
                    column = c1;
                }
                
            }
        }
 
        return column;
    }

    list()
    {
        if(! this.table)
        {
            this.table = [];
        }
        
        return this.table;
    }

    create(columnName)
    {
        if(! this.table)
        {
            this.table = [];
        }
        
        var columnCode = this.getNextColumnCode();
        
        var column = {
            'columnCode':columnCode,
            'columnName':columnName,
        };
        
        this.table.push(column);
    
        localStorage.setItem(this.tableName,JSON.stringify(this.table));

        return column;
    }

    update(columnCode,columnName)
    {
        if( this.table.length == 0)
        {
            return null;
        }
     
        var column = null;

        for (const key in this.table) 
        {
            if (Object.hasOwnProperty.call(this.table, key))
            {
                var c1 = this.table[key];

                if(c1.columnCode == columnCode)
                {
                    column = c1;
                    column.columnName = columnName;
                    this.table[key] = column;

                    break;
                }
                
            }
        }
        
        localStorage.setItem(this.tableName,JSON.stringify(this.table));

        return column;
    }

    delete(columnCode) 
    {
        if(localStorage.getItem(this.tableName))
        {
            if(this.table.length > 0)
            {
                this.table = JSON.parse(localStorage.getItem(this.tableName));
            }
        }

        var columns = [];

        for (const key in this.table) 
        {
            if (Object.hasOwnProperty.call(this.table, key))
            {
                var c1 = this.table[key];

                if(c1.columnCode != columnCode)
                {
                    columns.push(c1);
                }
            }
        }

        localStorage.setItem(this.tableName,JSON.stringify(columns));

        return true;
    }
}