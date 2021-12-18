
$(document).on('click','.rowUpdate',function(){

    var rowCode = $(this).attr('rowCode');

    var response  = rowController.getByRowCode(rowCode);

    if( response.status)
    {

        var row = response.data;
        
        $.confirm({
            title: 'Editar linha !',
            type: 'blue',
            content: '' +
            '<div class="form-group">' +
                '<label>Descrição:</label>' +
                '<textarea rows="3" class="rowContent form-control">'+row.rowContent+'</textarea>' +
            '</div>',
            buttons: {
                cancel: {
                    text: 'Cancelar',
                    btnClass: 'btn-danger',
                    action: function () {}
                },
                confirm: {
                    text: 'Salvar',
                    btnClass: 'btn-blue',
                    action: function () {

                        var rowContent = this.$content.find('.rowContent').val();
                
                        if(!rowContent)
                        {
                            $.alert({
                                title:'Erro !',
                                content:'Campo obrigatório !',
                                type:'red'
                            });
                            return false;
                        }

                        if(rowContent == row.rowContent )
                        {
                            return true;
                        }

                        response = rowController.update(rowCode,rowContent);

                        if(response.status)
                        {

                            // $.alert({
                            //     title:'Sucesso !',
                            //     content:response.message,
                            //     type:'green'
                            // });
                            
                            var rowElement = new RowElement(rowCode,rowContent,row.columnCode);

                            $(`#${rowElement.rowContentId}`).text(rowContent);
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
