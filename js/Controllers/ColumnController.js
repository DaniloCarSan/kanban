
class ColumnController {

    columnRepository = new ColumnRepository();

    getByColumnCode(columnCode) 
    {
        var column = null;

        if(column = this.columnRepository.getByColumnCode(columnCode)) 
        {
            return {status:true,message:"Coluna selecionada co sucesso !",data:column};
        }

        return {status:false,message:"Coluna não encontrada !",data:column};
    }

    create(columnName) 
    {
        var column = null;

        if(column = this.columnRepository.getByColumnName(columnName)) 
        {
            return {status:false,message:"Já existe uma coluna com este nome !",data:column};
        }

        column = this.columnRepository.create(columnName);

        return {status:true,message:"Coluna criada com sucesso !",data:column};
    }

    update(columnCode,columnName) 
    {
        var column =  this.columnRepository.update(columnCode, columnName);

        return {status:true,message:"Coluna atualizada com sucesso !",data:column};
    }

    delete(columnCode)
    {
        var column =  this.columnRepository.delete(columnCode);

        return {status:true,message:"Coluna excluida com sucesso !",data:column};
    }
    

}