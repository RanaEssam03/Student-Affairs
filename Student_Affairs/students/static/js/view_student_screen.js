
function changeState(id){
    $.ajax({
        type: 'POST',
        url: '../allstudents/',
        data: {
            'id': id,
            'state': $('#state'+id).val(),
            'csrfmiddlewaretoken': $('input[name=csrfmiddlewaretoken]').val(),
            'action': 'POST'
        },
        success: function(json){
            console.log( id)
        },
        error: function(xhr, errmsg, err){
            alert(errmsg);
        }
    });
}
