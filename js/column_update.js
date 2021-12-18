
$(document).on('click','.columnUpdate',function(){

    var columnCode = $(this).attr('columnCode');

    var response  = columnController.getByColumnCode(columnCode);

    if( response.status)
    {
        var column = response.data;
        
        $.confirm({
            title: 'Editar coluna !',
            type: 'blue',
            content: '' +
            '<div class="form-group">' +
                '<label>Nome:</label>' +
                '<input type="text" value="'+column.columnName+'" class="columnName form-control" />' +
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

                        var columnName = this.$content.find('.columnName').val();
                
                        if(!columnName)
                        {
                            $.alert({
                                title:'Erro !',
                                content:'Campo obrigatório !',
                                type:'red'
                            });
                            return false;
                        }

                        if(columnName == column.columnName )
                        {
                            return true;
                        }

                        var columnExists = columnController.columnRepository.getByColumnName(columnName);

                        if(columnExists)
                        {
                            if(columnExists.columnCode != column.columnCode)
                            {
                                $.alert({
                                    title:'Erro !',
                                    content:"Já existe uma coluna com este nome !",
                                    type:'red'
                                });

                                return false;
                            }
                        }
                        
                        response = columnController.update(columnCode,columnName);

                        if(response.status)
                        {

                            // $.alert({
                            //     title:'Sucesso !',
                            //     content:response.message,
                            //     type:'green'
                            // });
                            
                            var columnElement = new ColumnElement(columnCode,columnName);

                            $(`#${columnElement.columnNameId}`).text(columnName);
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
