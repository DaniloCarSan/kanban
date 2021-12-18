$(document).on('click','.rowCreate',function(){
    
    var columnCode = $(this).attr('columnCode');

    $.confirm({
        title: 'Adicionar nota !',
        content: '' +
        '<div class="form-group">' +
            '<label>Descrição:</label>' +
            '<textarea rows="3" class="rowContent form-control"></textarea>' +
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

                    var rowContent = this.$content.find('.rowContent').val();
                    
                    if(!rowContent)
                    {
                        $.alert({
                            title:'Atenção !',
                            content:'Conteúdo obrigatório !',
                            type:'red'
                        });

                        return false;
                    }

                    var response = rowController.create(rowContent,columnCode);

                    if(response.status)
                    {
                        // $.alert({
                        //     title:'Sucesso !',
                        //     content:response.message,
                        //     type:'green'
                        // });

                        appendRow(response.data);
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
