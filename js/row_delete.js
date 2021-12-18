$(document).on('click','.rowDelete',function(){

    var rowCode = $(this).attr('rowCode');

    var response  = rowController.getByRowCode(rowCode);

    if( response.status)
    {
        var row = response.data;
        
        $.confirm({
            title: 'Remover linha !',
            content: `Deseja realmente excluir esta linha ?`,
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

                        var response = rowController.delete(row.rowCode);

                        if(response.status)
                        {
                            // $.alert({
                            //     title:'Sucesso !',
                            //     content:response.message,
                            //     type:'green'
                            // });

                            var rowElement = new RowElement(row.rowCode, row.rowContent, row.columnCode);

                            $(`#${rowElement.rowId}`).remove();
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