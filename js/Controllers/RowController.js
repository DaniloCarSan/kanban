
class RowController {

    rowRepository = new RowRepository();

    getByRowCode(rowCode) 
    {
        var row = null;

        if(row = this.rowRepository.getByRowCode(rowCode)) 
        {
            return {status:true,message:"Linha selecionada com sucesso !",data:row};
        }

        return {status:false,message:"Linha não encontrada !",data:row};
    }

    create(rowContent,columnCode) 
    {
        var row = this.rowRepository.create(rowContent,columnCode);

        return {status:true,message:"Linha criada com sucesso !",data:row};
    }

    update(row) 
    {
        var status =  this.rowRepository.update(row);

        return {status:status,message:"Linha atualizada com sucesso !",data:row};
    }

    delete(rowCode)
    {
        var status = this.rowRepository.delete(rowCode);

        return {status:status,message:"Linha excluida com sucesso !"};
    }

    deletePerColumnCode(columnCode)
    {
        var row = this.rowRepository.deletePerColumnCode(columnCode);

        return {status:row,message: row ? "Linhas excluidas com sucesso !": "Não foi possível excluir as linhas desta coluna",data:row};
    }

    orderRows(columnCode, rows)
    {
        this.rowRepository.orderRows(columnCode, rows);

        return {status:true,message:"Linha ordenas com sucesso !"};
    }
    
}
