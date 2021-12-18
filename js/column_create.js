
$('#columnCreate').click(function(){
    $.confirm({
        title: 'Create column !',
        content: '' +
        '<div class="form-group">' +
            '<label>Nome:</label>' +
            '<input type="text" class="columnName form-control" /><br>' +
        '</div>',
        buttons: {
            cancel: {
                text: 'Cancelar',
                btnClass: 'btn-danger',
                action: function () {}
            },
            confirm: {
                text: 'Adicionar',
                btnClass: 'btn-blue',
                action: function () {

                    var colunaNome = this.$content.find('.columnName').val();
                    
                    if(!colunaNome)
                    {
                        $.alert({
                            title:'Atenção !',
                            content:'Nome da coluna obrigatório !',
                            type:'red'
                        });
                        return false;
                    }

                    var response  = columnController.create(colunaNome);

                    if(response.status)
                    {
                        // $.alert({
                        //     title:'Sucesso !',
                        //     content:response.message,
                        //     type:'green'
                        // });

                        appendColumn(response.data);
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
});
