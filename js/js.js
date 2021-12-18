$(function() {

    var  colorName = CSS_COLOR_NAMES[0];

    var backgroundColor = localStorage.getItem('background-color');

    for (const key in CSS_COLOR_NAMES) 
    {
        if (Object.hasOwnProperty.call(CSS_COLOR_NAMES, key))
        {
            colorName = CSS_COLOR_NAMES[key];

            $('#backgroundColor').append(`<option value="${colorName}">${colorName}</option>`);
        }
    }

    if(backgroundColor)
    {
        colorName = backgroundColor
    }
    else
    {
        localStorage.setItem('background-color',colorName);
    }

    $('body').css('background-color',colorName);

    $('#backgroundColor').val(colorName);

    $('#backgroundColor').change(function(){

        $color = $(this).val();

        $('body').css('background-color',$color);
        
        localStorage.setItem('background-color',$color);
        
    });
    
    $( "ul.droptrue" ).sortable({
        connectWith: "ul",
        update: function( event, ui )
        {
            var rows = [];
            var  columnCode = ui.item[0].parentElement.attributes['columnCode'].nodeValue;

            $.each(ui.item[0].parentElement.childNodes, function (){ 
                if($(this).hasClass('dragDroItem'))
                {
                    rows.push($(this).attr('rowCode'));
                }
            });
         
            rowController.orderRows(columnCode,rows);
        }
    });

});