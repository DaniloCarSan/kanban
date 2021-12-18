$(document).on('click','.columnDelete',function(){

    var columnCode = $(this).attr('columnCode');

    var response  = columnController.getByColumnCode(columnCode);

    if( response.status)
    {
        var column = response.data;
        
        $.confirm({
            title: 'Remover coluna !',
            content: `Deseja realmente excluir esta coluna: <b>${column.columnName}</b> ?`,
            type: 'red',
            buttons: {
                cancel:{
                    text: 'Cancelar',
                    btnClass: 'btn-red',
                    action: function(){}
                },
                confirm:{
                    text: 'Confirmar',
                    btnClass: 'btn-primary',
                    action: function(){ 

                        var response = columnController.delete(column.columnCode);

                        if(response.status)
                        {
                            rowController.deletePerColumnCode(column.columnCode);
                            // $.alert({
                            //     title:'Sucesso !',
                            //     content:response.message,
                            //     type:'green'
                            // });

                            var columnElement = new ColumnElement(column.columnCode,column.columnName);

                            $(`#${columnElement.columnId}`).remove();
                        }
                        else
                        {
                            $.alert({
                                title:'Erro !',
                                content:response.message,
                                type:'red'
                            });
                        }

                    }
                }
            }
        });
       
    }
    else
    {
        $.alert({
            title:'Erro !',
            content:response.message,
            type:'red'
        });
    }
});