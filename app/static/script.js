function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie != '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = jQuery.trim(cookies[i]);
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) == (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

$.ajaxSetup({
    beforeSend: function(xhr, settings) {
        if (!(/^http:.*/.test(settings.url) || /^https:.*/.test(settings.url))) {
            // Only send the token to relative URLs i.e. locally.
            xhr.setRequestHeader("X-CSRFToken", getCookie('csrftoken'));
        }
    }
});

$('#myform').on('submit',function(event){
	event.preventDefault();
	console.log("in send form");
	var formdata = new FormData();
    var file = $('#myfile')[0].files[0];
    var name = $('#name').value;
    var description = $('#description').value;
    formdata.append('image',file);
    formdata.append('name',name);
    formdata.append('description',description);
	console.log(formdata);
	$.ajax({
		type:'POST',
		url:"upload",
		data:formdata,
		dataType: "text;charset=utf-8",
		contentType: false, 
        processData: false,
		success:function(){
			alert("sent to server");
		}
	});
	
});
